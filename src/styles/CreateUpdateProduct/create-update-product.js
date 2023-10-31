import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors } from "../colors";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Label = styled.label`
  color: #b8b8bb;
  font-size: 15px;
  line-height: 16.8px;
  font-weight: bold;
  text-transform: uppercase;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  box-sizing: border-box;
  /* margin-bottom: 20px; */
  padding: 20px 20px 12px 0;
  height: 32px;
  border: none;
  border-bottom: 2px solid black;
  font-weight: 400;
  font-size: 18px;
  transition: 0.2s ease;
  background-color: #f6f6f9;
  outline: none;

  &:focus {
    transition: 0.2s ease;
  }
`;

const File = styled.input`
  display: block;
  width: 100%;
  box-sizing: border-box;
  /* margin-bottom: 20px; */

  height: 32px;
  border: none;
  font-weight: 400;
  font-size: 18px;
  transition: 0.2s ease;
  background-color: #f6f6f9;
  outline: none;

  &:focus {
    transition: 0.2s ease;
  }
`;

export { Form, Label, Input, File };
