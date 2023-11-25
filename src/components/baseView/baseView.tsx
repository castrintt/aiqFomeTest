import { BaseViewProps } from "./baseView.types";
import {
  Container,
  Header,
  MainContent,
  Footer,
  HeaderInfoContainer,
  HeaderSearchContainer,
  HeaderButtonContainer,
  TicketFlag,
  LocationInformationContainer,
  Location,
} from "./baseView.styles";
import Ticket from "@icons/ticket";
import User from "@icons/user";
import Branding from "@icons/branding";
import LocationIcon from "@icons/location";
import Search from "@icons/search";
import Arrow from "@icons/arrow";
import Button from "@components/button/button";

const BaseView = ({ children, haveTicket }: BaseViewProps) => {
  return (
    <Container>
      <Header>
        <HeaderInfoContainer>
          <Branding />
          <LocationInformationContainer>
            <LocationIcon />
            <Location>
              <span>entregando em</span>
              <span>
                Rua Mandaguari, 198 <Arrow />
              </span>
            </Location>
          </LocationInformationContainer>
        </HeaderInfoContainer>

        <HeaderSearchContainer>
          <Search />
          <input
            type="search"
            placeholder="busque pela loja ou culinária"
            name=""
            id=""
          />
        </HeaderSearchContainer>

        <HeaderButtonContainer>
          {haveTicket && (
            <TicketFlag>
              <Ticket />
              <span>ver ticket</span>
            </TicketFlag>
          )}
          <Button color="blue" icon={<User />} text="entrar" />
        </HeaderButtonContainer>
      </Header>

      <MainContent>{children}</MainContent>

      <Footer></Footer>
    </Container>
  );
};

export default BaseView;
