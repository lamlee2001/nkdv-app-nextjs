import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    color: ${({ theme }) => theme.colors.primary};
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      min-height: 100vh;
      min-width: 100vw;
      overflow-x: hidden;
      
      #__next {
        min-height: 100vh;
        min-width: 100vw;
      }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  @media only screen and (max-width: 768px) {
  .fzm-20 {
    font-size: 20px !important;
  }

  .fzm-16 {
    font-size: 16px !important;
  }

    .fzm-14 {
    font-size: 14px !important;
  }

  .fzm-12 {
    font-size: 12px !important;
  }

  .fzm-11 {
    font-size: 11px !important;
  }

  .fzm-10 {
    font-size: 10px !important;
  }

  .mbm-16 {
    margin-bottom: 16px !important;
  }

  .mbm-14 {
    margin-bottom: 16px !important;
  }

  .mbm-12 {
    margin-bottom: 16px !important;
  }

  .mbm-10 {
    margin-bottom: 10px !important;
  }

  .mbm-5 {
    margin-bottom: 5px !important;
  }

  .mtm-16 {
    margin-top: 16px !important;
  }

  .mtm-14 {
    margin-top: 16px !important;
  }

  .mtm-12 {
    margin-top: 16px !important;
  }

  .mtm-10 {
    margin-top: 10px !important;
  }

  .mtm-5 {
    margin-top: 5px !important;
  }

  .ptm-10 {
    padding-top: 10px !important;
  }

  .plm-10 {
    padding-left: 10px !important;
  }

  .pbm-10 {
    padding-bottom: 10px !important;
  }

  .prm-10 {
    padding-right: 10px !important;
  }

  .ptm-20 {
    padding-top: 20px !important;
  }

  .plm-20 {
    padding-left: 20px !important;
  }

  .pbm-20 {
    padding-bottom: 20px !important;
  }

  .prm-20 {
    padding-right: 20px !important;
  }
}
`;

export default GlobalStyle;
