import { ContentProps } from "./content.types";
import {Container} from './content.styles'

const Content = ({ children }: ContentProps) => {
  return <Container>{children}</Container>;
};

export default Content;
