import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import GitHub from "../assets/github.png";
import Instagram from "../assets/instagram.png";
import Linkedin from "../assets/linkedin.png";
import Twitter from "../assets/twitter.png";

const MainDiv = styled.div`
  text-align: center;
`;

const StyledH1 = styled.h1`
  font-size: 40px;
  margin-top: 30px;
`;

const StyledH3 = styled.h3`
  font-size: 25px;
  margin-bottom: 30px;
`;

const StyledP = styled.p`
  font-size: 20px;
`;

const SocialDiv = styled.div`
  margin: 40px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 700px;
`;

const StyledIcon = styled.img`
  width: 300px;
  transition: 0.25s;
  margin-right: 5px;
  :hover{
      width: 325px;
  }
`;

const guilhermeMars = () => {
  return (
    <MainDiv>
      <StyledH1>guilhermeMars</StyledH1>
      <StyledH3>O criador do projeto</StyledH3>
      <StyledP>
        Olá, eu sou Guilherme Martins, sou um desenvolvedor front-end
        especializado em React.
        <br />
        Este projeto foi criado para meu portifólio, não uso comercial realmente
        (veja mais em <Link to="/oque">O que é</Link>)<br />
        Caso você tenha gostado do que viu, considere acessar minhas redes
        sociais, talvez possamos trabalhar juntos e criar algo ainda melhor :)
      </StyledP>
      <SocialDiv>
        <a href="https://github.com/guilhermeMars">
          <StyledIcon src={GitHub} alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/guilherme-martins-216a43207/">
          <StyledIcon src={Linkedin} alt="Linkedin" />
        </a>
        <a href="https://www.instagram.com/stars_fade/">
          <StyledIcon src={Instagram} alt="Instagram" />
        </a>
        <a href="https://twitter.com/Stars_Fadee">
          <StyledIcon src={Twitter} alt="Twitter" />
        </a>
      </SocialDiv>
    </MainDiv>
  );
};

export default guilhermeMars;
