import { currencyConversion } from "@utils/currencyConversion";
import { useState, useCallback } from "react";

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

  const [beverages, setBeverages] = useState({
    coke: {
      basePrice: 5.0,
      count: 0,
      price: 0,
    },
    juice: {
      basePrice: 6.0,
      count: 0,
      price: 0,
    },
    water: {
      basePrice: 3.0,
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
      const beverageBasePrice = beverages[beverage].basePrice;
      const priceBeverage = selectedBeverage.price + beverageBasePrice;

      setBeverages({
        ...beverages,
        [beverage]: {
          ...[beverage],
          count: countBeverage,
          price: priceBeverage,
          basePrice: beverageBasePrice,
        },
      });
    },
    [beverages]
  );

  const onRemoveBeverage = useCallback(
    (beverage: "coke" | "juice" | "water") => {
      const selectedBeverage = beverages[beverage];
      const countBeverage =
        selectedBeverage.count > 0
          ? selectedBeverage.count - 1
          : selectedBeverage.count;
      const beverageBasePrice = beverages[beverage].basePrice;
      const priceBeverage = selectedBeverage.price - beverageBasePrice;

      setBeverages({
        ...beverages,
        [beverage]: {
          ...[beverage],
          count: countBeverage,
          price: priceBeverage,
          basePrice: beverageBasePrice,
        },
      });
    },
    [beverages]
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
      knifeAndForkPrice: currencyConversion(knifeAndForkPrice),
      mealCount,
      mealSize,
      cutleryItem,
      fortuneCookie,
      springRoll,
      coke: {
        basePrice: currencyConversion(beverages.coke.basePrice),
        count: beverages.coke.count,
        price: currencyConversion(beverages.coke.price),
      },
      juice: {
        basePrice: currencyConversion(beverages.juice.basePrice),
        count: beverages.juice.count,
        price: currencyConversion(beverages.juice.price),
      },
      water: {
        basePrice: currencyConversion(beverages.water.basePrice),
        count: beverages.water.count,
        price: currencyConversion(beverages.water.price),
      },
    },
  };
};

export default UseBaseController;
