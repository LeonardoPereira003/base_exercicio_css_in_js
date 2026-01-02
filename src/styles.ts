import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --cor-principal: #a7727d;
    --cor-secundaria: #f8ede3;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    background-color: var(--cor-secundaria);
  }

  .container {
    max-width: 1024px;
    margin: 0 auto;
    width: 100%;
  }
`
