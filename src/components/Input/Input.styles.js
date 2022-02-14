import styled from "styled-components";

export const SearchElement = styled("div")`
  align-items: center;
  color: ${(props) => (props.error ? "red" : props.theme.color.main)};
  > div {
    display: flex;
    justify-content: ${(props) =>
      props.type === "checkbox" ? "start" : "space-between"};
    gap: 25px;
    align-items: center;
  }

  > div > label {
    cursor: pointer;
    font-size: 18px;
  }
  > div > input {
    font-size: 18px;
    border: 2px solid ${(props) => (props.error ? "red" : "#565353")};
    border-radius: 7px;
    padding: 7px;
  }
  > p {
    width: 100%;
  }
`;
