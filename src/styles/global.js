/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "./colors";
import { fonts } from "./typography";

export const global = css`
  /* * {
    border: 1px solid green;
  } */
  body {
    font-size: 1rem;
    line-height: 1.5rem;
    font-family: ${fonts.primary};
    color: ${colors.gray.dark};
    background-color: #f6f6f9;
  }
`;
