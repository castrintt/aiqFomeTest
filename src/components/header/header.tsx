import Ticket from "@icons/ticket";
import User from "@icons/user";
import Branding from "@icons/branding";
import LocationIcon from "@icons/location";
import Search from "@icons/search";
import Arrow from "@icons/arrow";
import Button from "@components/button/button";
import * as STYLES from "./header.styles";
import { HeaderProps } from "./header.types";

const Header = ({ haveTicket }: HeaderProps) => {
  return (
    <STYLES.Base>
      <STYLES.HeaderInfoContainer>
        <Branding />
        <STYLES.LocationInformationContainer>
          <LocationIcon />
          <STYLES.Location>
            <span>entregando em</span>
            <span>
              Rua Mandaguari, 198 <Arrow />
            </span>
          </STYLES.Location>
        </STYLES.LocationInformationContainer>
      </STYLES.HeaderInfoContainer>

      <STYLES.HeaderSearchContainer>
        <Search />
        <input
          type="search"
          placeholder="busque pela loja ou culinária"
          name=""
          id=""
        />
      </STYLES.HeaderSearchContainer>

      <STYLES.HeaderButtonContainer>
        {haveTicket ? (
          <STYLES.TicketFlag>
            <Ticket />
            <span>ver ticket</span>
          </STYLES.TicketFlag>
        ) : (
          <STYLES.None></STYLES.None>
        )}
        <Button onClick={() => {}} color="blue" icon={<User />} text="entrar" />
      </STYLES.HeaderButtonContainer>
    </STYLES.Base>
  );
};

export default Header;
