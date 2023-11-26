import Button from "@components/button/button";
import { TitleProps } from "./title.types";
import { TitleContent, Container } from "./title.styles";

const Title = ({ text, withFlag }: TitleProps) => {
  return (
    <Container>
      <TitleContent>{text}</TitleContent>
      {withFlag && (
        <Button color="gray" onClick={() => {}} text="obrigatório" disabled />
      )}
    </Container>
  );
};

export default Title;
