import React from 'react';
import styled from 'styled-components';
import Fast from '../../assets/Fast.png';
import Help from '../../assets/Help.png';
import Online from '../../assets/Online.png';

const MainDiv = styled.div`
    display: flex;
    justify-content: center;
    margin: 15vh auto;
    text-align: center;
    @media only screen and (max-width: 1000px){
        flex-direction: column;
        align-items: center;
        margin: 0vh auto;
    }
`;

const IconDIv = styled.div`
    margin: 0px 20px;
    min-width: 40vh;
    max-width: 55vh;
    @media only screen and (max-width: 1000px){
        margin: 2vh auto;
    }
`;

const Icon = styled.img`
    max-width: 100px;
`;

const StyledH3 = styled.h3`
    font-size: 25px;
    margin-bottom: 20px;
`

const Trace = styled.div`
    background-color: black;
    max-width: 70%;
    height: 3px;
    margin: auto;
`;

const StyledP = styled.p`
    color: rgba(0, 0, 0, 0.8);
    font-size: 18px;
    margin-top: 15px;
`

const QualityDiv = ()=>{
    return(
        <MainDiv>
            <IconDIv>
                <Icon src={Fast} alt="Entrega Rápida" />
                <StyledH3>Velocidade no Atendimento</StyledH3>
                <Trace/>
                <StyledP>Nossos especialistas estão online das 7h às 19h. Nesse horario respondem seu email em <strong>menos de 1 hora</strong>.</StyledP>
            </IconDIv>
            <IconDIv>
                <Icon src={Help} alt="Ajuda Especializada" />
                <StyledH3>Ajuda Especializada</StyledH3>
                <Trace/>
                <StyledP>Todos os nossos atendentes são especialistas no assunto e possuem entendimento sobre tudo que rondeia a web, desde o <strong>básico de funcionalidades até o avançado</strong> de como tudo ocorre de baixo dos panos.</StyledP>
            </IconDIv>
            <IconDIv>
                <Icon src={Online} alt="Ajuda Online" />
                <StyledH3>Atendimento Online</StyledH3>
                <Trace/>
                <StyledP>Nosso atendimento ocorre <strong>100% online</strong>, podendo ser requisitadas vídeo chamadas com o atendente, caso a explicação tenha ficado confusa ou não tenha resolvido o problema</StyledP>
            </IconDIv>
        </MainDiv>
    )
}

export default QualityDiv;
