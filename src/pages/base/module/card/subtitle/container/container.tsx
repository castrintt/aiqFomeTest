import { ContainerProps } from "./container.types";
import { Base } from "./container.styles";

const Container = ({ children }: ContainerProps) => {
  return <Base>{children}</Base>;
};

export default Container;
