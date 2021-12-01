import styled from "styled-components";

export const FilterForm = styled("form")`
  display: flex;
  justify-content: space-between;
  padding: 17px 7px;
  align-items: center;
  gap: 25px;
`;

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

export const BlockBtns = styled("div")`
  width: 50%;
  text-align: end;
`;
