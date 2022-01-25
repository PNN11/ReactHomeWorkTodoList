import styled from "styled-components";

export const SearchElement = styled("div")`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 25px;
  align-items: center;
  color: ${(props) => (props.error ? "red" : props.theme.color.main)};
  > label {
    cursor: pointer;
    font-size: 18px;
  }
  > input {
    font-size: 18px;
    border: 2px solid ${(props) => (props.error ? "red" : "#565353")};
    border-radius: 7px;
    padding: 7px;
  }
  > p {
    width: 100%;
  }
`;
