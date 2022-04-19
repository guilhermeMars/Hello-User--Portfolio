import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MainDiv = styled.div`
    margin: 3em auto;
    text-align: center;
`;

const StyledH1 = styled.h1`
    font-size: 40px;
    margin: 70px 0px;
`;

const StyledP = styled.p`
    font-size: 20px;
    line-height: 30px;
    margin-top: 2em;
    margin-bottom: 30vh;
`;

const Documentacao = () => {
    return (
        <MainDiv>
            <StyledH1>Documentação do Projeto</StyledH1>
            <StyledP>Este projeto é de código aberto e foi totalmente documentado, com suas diferentes versões, no <a href="https://github.com/guilhermeMars/Hello-User--Portfolio" target="_blank" rel="noopener noreferrer">GitHub</a> <br/>Caso tenha alguma dificuldade em entender o código, pode entrar em contato comigo pelas minhas <Link to='/guilhermemars'>Redes Sociais</Link></StyledP> 
        </MainDiv>
    );
}
 
export default Documentacao;
