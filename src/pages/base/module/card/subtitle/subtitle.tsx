import { SubTitleContent } from "./subtitle.styles";
import { SubTitleProps } from "./subtitle.types";

const Subtitle = ({ text }: SubTitleProps) => {
  return <SubTitleContent>{text}</SubTitleContent>;
};

export default Subtitle;
