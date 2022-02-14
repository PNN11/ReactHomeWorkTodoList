import React from "react";

import { SearchElement } from "./Input.styles";

const Input = ({ label, error, errorMessage, type, ...inputProps }) => {
  return (
    <SearchElement error={error} type={type}>
      <div>
        <label htmlFor={inputProps.id}>{label}</label>
        <input type={type} {...inputProps} />
      </div>
      {error && <p>{errorMessage}</p>}
    </SearchElement>
  );
};

export default Input;
