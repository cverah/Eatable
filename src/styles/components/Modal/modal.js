import styled from "@emotion/styled";

const MODAL_STYLES = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #f6f6f9;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 25px;
  border-radius: 10px;
  text-align: center;
  width: 40%;
  height: auto;
  padding: 40px 12px;
`;
const OVERLAY_STYLES = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const BUTTON_YES = styled.button`
  font-size: 24px;
  padding: 16px;
  color: white;
  background-color: #fa4a0c;
  border: 1px solid #fa4a0c;
  border-radius: 12px;
  cursor: pointer;
  &:hover {
    border: 1px solid white;
  }
`;

const BUTTON_CANCEL = styled.button`
  font-size: 24px;
  padding: 16px;
  color: white;
  background-color: #efb60e;
  border: 1px solid #efb60e;
  border-radius: 12px;
  cursor: pointer;
  &:hover {
    border: 1px solid white;
  }
`;

export { MODAL_STYLES, OVERLAY_STYLES, BUTTON_YES, BUTTON_CANCEL };
