import React from "react";
import styled from "styled-components";
import VideoCall from "../assets/video call.jpg";
import Working from "../assets/working.jpg";

const StyledDiv = styled.div`
    margin: 2em;
    .backgroundGray{
        background-color: rgba(21, 0, 255, 0.2);
        border-radius: 10px;
    }
    .marginTop{
        margin-top: 20px;
    }
`;

const StyledFlexDiv = styled.div`
    display: flex;
    width: 75%;
    margin: 10px auto;
`

const StyledBigImg = styled.img`
    width: 23em;
`;

const StyledSmallImg = styled.img`
    width: 30em;
`

const StyledText = styled.div`
    margin: 0px 40px;
`

const StyledH1 = styled.h1`
    font-size: 50px;
    margin: 10px 0px;
`;

const StyledH2 = styled.h2`
    font-size: 40px;
    margin: 10px 0px;
`;

const StyledP = styled.p`
    font-size: 17px;
`

const Sobre = () => {
  return (
    <StyledDiv>
      <StyledFlexDiv>
          <StyledBigImg src={VideoCall} alt="Helping Call" />
          <StyledText>
              <StyledH1>Quem somos?</StyledH1>
              <StyledP>
                Lorem ipsum dolor sit amet. Ipsa assumenda ad delectus ipsam sed dolores
                nulla. Quo optio nulla qui cumque nulla quo quam accusantium eos dolore
                nemo. Et quos soluta non ratione adipisci a perspiciatis reprehenderit
                eum deserunt voluptatem est quibusdam ratione! Ut nostrum itaque eum
                culpa iusto non asperiores dolores. Qui commodi architecto et aliquid
                fugit et sequi molestiae sed expedita unde. Perferendis voluptate est
                quasi consequatur ad cumque fugiat.
              </StyledP>
          </StyledText>
      </StyledFlexDiv>
      <StyledFlexDiv className="backgroundGray marginTop">
          <StyledText>
              <StyledH2>Qual nosso objetivo?</StyledH2>
              <StyledP>
                Lorem ipsum dolor sit amet. Ipsa assumenda ad delectus ipsam sed dolores
                nulla. Quo optio nulla qui cumque nulla quo quam accusantium eos dolore
                nemo. Et quos soluta non ratione adipisci a perspiciatis reprehenderit
                eum deserunt voluptatem est quibusdam ratione! Ut nostrum itaque eum
                culpa iusto non asperiores dolores. Qui commodi architecto et aliquid
                fugit et sequi molestiae sed expedita unde. Perferendis voluptate est
                quasi consequatur ad cumque fugiat.
              </StyledP>
          </StyledText>
          <StyledSmallImg src={Working} alt="Helping Call" />
      </StyledFlexDiv>
    </StyledDiv>
  );
};

export default Sobre;
