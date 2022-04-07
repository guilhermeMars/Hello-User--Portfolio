import React from "react";
import styled from "styled-components";
import { StyledDefaultLink } from "./UI";
import HelloUser from "../assets/Hello User.png";
import { Link } from "react-router-dom";

const Spacing = styled.div`
  padding: 0 15vw;
  height: 10vh;
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
`;

const StyledImg = styled.img`
  width: 12em;
`;

const StyledList = styled.ul`
  display: flex;
`;

const StyledContent = styled(Link)`
  margin: 0px 30px;
  font-size: 21px;
  color: rgba(0, 0, 0, 0.75);
  list-style-type: none;
`;

const Header = () => {
  return (
    <>
      <Spacing />
      <SyledHeader>
        <Link to="/">
          <StyledImg src={HelloUser} alt="Hello User Logo" />
        </Link>
        <StyledList>
          <StyledContent to="/sobre">Sobre nós</StyledContent>
          <StyledContent to="/servicos">Serviços</StyledContent>
          <StyledContent to="/localizacao">Localização</StyledContent>
        </StyledList>
        <StyledDefaultLink to="/contato">Contate-nos</StyledDefaultLink>
      </SyledHeader>
    </>
  );
};

export default Header;
