import React from "react";
import styled from "styled-components";
import HelpingWork from "../assets/Helping at work.jpg";

const MainDiv = styled.main`
  margin-top: 5vh;
`;

const MapDiv = styled.div`
  margin: auto;
  text-align: center;
`;

const StyledH1 = styled.h1`
  font-size: 40px;
  margin-bottom: 30px;
`;

const GoogleMaps = styled.iframe`
  width: 90%;
  height: 500px;
`;

const AtendimentoDiv = styled.div`
  display: flex;
  margin: 15vh auto;
  max-width: 65em;
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    margin: 15vh auto;
    max-width: 90%;
    align-items: center;
  }
`;

const TextDiv = styled.div`
  margin-right: 20px;
`;

const StyledH2 = styled.h2`
  font-size: 40px;
  margin-bottom: 10px;
`;

const StyledP = styled.p`
  font-size: 20px;
`;

const StyledImg = styled.img`
  max-width: 70vh;
  margin-left: 20px;
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    margin-top: 20px;
  }
`;

const Localizacao = () => {
  return (
    <MainDiv>
      <MapDiv>
        <StyledH1>Nossa principal sede</StyledH1>
        <GoogleMaps
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7347.307093441448!2d-46.99488140412682!3d-22.96298303963823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8cd931410db6b%3A0x1d21d8a7a76eaa5c!2sJardim%20Santana%2C%20Valinhos%20-%20SP%2C%2013274-465!5e0!3m2!1spt-BR!2sbr!4v1649253337120!5m2!1spt-BR!2sbr"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Mapa Localização"
        ></GoogleMaps>
      </MapDiv>
      <AtendimentoDiv>
        <TextDiv>
          <StyledH2>Também prestamos atendimento presencial</StyledH2>
          <StyledP>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            praesentium dolores reprehenderit laudantium molestiae a maiores
            inventore sunt at ea, accusantium repudiandae facere! Rem,
            asperiores optio sequi eaque rerum nobis?
          </StyledP>
        </TextDiv>
        <StyledImg src={HelpingWork} alt="Ajudando no trabalho" />
      </AtendimentoDiv>
    </MainDiv>
  );
};

export default Localizacao;
