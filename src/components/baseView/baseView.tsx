import { BaseViewProps } from "../baseView.types";
import { Container, Header, MainContent, Footer } from "./baseView.styles";

const BaseView = ({ content }: BaseViewProps) => {
  return (
    <Container>
      <Header></Header>
      <MainContent>{content}</MainContent>
      <Footer></Footer>
    </Container>
  );
};

export default BaseView;
