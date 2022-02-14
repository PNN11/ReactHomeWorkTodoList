import styled from "styled-components";

export const LoginWrapper = styled("div")`
  max-width: 700px;
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  padding: 15px;
  text-align: center;
  color: ${(props) => props.theme.color.main};
  > h1 {
    margin-bottom: 20px;
  }
  > form {
    border: 3px solid #565353;
    border-radius: 10px;
    padding: 35px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    background: ${(props) => props.theme.backgroundColor.form};
    > div {
      justify-content: space-between;
    }
    > h5 {
      color: red;
    }
  }
`;
