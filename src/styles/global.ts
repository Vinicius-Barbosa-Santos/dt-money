import { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  :focus {
    outline: 0;
  }

  body {
    background-color: ${({theme}) => theme['gray-800']};
    color: ${({theme}) => theme['gray-100']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem 'Roboto', sans-serif
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }
`