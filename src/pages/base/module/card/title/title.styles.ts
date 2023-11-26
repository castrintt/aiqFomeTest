import { Fonts } from "@globals/fonts";
import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  

  & >button {
    position: relative;
    right: -6%;
  }
`;

export const TitleContent = styled.span`
  font-size: 1rem;
  font-style: normal;
  font-weight: ${Fonts.bold};
  line-height: normal;
`;
