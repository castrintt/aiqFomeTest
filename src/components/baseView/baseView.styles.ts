import { Colors } from "@globals/colors";
import { styled } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.white};
`;

export const MainContent = styled.main`
  width: 100%;
  flex: 1;
`;
