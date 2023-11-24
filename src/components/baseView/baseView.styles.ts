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

export const Header = styled.header`
  width: 100%;
  height: 5rem;
  background-color: ${Colors.purple.bolder};
`;

export const MainContent = styled.main`
  width: 100%;
  flex: 1;
`;

export const Footer = styled.footer`
  width: 100%;
  height: auto;
  padding-block: 2rem;
  background-color: ${Colors.purple.lighter};
`;
