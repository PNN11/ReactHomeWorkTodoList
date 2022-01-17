import styled from "styled-components";

export const AddForm = styled("form")`
  display: flex;
  justify-content: space-between;
  padding: 17px 7px;
  align-items: center;
  background: ${(props) => props.theme.backgroundColor.form};
  border-radius: 7px;
`;
