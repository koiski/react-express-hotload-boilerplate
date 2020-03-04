import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }

  html,
  body {
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    font-weight: 400;
    width: 100%;
    height: 100%;
    overflow: hidden;
    color: black;
    -webkit-text-size-adjust: 100%; /* Prevent font scaling in landscape (mobile) while allowing user zoom */
  }

  a,
  a:visited,
  a:link,
  a:active {
    text-decoration: none;
    color: inherit;
  }
  `;
