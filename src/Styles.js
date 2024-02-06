import { createGlobalStyle, css } from 'styled-components';
import normalize from 'styled-normalize';
import abelFont from './assets/fonts/abel-regular-webfont.woff';

export const theme = {
  fg: '#020617',
  bg: '#f1f5f9',
  main: '#be123c',
  shadow: 'rgba(0,0,0,0.25)',
  loadingBG: 'rgba(255,255,255,0.7)',
};

const GlobalStyles = createGlobalStyle`
  
  @font-face {
  font-family: 'Abel';
  src: url(${abelFont}) format('woff');
  font-weight: normal;
  font-style: normal;
}
${normalize}

html{
  scroll-behavior: smooth;
}
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
    width: 45px;
    aspect-ratio: 0.75;
    --c: no-repeat linear-gradient(${theme.main} 0 0);
    background:
      var(--c) 0% 50%,
      var(--c) 50% 50%,
      var(--c) 100% 50%;
    background-size: 20% 50%;
    animation: l6 1s infinite linear;
  }
  @keyframes l6 {
    20% {
      background-position:
        0% 0%,
        50% 50%,
        100% 50%;
    }
    40% {
      background-position:
        0% 100%,
        50% 0%,
        100% 50%;
    }
    60% {
      background-position:
        0% 50%,
        50% 100%,
        100% 0%;
    }
    80% {
      background-position:
        0% 50%,
        50% 50%,
        100% 100%;
    }
  }
`;

export default GlobalStyles;
