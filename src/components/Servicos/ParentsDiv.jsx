import React from 'react';
import styled from 'styled-components';
import Parents from '../../assets/Parents.png'

const StyledDiv = styled.div`
    display: flex;
    margin: 20vh auto;
    max-width: 80%;
    @media only screen and (max-width: 1000px){
        flex-direction: column;
        margin: 10vh 0px 10vh 20px;
    }
`;

const StyledImage = styled.img`
    float: right;
    max-width: 80vh;
`;

const TextDiv = styled.div`
    margin: auto 0px;
    max-width: 30em;
`;

const StyledH2 = styled.h2`
    font-size: 60px;
`;

const StyledP = styled.p`
    font-size: 22px;
`

const ParentsDiv = ()=>{
    return(
        <StyledDiv>
            <StyledImage src={Parents} alt="Parentes" />
            <TextDiv>
                <StyledH2>Sample Text</StyledH2>
                <StyledP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus deserunt animi et, delectus repellat nisi! Iusto temporibus officia ratione veniam. Doloremque, autem! Ducimus ratione facilis quae magnam? Explicabo, enim impedit.</StyledP>
            </TextDiv>
        </StyledDiv>
    );
}

export default ParentsDiv;
