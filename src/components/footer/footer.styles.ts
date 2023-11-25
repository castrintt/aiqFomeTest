import { Colors } from "@globals/colors";
import { Fonts } from "@globals/fonts";
import { styled } from "styled-components";

export const Base = styled.footer`
  width: 100%;
  height: auto;
  padding-block: 2rem;
  background-color: ${Colors.purple.lighter};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  & > span:first-of-type {
    font-size: 0.875rem;
    font-style: normal;
    font-weight: ${Fonts.bold};
    line-height: 1.1875rem;
    color: ${Colors.purple.bolder};
  }
  & > span:nth-of-type(2) {
    font-size: 1.125rem;
    font-style: normal;
    font-weight: ${Fonts.bold};
    line-height: 1.1875rem;
    color: ${Colors.purple.bolder};
  }
`;
