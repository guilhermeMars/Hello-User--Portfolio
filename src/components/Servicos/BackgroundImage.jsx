import React from "react";
import styled from "styled-components";
import HappyFamily from "../../assets/HappyFamily.png";

const MainDiv = styled.div`
  background-image: url("${HappyFamily}");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center center;
  position: relative;
  z-index: -1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 85vh;
  filter: grayscale(20%);
  `;

const BorderDiv = styled.div`
  padding: 0;
  width: 450px;
  height: 345px;
  position: absolute;
  top: 25%;
  left: 0;
  right: 0;
  margin: auto;
  border: 4px solid #ffffff;
`;

const TextDiv = styled.div`
  position: absolute;
  text-align: center;
  width: 400px;
  margin: auto;
  top: 30%;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 30px;
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
        <StyledH2>Sample Text</StyledH2>
        <StyledP>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, numquam.
          Modi quisquam sit iure inventore eveniet excepturi fugit. Tempora
          recusandae at explicabo provident possimus id sunt libero dolores
          facere ullam.
        </StyledP>
      </TextDiv>
    </MainDiv>
  );
};

export default BackgroundImage;
