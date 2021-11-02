import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #28262E;
  }

  body, h1, h2, h3, strong, input, button {
    font: 16px "Roboto Slab", sans-serif;
  }

  ::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: transparent; 
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: #888; 
}

::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
`

export default GlobalStyle
