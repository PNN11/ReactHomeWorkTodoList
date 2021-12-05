import { SearchElement } from "./Input.styles";

const Input = ({ label, ...inputProps }) => {
  return (
    <SearchElement>
      <label htmlFor={inputProps.id}>{label}</label>
      <input {...inputProps} />
    </SearchElement>
  );
};

export default Input;
