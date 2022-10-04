import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  body {
    text-rendering: optimizeSpeed;
    background: ${(props) => props.theme.white};
    color: ${(props) => props.theme['gray-900']};
  }

  body,
  input,
  textarea,
  select,
  span,
  button {
    font-family: 'Roboto', Ubuntu, Helvetica Neue, sans-serif;
  }

  h1 {
    font-family: 'Baloo 2', cursive;
    font-size: xx-large;
  }

  button {
    cursor: pointer;
  }

  a {
    color: ${(props) => props.theme['blue-500']} ;
    text-decoration: underline;
  }
`
