import { useState, useEffect } from "react";
import validate from '../models/validarContato';

function useFormik({ initialValues }) {
  const [touched, setTouched] = useState({});
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  
  useEffect(() => {
    function validateValues(values) {
      setErrors(validate(values));
    }
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


  return { values, touched, handleBlur, errors, setErrors, handleChange, canSend };
}

export default useFormik;
