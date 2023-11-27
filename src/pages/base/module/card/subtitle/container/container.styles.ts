import { styled } from "styled-components";

export const Base = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media all and (min-width: 1440px) {
    width: 95%;
  }
`;
