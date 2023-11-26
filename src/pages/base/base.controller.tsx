import { useState, useCallback, useMemo } from "react";
import { currencyConversion } from "@utils/currencyConversion";

const UseBaseController = () => {
  const knifeAndForkPrice = 1;
  const [mealSize, setMealSize] = useState<"medium" | "large" | "default">(
    "default"
  );

  const [mealBasePrice, setMealBasePrice] = useState<number>(19.9);
  const [mealCount, setMealCount] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [cutleryItem, setCutlery] = useState<
    "default" | "hashi" | "knifeAndFork"
  >("default");
  const [fortuneCookie, setFortuneCookie] = useState<boolean>(false);
  const [springRoll, setSpringRoll] = useState<boolean>(false);

  const beveragesBasePrice = useMemo(() => {
    return {
      coke: 5.0,
      juice: 6.0,
      water: 3.0,
    };
  }, []);

  const [beverages, setBeverages] = useState({
    coke: {
      count: 0,
      price: 0,
    },
    juice: {
      count: 0,
      price: 0,
    },
    water: {
      count: 0,
      price: 0,
    },
  });

  const onChangeFortuneCookieState = useCallback(
    () => setFortuneCookie((prev) => !prev),
    []
  );

  const onChangeSpringRollState = useCallback(
    () => setSpringRoll((prev) => !prev),
    []
  );

  const onChangeCutlery = useCallback((selection: "hashi" | "knifeAndFork") => {
    setCutlery(selection);
  }, []);

  const onChangeMealSize = useCallback((size: "medium" | "large") => {
    setMealSize(size);
  }, []);

  const onManageMealSize = useCallback(() => {
    if (mealSize === "default") {
      setMealBasePrice(19.9);
    }
    if (mealSize === "medium") {
      setMealBasePrice(19.9);
    }
    if (mealSize === "large") {
      setMealBasePrice(28.9);
    }
  }, [mealSize]);

  const onAddMorePriceToBaseMeal = useCallback((newValue: number) => {
    setMealBasePrice((prev) => prev + newValue);
  }, []);

  const onRemovePriceTOBaseMeal = useCallback(
    (newValue: number) => {
      if (mealBasePrice - newValue > 0) {
        setMealBasePrice((prev) => prev - newValue);
      }
    },
    [mealBasePrice]
  );

  const sumBeverages = useCallback((): number => {
    const cokeTotalPrice = beverages.coke.count > 0 ? beverages.coke.price : 0;
    const juiceTotalPrice =
      beverages.juice.count > 0 ? beverages.juice.price : 0;
    const waterTotalPrice =
      beverages.water.count > 0 ? beverages.water.price : 0;
    const beverageTotalPrice =
      cokeTotalPrice + juiceTotalPrice + waterTotalPrice;
    return beverageTotalPrice;
  }, [beverages]);

  const sumExtraMeal = useCallback((): number => {
    const cookiePrice = fortuneCookie ? 2.0 : 0;
    const springRollPrice = springRoll ? 8.0 : 0;
    return cookiePrice + springRollPrice;
  }, [fortuneCookie, springRoll]);

  const sumCutlery = useCallback((): number => {
    const knifeAndFork = cutleryItem === "knifeAndFork" ? knifeAndForkPrice : 0;
    return knifeAndFork;
  }, [cutleryItem]);

  const addTotalPrice = useCallback(() => {
    if (mealCount > 0) {
      const mainMealPriceCounter = mealBasePrice * mealCount;
      const total =
        mainMealPriceCounter + sumBeverages() + sumCutlery() + sumExtraMeal();
      setTotalPrice(total);
    }
  }, [mealCount, mealBasePrice, sumBeverages, sumCutlery, sumExtraMeal]);

  const addMeal = useCallback(() => {
    setMealCount((prev) => prev + 1);
  }, []);

  const removeMeal = useCallback(() => {
    if (mealCount > 0) {
      setMealCount((prev) => prev - 1);
    }
  }, [mealCount]);

  const onAddBeverage = useCallback(
    (beverage: "coke" | "juice" | "water") => {
      const selectedBeverage = beverages[beverage];
      const countBeverage = selectedBeverage.count + 1;
      const priceBeverage =
        selectedBeverage.price + beveragesBasePrice[beverage];
      setBeverages({
        ...beverages,
        [beverage]: {
          ...[beverage],
          count: countBeverage,
          price: priceBeverage,
        },
      });
    },
    [beverages, beveragesBasePrice]
  );

  const onRemoveBeverage = useCallback(
    (beverage: "coke" | "juice" | "water") => {
      const selectedBeverage = beverages[beverage];
      const countBeverage =
        selectedBeverage.count > 0
          ? selectedBeverage.count - 1
          : selectedBeverage.count;
      const priceBeverage =
        selectedBeverage.price - beveragesBasePrice[beverage];
      setBeverages({
        ...beverages,
        [beverage]: {
          ...[beverage],
          count: countBeverage,
          price: priceBeverage,
        },
      });
    },
    [beverages, beveragesBasePrice]
  );

  return {
    Actions: {
      onAddMorePriceToBaseMeal,
      onRemovePriceTOBaseMeal,
      addTotalPrice,
      onAddMeal: addMeal,
      onRemoveMeal: removeMeal,
      onAddBeverage,
      onRemoveBeverage,
      onChangeMealSize,
      onManageMealSize,
      onChangeCutlery,
      onChangeFortuneCookieState,
      onChangeSpringRollState,
    },
    States: {
      mealBasePrice: currencyConversion(mealBasePrice),
      totalPrice: currencyConversion(totalPrice),
      mealCount,
      mealSize,
      knifeAndForkPrice: currencyConversion(knifeAndForkPrice),
      coke: {
        count: beverages.coke.count,
        price: currencyConversion(beverages.coke.price),
      },
      juice: {
        count: beverages.juice.count,
        price: currencyConversion(beverages.juice.price),
      },
      water: {
        count: beverages.water.count,
        price: currencyConversion(beverages.water.price),
      },
      beveragesBasePrice: {
        coke: currencyConversion(beveragesBasePrice.coke),
        juice: currencyConversion(beveragesBasePrice.juice),
        water: currencyConversion(beveragesBasePrice.water),
      },
      cutleryItem,
      fortuneCookie,
      springRoll,
    },
  };
};

export default UseBaseController;
