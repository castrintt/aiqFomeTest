import { Colors } from "@globals/colors";
import { styled } from "styled-components";

export const CheckBox = styled.input`
  width: 1rem;
  height: 1rem;
  cursor: pointer;
  appearance: none;
  outline: none;
  border-radius: 0.1rem;
  border: 1px solid ${Colors.gray.lighter};
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    opacity: 0;
  }

  &:checked::before {
    display: flex;
    justify-content: center;
    align-items: center;
    content: url("../../../assets/images/radio.png");
    font-size: 0.01rem;
    color: ${Colors.white};
    width: 1rem;
    height: 1rem;
    border-radius: 0.1rem;
    object-fit: cover;
    background-color: ${Colors.blue};
    position: absolute;
    top: -0.1rem;
    opacity: 1;
  }
`;
