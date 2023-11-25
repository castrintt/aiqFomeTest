// import UseBaseController from "./base.controller";
import BaseView from "@components/baseView/baseView";
import { Container } from "./base.styles";

const Base = () => {
  //   const { Actions, States } = UseBaseController();

  return (
    <BaseView haveTicket={true}> 
      <Container>
        <p>teste</p>
      </Container>
    </BaseView>
  );
};

export default Base;
