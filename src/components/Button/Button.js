import { Btn } from "./Button.styles";

const Button = ({ children, name, ...buttonProps }) => {
  return (
    <Btn primary={children} {...buttonProps}>
      {name}
    </Btn>
  );
};

export default Button;
