import React from 'react';
import styled from 'styled-components';

const MainDiv = styled.div`
    margin: 3em auto;
    text-align: center;
`;

const StyledH1 = styled.h1`
    font-size: 40px;
    margin: 20px 0px;
`;

const StyledP = styled.p`
    font-size: 18px;
`;

const StyledLi = styled(StyledP).attrs({
    as: "li",
})`

`;

const StyledH2 = styled.h2`
    font-size: 25px;
    margin: 10px 0px;
`;

const OQueE = () =>{
    return(
        <MainDiv>
            <StyledH1>O que é este projeto</StyledH1>
            <StyledP>Este é um projeto independente feito para o meu portifólio, com o objetivo de aplicar meus conhecimentos da Formação React da alura.<br/>A ideia era fazer um site para uma startup que ajuda pessoas a resolver problemas na web.<br/>O projeto foi feito 100% por mim, mesmo que minha área seja focada em front-ent, acabei mexendo com partes de UX e Design. 
            </StyledP>
            <StyledH2>Tecnologias Utilizadas</StyledH2>
            <ul>
                <StyledLi>React - Framework</StyledLi>
                <StyledLi>Styled Components - Estilização</StyledLi>
                <StyledLi>Formik - Manipulação de Dados</StyledLi>
                <StyledLi>Figma - Prototipação</StyledLi>
                <StyledLi>Photoshop Básico</StyledLi>
            </ul>
            <StyledH2>Fontes</StyledH2>
            <ul>
                <StyledLi>Pexels - Utilização de imagens</StyledLi>
                <StyledLi>Flaticon - Icones</StyledLi>
            </ul>
        </MainDiv>
    );
}

export default OQueE;
