import styled from "styled-components";

export const Head = styled("header")`
  background: ${(props) => props.theme.backgroundColor.header};
  text-align: center;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 30px;
  color: ${(props) => props.theme.color.main};
`;

export const P = styled("p")`
  font-size: ${({ fontSize }) => fontSize || "32px"};
`;
