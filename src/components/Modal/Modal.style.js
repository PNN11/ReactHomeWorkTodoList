import styled from "styled-components";

export const ModalWrapper = styled("div")`
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled("div")`
  padding: 35px;
  position: fixed;
  top: 50%;
  left: 50%;
  background: #fafafa;
  border: 3px solid #565353;
  border-radius: 10px;
  transform: translate(-50%, -50%);
  text-align: center;
  > div:first-child {
    margin-bottom: 30px;
  }
`;
