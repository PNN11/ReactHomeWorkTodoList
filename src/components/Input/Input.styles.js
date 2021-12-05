import styled from "styled-components";

export const SearchElement = styled("div")`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  gap: 25px;
  align-items: center;
  > label {
    cursor: pointer;
    font-size: 18px;
  }
  > input {
    font-size: 18px;
    border: 2px solid gray;
    border-radius: 7px;
    padding: 7px;
  }
`;
