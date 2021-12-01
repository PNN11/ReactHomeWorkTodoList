import { Btn } from "./Button.styles";

const Button = (props) => {
  return (
    <Btn type="button" primary={props.primary} size={props.size}>
      {props.name}
    </Btn>
  );
};

export default Button;
