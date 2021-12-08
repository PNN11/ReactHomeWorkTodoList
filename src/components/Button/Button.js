import { Btn } from "./Button.styles";

const Button = ({ children, primary, ...buttonProps }) => {
  return (
    <Btn primary={primary} {...buttonProps}>
      {children}
    </Btn>
  );
};

export default Button;
