import { createGlobalStyle, css } from 'styled-components';
import normalize from 'styled-normalize';
import abelFont from './assets/fonts/abel-regular-webfont.woff';

export const theme = {
  fg: '#020617',
  bg: '#f1f5f9',
  main: '#be123c',
  shadow: 'rgba(0,0,0,0.25)',
};

const GlobalStyles = createGlobalStyle`
  
  @font-face {
  font-family: 'Abel';
  src: url(${abelFont}) format('woff');
  font-weight: normal;
  font-style: normal;
}
${normalize}

img{
  width: 100%;
  display: block;
}
a{
  text-decoration: none;
  color: inherit;
}

button{
  cursor: pointer;
}
#root{
  font-family: Abel,system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 1.2rem;
  display: flex;
  flex-flow: column nowrap;
}

body{
  background-color: ${theme.bg};
}
`;

export const loadingLoader = css`
  /* HTML: <div class="loader"></div> */
  .loader {
    width: fit-content;
    font-weight: bold;
    font-family: monospace;
    font-size: 30px;
    color: #0000;
    background: linear-gradient(
        90deg,
        #000 calc(50% - 0.5ch),
        ${theme.main} 0 calc(50% + 0.5ch),
        #000 0
      )
      right/calc(200% + 1ch) 100%;
    -webkit-background-clip: text;
    background-clip: text;
    animation: l8 2s infinite steps(11);
  }
  .loader:before {
    content: 'Loading...';
  }
  @keyframes l8 {
    to {
      background-position: left;
    }
  }
`;

export default GlobalStyles;
