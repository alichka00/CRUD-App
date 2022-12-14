import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 24px;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: rgba(50, 50, 50, 0.5);
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const ModalContent = styled.div`
  position: relative;
  padding: 30px;
  background-color: #0f0d0df7;
  width: 500px;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  text-align: center;
`;

export const ModalClose = styled.div`
  position: absolute;
  right: 25px;
  top: 20px;
`;

export const Title = styled.div`
  font-weight: 24px;
  margin-bottom: 30px;
`;
