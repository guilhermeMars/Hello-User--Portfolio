import React from "react";
import styled from "styled-components";
import NotebookGirl from '../../assets/Notebook Girl.png';

const StyledDiv = styled.div`
    display: flex;
    margin-bottom: 15px;
    @media only screen and (max-width: 1000px){
        flex-direction: column;
        align-items: center;
    }
`;

const TextDiv = styled.div`
    text-align: center;
    margin: auto 0px;
    @media only screen and (max-width: 1000px){
        width: 350px;
    }
`

const StyledH1 = styled.h1`
    font-size: 4em;
    @media only screen and (max-width: 1000px){
        font-size: 3em;
    }
`;

const StyledP = styled.p`
    color: rgba(0, 0, 0, 0.8);
    font-size: 20px;
    width: 70%;
    margin: auto;;
`;

const NotebookImg = styled.img`
    margin-top: 60px;
    min-width: 25em;
    max-width: 50%;
`;

const MainDiv = () => {
  return (
    <StyledDiv>
      <TextDiv>
          <StyledH1>Uma maneira fácil de mexer na web.</StyledH1>
          <StyledP>Ajudamos pessoas de todas as idades, com dificuldade em tecnologia, hà mais de 56 anos!</StyledP>
      </TextDiv>
      <NotebookImg src={NotebookGirl} alt="Garota Note" />
    </StyledDiv>
  );
};

export default MainDiv;
