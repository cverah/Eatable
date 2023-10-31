import styled from "@emotion/styled";

const ButtonContainer = styled.div`
  max-width: 768px;
  margin: 0 auto;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px 45px;
  text-align: center;
`;

const Button = styled.button`
  color: white;
  background-color: #fa4a0c;
  border: 1px solid #fa4a0c;
  width: 100%;
  padding: 16px;
  text-align: center;
  font-size: 22px;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    border: 3px solid white;
  }
  &:disabled {
    background-color: #ccc;
    border: 1px solid #ccc;
    cursor: not-allowed; /* Cambia el cursor a "no permitido" */
  }
`;

export { ButtonContainer, Button };
