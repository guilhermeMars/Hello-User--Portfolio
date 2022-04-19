const validation = (values) => {
  const errors = {valid: true};

  if (values.name.length <= 3) {
    errors.name = "Insira seu nome, não um apelido";
    errors.valid = false;
  }

  if (values.tel.length <= 7) {
    errors.tel = "Insira um telefone válido";
    errors.valid = false;
  }

  if (!values.email.includes("@")) {
    errors.email = "Insira um email válido";
    errors.valid = false;
  }

  if(isNaN(values.tel)){
    errors.tel = "Insira apenas números";
    errors.valid = false;
  }

  return errors;
};

export default validation;
