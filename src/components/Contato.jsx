import React from "react";
import styled from "styled-components";
import useFormik from "../hooks/useFormik";
import { StyledDefaultLink } from "./UI";
import BackgroundDetails from "../assets/background details.png";

const StyledTittle = styled.h1`
  font-size: 30px;
  margin: 30px 0px;
  text-align: center;
`;

const UnderlineSpan = styled.span`
  text-decoration: underline;
`;

const StyledForm = styled.form`
  margin: 20px auto;
  justify-content: center;
  width: 60%;
`;

const StyledDivInput = styled.div`
  margin-bottom: 20px;
`;

const StyledLabel = styled.label`
  font-size: 18px;
`;

const StyledInputDefault = styled.input`
  width: 100%;
  padding: 18px 20px;
  box-sizing: border-box;
  border: 1px solid gray;
  box-shadow: 1px 1px 3px rgb(0 0 0 / 15%);
  border-radius: 7px;
  transition: 0.25s;
  :focus {
    border: 2px solid blue;
  }
`;

const StyledTextArea = styled(StyledInputDefault).attrs({
  as: "textarea",
})`
  font-size: 20px;
  padding: 20px 20px;
`;

const StyledSpanErro = styled.span`
  color: red;
  font-size: 14px;
`;

const StyledDefaultButton = styled(StyledDefaultLink).attrs({
  as: "button",
})`
  max-width: 30%;
`;

const CenterDiv = styled.div`
  text-align: center;
`;

const BackgroundImg = styled.img`
  position: absolute;
  z-index: -1;
  bottom: 0%;
  right: 0%;
  max-width: 35em;
`;

const Contato = () => {
  const formik = useFormik({
    initialValues: {
      name: "Gu",
      tel: "19",
      email: "Testtest.com",
      text: "",
    },
  });

  return (
    <div>
      <StyledTittle>
        Nos envie seu problema e lhe{" "}
        <UnderlineSpan>retornaremos em algumas horas ;)</UnderlineSpan>
      </StyledTittle>
      <StyledForm
        onSubmit={(event) => {
          event.preventDefault();
          if (formik.canSend()) {
            window.alert("Olhe o console :)");
            console.log(formik.values);
          } else {
            window.alert("Valores incorretos!");
          }
        }}
      >
        <StyledDivInput>
          <StyledLabel htmlFor="Name">Nome: </StyledLabel>
          <StyledInputDefault
            type="text"
            value={formik.values.name}
            name="name"
            placeholder="Nome"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.name && formik.errors.name && (
            <StyledSpanErro>
              {formik.errors.name}
              <br />
            </StyledSpanErro>
          )}
        </StyledDivInput>
        <StyledDivInput>
          <StyledLabel htmlFor="Email">Email: </StyledLabel>
          <StyledInputDefault
            type="email"
            value={formik.values.email}
            name="email"
            placeholder="Email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.email && formik.errors.email && (
            <StyledSpanErro>
              {formik.errors.email}
              <br />
            </StyledSpanErro>
          )}
        </StyledDivInput>
        <StyledDivInput>
          <StyledLabel htmlFor="telephone">Telefone: </StyledLabel>
          <StyledInputDefault
            type="tel"
            value={formik.values.tel}
            name="tel"
            placeholder="Telefone"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.tel && formik.errors.tel && (
            <StyledSpanErro>
              {formik.errors.tel}
              <br />
            </StyledSpanErro>
          )}
        </StyledDivInput>
        <StyledDivInput>
          <StyledLabel htmlFor="text">Descrição: </StyledLabel>
          <StyledTextArea
            type="text"
            value={formik.values.text}
            name="text"
            cols="40"
            rows="5"
            placeholder="Descrição..."
            onChange={formik.handleChange}
          />
        </StyledDivInput>
        <CenterDiv>
          <StyledDefaultButton type="submit">Enviar</StyledDefaultButton>
        </CenterDiv>
      </StyledForm>
      <BackgroundImg src={BackgroundDetails} alt="Detalhes do fundo" />
    </div>
  );
};

export default Contato;
