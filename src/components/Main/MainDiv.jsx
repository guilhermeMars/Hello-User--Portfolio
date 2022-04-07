import React from "react";
import styled from "styled-components";
import NotebookGirl from '../../assets/Notebook Girl.png';

const StyledDiv = styled.div`
    display: flex;
    margin-top: 60px;
    margin-bottom: 15px;
`;

const TextDiv = styled.div`
    height: 20vh;
    text-align: center;
    margin-top: 7em;
`

const StyledH1 = styled.h1`
    font-size: 5em;
`;

const StyledP = styled.p`
    color: rgba(0, 0, 0, 0.8);
    font-size: 20px;
`;

const NotebookImg = styled.img`
    max-width: 50%;
`

const MainDiv = () => {
  return (
    <StyledDiv>
      <TextDiv>
          <StyledH1>Sample Text</StyledH1>
          <StyledP>Lorem ipsum dolor sit amet. Ab rerum fugiat ea magnam maiores eum eaque sapiente ut earum </StyledP>
      </TextDiv>
      <NotebookImg src={NotebookGirl} alt="Garota Note" />
    </StyledDiv>
  );
};

export default MainDiv;
