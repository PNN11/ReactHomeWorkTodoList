import React from "react";

import { SearchElement } from "./Input.styles";

const Input = ({ label, error, errorMessage, ...inputProps }) => {
  return (
    <SearchElement error={error}>
      <label htmlFor={inputProps.id}>{label}</label>
      <input {...inputProps} />
      {error && <p>{errorMessage}</p>}
    </SearchElement>
  );
};

export default Input;
