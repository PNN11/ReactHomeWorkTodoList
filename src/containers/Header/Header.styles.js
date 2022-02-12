import styled from "styled-components";

export const HeaderWrapper = styled("header")`
  max-width: 1000px;
  margin: 25px auto;
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme.color.main};
`;
