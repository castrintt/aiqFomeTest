import { Colors } from "@globals/colors";
import { Fonts } from "@globals/fonts";
import { styled } from "styled-components";

export const Base = styled.header`
  width: 100%;
  height: 5rem;
  background-color: ${Colors.purple.bolder};
  display: grid;
  grid-template-columns: 1.2fr 1.5fr 1fr;
  justify-content: center;
  align-items: center;

  @media all and (min-width: 1440px) {
    grid-template-columns: 28% 1.5fr 1fr;
  }
`;
export const HeaderInfoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
`;
export const LocationInformationContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.62rem;
`;
export const Location = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  & > span:nth-of-type(1) {
    font-size: 0.8rem;
    font-style: normal;
    font-weight: ${Fonts.bold};
    line-height: 1.1875rem;
    color: ${Colors.white};
  }
  & > span:nth-of-type(2) {
    font-size: 1rem;
    font-style: normal;
    font-weight: ${Fonts.bold};
    line-height: normal;
    color: ${Colors.white};
    cursor: pointer;
    & > svg {
      position: relative;
      top: 0.2rem;
    }
  }
`;
export const HeaderSearchContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  position: relative;

  & > svg {
    position: absolute;
    left: 1.5rem;
  }

  input {
    margin-left: 1rem;
    display: flex;
    width: 26.25rem;
    padding: 0.5rem 0rem 0.5rem 2rem;
    align-items: center;
    gap: 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid ${Colors.gray.medium};
    background: ${Colors.white};
    font-size: 0.875rem;
    font-style: normal;
    font-weight: ${Fonts.semiBold};

    &:focus {
      outline: none;
    }
  }
`;
export const HeaderButtonContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
export const TicketFlag = styled.div`
  width: 8.93rem;
  height: 2.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.5rem;
  background-color: #f8ecfe;
  cursor: pointer;

  span {
    color: ${Colors.purple.bolder};
    font-size: 1rem;
    font-style: normal;
    font-weight: ${Fonts.bold};
    line-height: normal;
  }
`;
export const None = styled.div`
  width: 8.93rem;
  height: 2.25rem;
  background-color: transparent;
`;
