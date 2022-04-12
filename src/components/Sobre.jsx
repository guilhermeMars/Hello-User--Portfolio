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
  @media only screen and (max-width: 1000px) {
    height: 350vw;
    max-height: 150%;
  }
`;

const Sobre = () => {
  return (
    <StyledDiv>
      <StyledFlexDiv>
        <TextDiv>
          <StyledH2>Sample Text</StyledH2>
          <StyledP>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
            deserunt expedita itaque aut, nobis pariatur distinctio tenetur
            aliquid ullam ea provident eius nam dolor inventore illum quod et ut
            harum.
          </StyledP>
        </TextDiv>
        <StyledImgRight src={VideoCall} alt="Ligação de vídeo" />
      </StyledFlexDiv>
      <StyledFlexDiv>
        <StyledImgLeft src={Working} alt="Trabalhando" />
        <TextDiv>
          <StyledH2>Sample Text</StyledH2>
          <StyledP>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
            deserunt expedita itaque aut, nobis pariatur distinctio tenetur
            aliquid ullam ea provident eius nam dolor inventore illum quod et ut
            harum.
          </StyledP>
        </TextDiv>
      </StyledFlexDiv>
      <HalfBackground />
    </StyledDiv>
  );
};

export default Sobre;
