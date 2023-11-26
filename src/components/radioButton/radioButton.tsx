import { Radio } from "./radioButton.styles";
import { RadioButtonProps } from "./radioButton.types";

const radioButton = ({ name, onClick, checked }: RadioButtonProps) => {
  return <Radio type="radio" checked={checked} name={name} onClick={onClick} />;
};

export default radioButton;
