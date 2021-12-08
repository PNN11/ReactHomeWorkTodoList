import styled from "styled-components";

export const Head = styled("header")`
  background: linear-gradient(20deg, #dfb1b1, lightblue);
  text-align: center;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 30px;
  > h1 {
    color: white;
  }
`;

export const P = styled("p")`
  color: ${(props) => props.color || "white"};
  font-size: ${({ fontSize }) => fontSize || "32px"};
`;
