import React from "react";
import { Header, HeaderLogo, HeaderLinksContainer, HeaderLink } from "./styled/frontPageCollection";

import logo from "../media/skazka-logo-small.png";

class LandingPage extends React.Component {

  render(){
    return <div>
      <Header>
        <HeaderLogo src={logo} />
      </Header>
      <HeaderLinksContainer>
        <HeaderLink>О Компании</HeaderLink>
        <HeaderLink>Поставщики</HeaderLink>
        <HeaderLink>Работать с нами</HeaderLink>
        <HeaderLink>Где мы</HeaderLink>
      </HeaderLinksContainer>
    </div>;
  }
}

export default LandingPage;