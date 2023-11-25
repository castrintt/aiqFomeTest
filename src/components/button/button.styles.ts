import { styled } from "styled-components";
import { IButton } from "./button.interface";
import { Colors } from "@globals/colors";

export const ButtonStyled = styled.button<IButton>`
  width: 7.37rem;
  display: flex;
  height: 2.25rem;
  padding: 0.4375rem 1.5rem 0.375rem 1rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  outline: none;
  border: none;
  border-radius: 0.5rem;
  color: white;
  cursor: pointer;

  background-color: ${(props) => {
    if (props.color === "blue") {
      return Colors.blue;
    }
    return Colors.gray.bolder;
  }};
`;
