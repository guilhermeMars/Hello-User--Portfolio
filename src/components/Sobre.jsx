import React from "react";
import styled from "styled-components";
import VideoCall from "../assets/video call.jpg";
import Working from "../assets/working.jpg";

const StyledDiv = styled.div`
  margin: 2em;
`;

const StyledFlexDiv = styled.div`
  display: flex;
  background-color: white;
  border-radius: 10px;
  box-shadow: 1px 2px 3px 1px rgba(0, 0, 0, 0.3);
  max-width: 65em;
  margin: 40px auto;
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

const TextDiv = styled.div`
  margin: 30px 10px;
`;

const StyledH2 = styled.h2`
  font-size: 40px;
`;

const StyledP = styled.p`
  font-size: 22px;
  margin-top: 10px;
`;

const StyledImgRight = styled.img`
  height: 100%;
  max-width: 20em;
  border-radius: 0px 10px 10px 0px;
  margin-left: 10px;
  @media only screen and (max-width: 1000px) {
    width: 10em;
    margin: auto;
  }
`;

const StyledImgLeft = styled.img`
  height: 100%;
  max-width: 25em;
  border-radius: 10px 0px 0px 10px;
  margin-right: 10px;
  @media only screen and (max-width: 1000px) {
    width: 15em;
    margin: auto;
  }
`;

const HalfBackground = styled.div`
  position: absolute;
  top: 0;
  z-index: -1;
  height: 100vw;
  max-height: 150%;
  width: 50%;
  right: 0;
  background-color: rgba(21, 0, 255, 0.7);
  @media only screen and (max-width: 750px) {
    height: 350vw;
    max-height: 200%;
  }
`;

const Sobre = () => {
  return (
    <StyledDiv>
      <StyledFlexDiv>
        <TextDiv>
          <StyledH2>Nosso Objetivo</StyledH2>
          <StyledP>
            Somos uma empresa especializada tanto em ajudar pessoas novatas em tecnologia, quanto aquelas que tem uma noção mas estão tendo que lidar com algum tipo de problema.<br/>Trazemos conhecimento através de explicações detalhadas sobre as redes, indo da parte fucional com o usuário, até como tudo é feito por baixo dos panos.<br/>Visamos sempre tirar essa dor de cabeça que muitos passam ao mexer na web 
          </StyledP>
        </TextDiv>
        <StyledImgRight src={VideoCall} alt="Ligação de vídeo" />
      </StyledFlexDiv>
      <StyledFlexDiv>
        <StyledImgLeft src={Working} alt="Trabalhando" />
        <TextDiv>
          <StyledH2>Como Trabalhamos</StyledH2>
          <StyledP>
            Ao enviar seu pedido, um de nossos especialistas irá te retornar por e-mail explicações detalhadas, porém fáceis de entender, do que e porquê tudo está acontecendo e oferecerá soluções para prosseguir sem o erro.<br/>Caso o usuário ainda esteja tendo dificuldades ou não tenha entendido muito bem a explicação, ele pode pedir para que seja feita uma chamada de vídeo com o nosso atendente, para uma maior acessibilidade.<br/>No final do atendimento será disponibilizado um link para se caso o usuário quiser fazer alguma doação pelo atendimento prestado.
          </StyledP>
        </TextDiv>
      </StyledFlexDiv>
      <HalfBackground />
    </StyledDiv>
  );
};

export default Sobre;
