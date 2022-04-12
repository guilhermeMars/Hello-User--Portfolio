import React from "react";
import styled from "styled-components";
import ServicesType from "./ServicesType";
import Code from "../../assets/code.png";
import Settings from "../../assets/settings.png";
import Work from "../../assets/work.png";

const RelativeDiv = styled.div`
  position: relative;
  z-index: -1;
  display: flex;
  justify-content: center;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0px 20px;
  @media only screen and (max-width: 1000px) {
    width: 360px;
    margin: 0px;
  }
`;

const StyledTextDiv = styled.div`
  background-color: white;
  box-shadow: 2px 2px 4px rgb(0 0 0 / 10%);
  border-radius: 15px;
  padding: 15px;
  margin: 20px 30px 0px 7vh;
  min-width: 40vh;
  max-width: 40%;
  flex: 1;
  @media only screen and (max-width: 1000px) {
    margin: 20px 0px;
  }
`;

const StyledH3 = styled.h3`
  font-size: 60px;
  margin: 30px 0px;
  @media only screen and (max-width: 1000px) {
    font-size: 40px;
  }
`;

const StyledP = styled.p`
  font-size: 30px;
  color: rgba(0, 0, 0, 0.696);
`;

const StyledServices = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0px 20px;
  flex: 1;
`;

const BackgroundBlue = styled.div`
  position: absolute;
  top: 0;
  z-index: -1;
  width: 100vw;
  max-width: 100%;
  height: 15em;
  background-color: rgba(20, 0, 255, 0.6);
  
`;

const ServicesDiv = () => {
  return (
    <RelativeDiv>
      <StyledDiv>
        <StyledTextDiv>
          <StyledH3>Entendemos Diversas Áreas</StyledH3>
          <StyledP>
            Entender tudo que for necessário para ajudar em qualquer área
          </StyledP>
        </StyledTextDiv>
        <StyledServices>
          <ServicesType
            image={Code}
            title="Programação"
            text="Sabemos o básico sobre HTML, CSS, JS, Redes e Data Science. Sendo assim, caso haja algum erros inesperado, saberemos explicar o porquê de tal"
          />
          <ServicesType
            image={Settings}
            title="Configurações"
            text="Conhecemos as configurações dos navegadores mais populares, dos sistemas operacionais e como cada uma impacta na sua navegação"
          />
          <ServicesType
            image={Work}
            title="Dispositivos"
            text="Entendemos e sabemos as diferenças entre dispositivos na hora da navegação, auxiliando nos diferentes problemas que podem acontecer em cada um"
          />
        </StyledServices>
      </StyledDiv>
      <BackgroundBlue />
    </RelativeDiv>
  );
};

export default ServicesDiv;
