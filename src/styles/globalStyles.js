import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle` 
body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Nunito Sans', sans-serif;
    transition: all 0.50s linear;
    font-size: clamp(.8rem,2.5vw,1.1rem);
  }
  *{
    box-sizing:border-box;
  }
  `;
