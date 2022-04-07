import React from 'react';
import styled from 'styled-components';
import { StyledDefaultLink } from './UI';
import FooterBackground from '../assets/footer background.png';
import AngleRight from '../assets/angle right.png';
import { Link } from 'react-router-dom';

const MainDiv = styled.div`
    display: flex;
    padding: 10px;
    justify-content: center;
    background-image: url("${FooterBackground}");
    background-color: rgb(32, 32, 32);
    background-color: rgb(12, 61, 140);
    background-position: center center;
    color: white;
`;

const StyledUl = styled.ul`
    margin: 0px 10vh;
    list-style-type: none;
`;

const StyledH4 = styled.h4`
    font-size: 23px;
    font-weight: bold;
    margin: 15px 0px;
    text-decoration: underline;
    text-decoration-thickness: 3px;
`;

const Angle = styled.img`
    max-width: 13px;
    margin-right: 3px;
`;

const StyledLink = styled(Link)`
    color: white;
`;

const StyledLi = styled.li`
    font-size: 18px;
    margin: 8px 0px;
    transition: 0.25s;
    :hover{
        font-size: 20px;
    }
`;

const LittleLi = styled(StyledLi)`
    font-size: 17px;
    :hover{
        font-size: 18px;
    }
`;

const SubscriptionDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: 15px 10vh;
    max-width: 30vh;
`;

const StyledH3 = styled.h3`
    font-size: 25px;
`;

const StyledP = styled.p`
    color: rgba(255, 255, 255, 0.75);
    font-size: 14px;
    margin-bottom: 10px;
`;

const StyledInput = styled.input`
    font-size: 17px;
    background-color: white;
    border: 1px solid gray;
    border-radius: 5px;
    margin-bottom: 10px;
    height: 40px;
`;

const StyledButton = styled(StyledDefaultLink).attrs({ as: "button" })`
    padding: 10px 20px;
    background-color: #000000;
    border: 1px solid white;
`;

const Footer = () =>{
    return(
        <MainDiv>
            <StyledUl>
                <StyledH4>Serviços</StyledH4>
                <StyledLink to='#'><StyledLi><Angle src={AngleRight}/>Lorem</StyledLi></StyledLink>
                <StyledLink to='#'><StyledLi><Angle src={AngleRight}/>Lorem</StyledLi></StyledLink>
                <StyledLink to='#'><StyledLi><Angle src={AngleRight}/>Lorem</StyledLi></StyledLink>
            </StyledUl>
            <StyledUl>
                <StyledH4>Sobre</StyledH4>
                <StyledLink to='#'><StyledLi><Angle src={AngleRight}/>Lorem</StyledLi></StyledLink>
                <StyledLink to='#'><StyledLi><Angle src={AngleRight}/>Lorem</StyledLi></StyledLink>
                <StyledLink to='#'><StyledLi><Angle src={AngleRight}/>Lorem</StyledLi></StyledLink>
            </StyledUl>
            <StyledUl>
                <StyledH4>Legal</StyledH4>
                <StyledLink to='/politicadeprivacidade'><LittleLi><Angle src={AngleRight}/>Política de Privacidade</LittleLi></StyledLink>
                <StyledLink to='/termosdeuso'><StyledLi><Angle src={AngleRight}/>Termos de Uso</StyledLi></StyledLink>
            </StyledUl>
            <SubscriptionDiv>
                <StyledH3>Nossa Newsletter</StyledH3>
                <StyledP>Fique por dentro de nossas atualizações e promoções!</StyledP>
                <StyledInput type="text" name="subscribe" id="subscribe" placeholder="Digite seu Email"/>
                <StyledButton>Enviar</StyledButton>
            </SubscriptionDiv>
        </MainDiv>
    )
}

export default Footer;
