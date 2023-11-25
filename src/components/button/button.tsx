import { ButtonProps } from "./button.types";
import { ButtonStyled } from "./button.styles";

const Button = ({ icon: Icon, text, color }: ButtonProps) => {
  return (
    <ButtonStyled color={color}>
      {Icon}
      {text}
    </ButtonStyled>
  );
};

export default Button;
