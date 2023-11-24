import { BaseViewProps } from "./baseView.types";
import { Container, Header, MainContent, Footer } from "./baseView.styles";

const BaseView = ({ children }: BaseViewProps) => {
  return (
    <Container>
      <Header></Header>
      <MainContent>{children}</MainContent>
      <Footer></Footer>
    </Container>
  );
};

export default BaseView;
