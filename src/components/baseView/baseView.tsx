import { BaseViewProps } from "./baseView.types";
import { Container, MainContent } from "./baseView.styles";
import Header from "@components/header/header";
import Footer from "@components/footer/footer";

const BaseView = ({ children, haveTicket }: BaseViewProps) => {
  return (
    <Container>
      <Header haveTicket={haveTicket} />
      <MainContent>{children}</MainContent>
      <Footer />
    </Container>
  );
};

export default BaseView;
