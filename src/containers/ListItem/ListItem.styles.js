import styled from "styled-components";

export const ListIt = styled("li")`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
  border-radius: 8px;
  padding: 7px 7px 7px 25px;
  align-items: center;
  color: ${(props) => props.theme.color.main};
  background: ${(props) => props.theme.backgroundColor.listItem};
  > div:first-child {
    font-size: 18px;
    text-decoration: ${(props) => {
      if (props.done) {
        return "line-through";
      }
    }};
  }
`;
