import { createGlobalStyle } from "styled-components";

import back from "../assets/background.svg";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: rgba(252, 175, 198, 0.25) url(${back}) no-repeat  top;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  #root {
    /* max-width: 960px; */
    margin: 0 auto;
    /* padding: 40px 20px */
  }

  button {
    cursor: pointer
  }
`;
