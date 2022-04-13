import React from "react";
import styled from "styled-components";
import HappyFamily from "../../assets/HappyFamily.png";

const MainDiv = styled.div`
  background-image: url("${HappyFamily}");
  background-repeat: no-repeat;
  position: relative;
  z-index: -1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 85vh;
  filter: grayscale(20%);
  @media only screen and (min-width: 1250px){
    flex-direction: column;
    background-size: 100%;
  }
`;

const TextDiv = styled.div`
  position: absolute;
  text-align: center;
  min-width: 300px;
  max-width: 400px;
  max-height: 280px;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 30px;
`;

const BorderDiv = styled(TextDiv)`
  min-width: 350px;
  max-width: 450px;
  max-height: 350px;
  background-color: rgba(255, 255, 255, 0.0);
  border: 4px solid #ffffff;
`;

const StyledH2 = styled.h2`
  font-size: 40px;
  color: rgb(38, 37, 37);
  margin-bottom: 10px;
`;

const StyledP = styled.p`
  font-size: 20px;
  color: rgb(87, 84, 84);
`;

const BackgroundImage = () => {
  return (
    <MainDiv>
      <BorderDiv />
      <TextDiv>
        <StyledH2>Suporte online</StyledH2>
        <StyledP>
          Ajudamos todos os tipos de pessoas com problemas na web, pela própria web. Sempre tentando melhorar e aptos a críticas.<br/>Contate nosso suporte especialista e esqueça dos problemas ;)
        </StyledP>
      </TextDiv>
    </MainDiv>
  );
};

export default BackgroundImage;
