import { CheckButtonProps } from "./checkButton.types";
import { CheckBox } from "./checkButton.styles";

const CheckButton = ({ checked, name, onClick }: CheckButtonProps) => {
  return <CheckBox type="checkbox" checked={checked} name={name} onClick={onClick} />;
};

export default CheckButton;
