import React from 'react';
import styled from 'styled-components';
import ElderyThumbsUp from '../../assets/Eldery Thumbs up background.png';
import {StyledDefaultLink} from '../UI/index';

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    margin: 5em 20vh 45px 20vh;

    @media only screen and (max-width: 1000px){
        flex-direction: column;
        margin: 5em 0px 45px 0px;
    }
`;

const StyledImg = styled.img`
    min-width: 22em;
    max-width: 45%;
`;

const StyledTextDiv = styled.div`
    margin: auto 30px;
`;

const StyledH1 = styled.h1`
    font-size: 70px;
    font-weight: 300;
    margin-bottom: 20px;
`;

const StyledP = styled.p`
    font-size: 25px;
    margin-bottom: 30px;
    color: rgba(0, 0, 0, 0.7);
`;

const StyledLinkDiv = styled.div`
    text-align: center;
`;

const StyledArrow = styled.span`
    font-size: 30px;
`

const CadastroDiv = () =>{
    return(
        <StyledDiv>
            <StyledImg src={ElderyThumbsUp} alt="Idoso Jóia" />
            <StyledTextDiv>
                <StyledH1>Ajuda Especial para Idosos</StyledH1>
                <StyledP>Entendemos a maior dificuldade que pessoas de idade possuem com a navegação. Sendo isso algo normal.<br/>Não nos irritamos nem sentimos incomodados por precisarmos ter mais paciência na hora de explicar todo o funcionamento por trás dos problemas.<br/>Sendo assim, não exite em usar nossos serviços ;)</StyledP>
                <StyledLinkDiv>
                    <StyledDefaultLink to="/contato">Acesse <StyledArrow>&#8594;</StyledArrow></StyledDefaultLink>
                </StyledLinkDiv>
            </StyledTextDiv>
        </StyledDiv>
    );
}

export default CadastroDiv;
