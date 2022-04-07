import { useState, useEffect } from "react";

function useFormik({ initialValues, validate }) {
  const [touched, setTouched] = useState({});
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    validateValues(values);
  }, [values]);

  function handleChange(event) {
    const fieldName = event.target.getAttribute("name");
    const { value } = event.target;
    setValues({
      ...values,
      [fieldName]: value,
    });
  }

  function handleBlur(event) {
    const fieldName = event.target.getAttribute("name");
    setTouched({
      ...touched,
      [fieldName]: true,
    });
  }

  function canSend(){
    if(errors.valid){
      return true;
    }
    return false;
  }

  function validateValues(values) {
    setErrors(validate(values));
  }

  return { values, touched, handleBlur, errors, setErrors, handleChange, canSend };
}

export default useFormik;
