import React from 'react';
import styled from 'styled-components';
import ElderyThumbsUp from '../../assets/Eldery Thumbs up background.png';
import {StyledDefaultLink} from '../UI/index';

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    margin: 5em 20vh 45px 20vh;
`;

const StyledImg = styled.img`
    width: 45%;
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
                <StyledH1>Mega Sample Text</StyledH1>
                <StyledP>Lorem ipsum dolor sit amet. A facere modi quo fugiat eaque et fugit delectus qui nostrum dolores eum reiciendis ratione 33 provident earum est dolorem omnis. Eos natus perspiciatis qui eaque enim in molestias galisum? Non facere modi qui aspernatur voluptatem est delectus commodi ut natus quia qui sint suscipit 33 animi quibusdam.</StyledP>
                <StyledLinkDiv>
                    <StyledDefaultLink to="/contato">Acesse <StyledArrow>&#8594;</StyledArrow></StyledDefaultLink>
                </StyledLinkDiv>
            </StyledTextDiv>
        </StyledDiv>
    );
}

export default CadastroDiv;
