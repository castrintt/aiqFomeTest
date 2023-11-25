import { ButtonProps } from "./button.types";
import { ButtonStyled } from "./button.styles";

const Button = ({ icon: Icon, text, color, onClick }: ButtonProps) => {
  return (
    <ButtonStyled onClick={onClick} color={color}>
      {Icon}
      {text}
    </ButtonStyled>
  );
};

export default Button;
