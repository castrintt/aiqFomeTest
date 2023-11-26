import { Colors } from "@globals/colors";
import { styled } from "styled-components";

export const Radio = styled.input`
  cursor: pointer;
  appearance: none;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  outline: none;
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
    content: url("../../../assets/images/radio.png");
    position: absolute;
    top: -0.3rem;
    opacity: 1;
  }
`;
