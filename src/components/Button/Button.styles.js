import styled from "styled-components";

export const Btn = styled("button")`
  border: 2px solid gray;
  border-radius: 7px;
  margin: 5px;
  cursor: pointer;
  font-size: 18px;
  background: ${(props) =>
    props.primary ? "linear-gradient(97deg,#808080,#efeeef)" : "white"};
  color: ${(props) => (props.primary ? "white" : "gray")};
  padding: ${(props) => {
    if (props.size === "big") {
      return "18px 23px";
    }
    if (props.size === "small") {
      return "5px 7px";
    }
    return "9px 14px";
  }};
  transition: 0.3s;
  :hover {
    transform: scale(1.1);
  }
  :active {
    transform: scale(0.9);
  }
`;
