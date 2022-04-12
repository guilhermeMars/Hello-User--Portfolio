import React, { useState } from "react";
import styled from "styled-components";
import { StyledDefaultLink } from "./UI";
import HelloUser from "../assets/Hello User.png";
import Menu from "../assets/menu responsivo.png";
import { Link } from "react-router-dom";

const Spacing = styled.div`
  padding: 0 15vw;
  height: 10vh;
`;

const StyledNavBar = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  z-index: 1;
  top: 0;
  bottom: 0;
  width: 20em;
  padding: 0 5vw;
  background-color: white;
`;

const StyledNavMenu = styled.img`
  margin-top: 20px;
  width: 3.5em;
`;

const StyledH1 = styled.h1`
  font-size: 40px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const StyledContentBar = styled(Link)`
  font-size: 30px;
  color: rgba(0, 0, 0, 0.75);
  margin: 5px 10px;
  background-color: rgb(237, 232, 232);
  border-radius: 5px;
`;

const CenterDiv = styled.div`
  text-align: center;
  margin-top: 40px;
`;

const StyledBarLink = styled(StyledDefaultLink)`
  text-align: center;
  font-size: 23px;
  padding: 15px 15px;
`;

const SyledHeader = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  background-color: white;
  display: flex;
  padding: 0 15vw;
  justify-content: space-between;
  height: 10vh;
  align-items: center;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.3);
  @media only screen and (max-width: 1000px) {
    padding-left: 5vw;
  }
`;

const HeadMenu = styled.div`
  display: flex;
`;

const StyledMenu = styled.img`
  display: none;
  margin-right: 3em;
  width: 3.5em;
  @media only screen and (max-width: 1000px) {
    display: block;
  }
`;

const HeadLink = styled(Link)`
  width: 100%;
  height: 100%;
`;

const StyledImg = styled.img`
  min-width: 11em;
  max-width: 12em;
  height: 100%;
`;

const StyledList = styled.ul`
  display: flex;
  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

const StyledContent = styled(Link)`
  margin: 0px 30px;
  font-size: 21px;
  color: rgba(0, 0, 0, 0.75);
  list-style-type: none;
`;

const StyledLink = styled(StyledDefaultLink)`
  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

const Header = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    if (menu === true) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  };

  return (
    <>
      <Spacing />
      {menu && (
        <StyledNavBar>
          <StyledNavMenu
            src={Menu}
            alt="Menu Responsivo"
            onClick={handleMenu}
          />
          <StyledH1>Menu</StyledH1>
          <StyledContentBar to="/">Home</StyledContentBar>
          <StyledContentBar to="/sobre">Sobre nós</StyledContentBar>
          <StyledContentBar to="/servicos">Serviços</StyledContentBar>
          <StyledContentBar to="/localizacao">Localização</StyledContentBar>
          <CenterDiv>
            <StyledBarLink to="/contato">Contate-nos</StyledBarLink>
          </CenterDiv>
        </StyledNavBar>
      )}
      <SyledHeader>
        <HeadMenu>
          <StyledMenu src={Menu} alt="Menu Responsivo" onClick={handleMenu} />
          <HeadLink to="/">
            <StyledImg src={HelloUser} alt="Hello User Logo" />
          </HeadLink>
        </HeadMenu>
        <StyledList>
          <StyledContent to="/sobre">Sobre nós</StyledContent>
          <StyledContent to="/servicos">Serviços</StyledContent>
          <StyledContent to="/localizacao">Localização</StyledContent>
        </StyledList>
        <StyledLink to="/contato">Contate-nos</StyledLink>
      </SyledHeader>
    </>
  );
};

export default Header;
