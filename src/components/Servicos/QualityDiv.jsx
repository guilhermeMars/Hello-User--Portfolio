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
    }
`;

const IconDIv = styled.div`
    margin: 0px 20px;
    width: 55vh;
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
                <StyledH3>Sample Text</StyledH3>
                <Trace/>
                <StyledP>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non accusamus aut aperiam perspiciatis rem, odio vitae soluta aliquam amet deserunt numquam dolore vel quis, illo illum obcaecati doloremque fugiat iusto.</StyledP>
            </IconDIv>
            <IconDIv>
                <Icon src={Help} alt="Ajuda Integral" />
                <StyledH3>Sample Text</StyledH3>
                <Trace/>
                <StyledP>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non accusamus aut aperiam perspiciatis rem, odio vitae soluta aliquam amet deserunt numquam dolore vel quis, illo illum obcaecati doloremque fugiat iusto.</StyledP>
            </IconDIv>
            <IconDIv>
                <Icon src={Online} alt="Ajuda Online" />
                <StyledH3>Sample Text</StyledH3>
                <Trace/>
                <StyledP>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non accusamus aut aperiam perspiciatis rem, odio vitae soluta aliquam amet deserunt numquam dolore vel quis, illo illum obcaecati doloremque fugiat iusto.</StyledP>
            </IconDIv>
        </MainDiv>
    )
}

export default QualityDiv;
