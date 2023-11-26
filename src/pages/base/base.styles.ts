import { Colors } from "@globals/colors";
import { Fonts } from "@globals/fonts";
import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const MealDescriptionContainer = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 1.5rem;
`;

export const RestaurantContainer = styled.div`
  width: 100%;
  height: 100%;
  height: 5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;

  & > span {
    font-size: 1.2rem;
    font-style: normal;
    font-weight: ${Fonts.bold};
    line-height: normal;
  }
`;

export const Meal = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
`;

export const MealDescription = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 3.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2rem;

  & > div:first-of-type {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.5rem;

    & > span:first-of-type {
      font-size: 1.2rem;
      font-style: normal;
      font-weight: ${Fonts.bold};
      line-height: normal;
    }
    & > span:nth-of-type(2),
    & > span:nth-of-type(3) {
      font-size: 0.9rem;
      font-style: normal;
      font-weight: ${Fonts.bold};
      line-height: normal;
      color: ${Colors.gray.medium};

      & > strong {
        color: ${Colors.purple.bolder};
        font-size: 1rem;
        font-weight: ${Fonts.extraBold};
      }
    }
  }

  & > div:last-of-type {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    & > div:first-of-type {
      height: 2.7rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 0.5rem;

      & > span {
        width: 14rem;
        font-size: 0.9rem;
        font-style: normal;
        font-weight: ${Fonts.bold};
        line-height: normal;
        color: ${Colors.gray.medium};
        & > strong {
          font-size: 0.875rem;
          font-style: normal;
          font-weight: ${Fonts.bold};
          line-height: 1.1875rem;
          color: ${Colors.gray.bolder};
        }
      }
    }
  }
`;

export const MealCountContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  & > svg {
    cursor: pointer;
  }

  & > span {
    width: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    font-style: normal;
    font-weight: ${Fonts.bold};
    line-height: normal;
  }
`;

export const MealImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const CardLine = styled.div`
  width: 100%;
  height: 0.13rem;
  background-color: #eef0f5;
`;

export const CardBase = styled.div`
  width: 90%;
  height: 7rem;
  margin-block: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextAreaContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex: 1 0 0;
  margin-block: 1.5rem;

  & > textarea {
    width: 40.25rem;
    padding: 0.625rem 0.75rem;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: ${Fonts.semiBold};
    line-height: 1.1875rem;
    border-radius: 0.25rem;
    border: 1px solid ${Colors.gray.lighter};
    background: ${Colors.white};
    resize: none;
    &:focus {
      outline: none;
    }
  }
`;

export const FoodSizeContainer = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 6rem;

  & > div {
    width: 20rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  & > div > label {
    width: 10rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;

    & > span {
      font-size: 0.875rem;
      font-style: normal;
      font-weight: ${Fonts.regular};
      color: ${Colors.gray.medium};
    }
  }
`;

export const FoodSizeFirstItem = styled.div`
  & > div > span {
    font-size: 0.8rem;
    font-style: normal;
    font-weight: ${Fonts.bold};
    line-height: normal;
    color: ${Colors.gray.medium};

    & > strong {
      font-size: 0.875rem;
      font-style: normal;
      font-weight: ${Fonts.bold};
      line-height: 1.1875rem;
      color: ${Colors.green};
    }
  }
`;

export const FoodSizeSecondItem = styled.div`
  display: flex;
  justify-content: space-between !important;
  align-items: center;

  & > div > span {
    font-size: 0.875rem;
    font-style: normal;
    font-weight: ${Fonts.bold};
    line-height: 1.1875rem;
    color: ${Colors.purple.bolder};
  }
`;

export const BeverageContainer = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const BeverageItem = styled.div`
  width: 25rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  & > label {
    width: 16.2rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;

    & > span {
      font-size: 0.875rem;
      font-style: normal;
      font-weight: ${Fonts.regular};
      color: ${Colors.gray.medium};
    }
  }
  & > div > span {
    font-size: 0.875rem;
    font-style: normal;
    font-weight: ${Fonts.bold};
    line-height: 1.1875rem;
    color: ${Colors.purple.bolder};
  }
`;

export const CutleryContainer = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const CutleryItem = styled.div`
  width: 25rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  & > div > span {
    font-size: 0.875rem;
    font-style: normal;
    font-weight: ${Fonts.bold};
    line-height: 1.1875rem;
    color: ${Colors.purple.bolder};
  }

  & > label {
    width: 16.2rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;

    & > span {
      font-size: 0.875rem;
      font-style: normal;
      font-weight: ${Fonts.regular};
      color: ${Colors.gray.medium};
    }
  }
`;

export const ExtraContainer = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const ExtraItem = styled.div`
  width: 25rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  & > div > span {
    font-size: 0.875rem;
    font-style: normal;
    font-weight: ${Fonts.bold};
    line-height: 1.1875rem;
    color: ${Colors.purple.bolder};
  }
  & > label {
    width: 16.2rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;

    & > span {
      font-size: 0.875rem;
      font-style: normal;
      font-weight: ${Fonts.regular};
      color: ${Colors.gray.medium};
    }
  }
`;
