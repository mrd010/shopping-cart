import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';
import abelFont from './assets/fonts/abel-regular-webfont.woff';

const GlobalStyles = createGlobalStyle`
  ${normalize}
  @font-face {
  font-family: 'Abel';
  src: url(${abelFont}) format('woff');
  font-weight: normal;
  font-style: normal;
}
  a{
    text-decoration: none;
    color: inherit;
  }
  #root{
    font-family: Abel,system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.2rem;
    display: flex;
    flex-flow: column nowrap;
  }


`;

export const theme = {
  fg: '#020617',
  bg: '#f1f5f9',
  main: '#be123c',
};

export default GlobalStyles;
