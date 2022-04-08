import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    box-shadow: 2px 2px 6px rgb(0 0 0 / 30%);
    padding: 10px;
    min-width: 14em;
    max-width: 30%;
    border-radius: 10px;
    margin: 20px 10px;
    flex-wrap: wrap;
    background-color: white;
    text-align: center;
`

const StyledImage = styled.img`
    max-width: 12em;
    border-radius: 10px;
`

const StyledH3 = styled.h3`
    font-size: 30px;
    padding: 0px;
    margin: 10px 0px;
`

const StyledP = styled.p`
    margin: 0px;
    text-align: left;
    width: 80%;
    margin: 0px auto;
`

const ServicesType = ({image, title, text}) =>{
    return(
        <StyledDiv>
            <StyledImage src={image} alt={image} />
            <StyledH3>{title}</StyledH3>
            <StyledP>{text}</StyledP>
        </StyledDiv>
    )
}

export default ServicesType;
