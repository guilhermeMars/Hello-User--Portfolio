import React from "react";
import styled from "styled-components";
import ServicesType from "./ServicesType";
import Code from "../../assets/code.png";
import Settings from "../../assets/settings.png";
import Work from "../../assets/work.png";

const RelativeDiv = styled.div`
  position: relative;
  z-index: -1;
`

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 0px 20px;
`;

const StyledTextDiv = styled.div`
  background-color: white;
  box-shadow: 2px 2px 4px rgb(0 0 0 / 10%);
  border-radius: 15px;
  padding: 15px;
  margin: 20px 30px 0px 7vh;
  min-width: 40vh;
  max-width: 40%;
  flex: 1;
`;

const StyledH3 = styled.h3`
  font-size: 60px;
  margin: 30px 0px;
  `;

const StyledP = styled.p`
  font-size: 30px;
  color: rgba(0, 0, 0, 0.696);
`;

const StyledServices = styled.div`
  display: flex;
  justify-content: center;
  margin: 0px 20px;
  flex: 1;
`;

const BackgroundBlue = styled.div`
  position: absolute; 
  top: 0;
  z-index: -1;
  width: 100vw;
  max-width:100%;
  height: 15em;
  background-color: rgba(20, 0, 255, 0.6);
`;

const ServicesDiv = () => {
  return (
    <RelativeDiv>
      <StyledDiv>
        <StyledTextDiv>
          <StyledH3>Mega Sample Text</StyledH3>
          <StyledP>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt quod nobis esse quis corporis veritatis nemo
          </StyledP>
        </StyledTextDiv>
        <StyledServices>
          <ServicesType
            image={Code}
            title="Teeste"
            text="Lorem ipsum dolor sit amet. Ea numquam iusto a accusantium autem et fugit maxime et error neque et dolores cupiditate sed similique enim. Eum quos quia quo laborum quidem At"
          />
          <ServicesType
            image={Settings}
            title="Teeste"
            text="Lorem ipsum dolor sit amet. Ea numquam iusto a accusantium autem et fugit maxime et error neque et dolores cupiditate sed similique enim. Eum quos quia quo laborum quidem At"
          />
          <ServicesType
            image={Work}
            title="Teeste"
            text="Lorem ipsum dolor sit amet. Ea numquam iusto a accusantium autem et fugit maxime et error neque et dolores cupiditate sed similique enim. Eum quos quia quo laborum quidem At"
          />
        </StyledServices>
      </StyledDiv>
      <BackgroundBlue />
    </RelativeDiv>
  );
};

export default ServicesDiv;
