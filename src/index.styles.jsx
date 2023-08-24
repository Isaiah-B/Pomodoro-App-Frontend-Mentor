import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    line-height: 1;
  }

  body {
    font-family: ${({ styles }) => styles.font};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    
    background-color: hsl(236, 36%, 18%);
    color: hsl(227, 100%, 92%);
  }

  h1 {
    font-size: 10rem;
    font-weight: ${({ styles }) => styles.font === `'Space Mono', monospace` ? 400 : 700};
    line-height: 12rem;

    @media (max-width: 27em) {
      font-size: 8rem;
      letter-spacing: ${({ styles }) => styles.font === `'Space Mono', monospace` ? '-9px' : '-4px'};
      line-height: 9.5rem;
    }
  }

  h2 {
    font-size: 2.8rem;
    font-weight: 700;
    line-height: 3.4rem;

    @media (max-width: 27em) {
      font-size: 2rem;
      line-height: 2.4rem;
    }
  }

  h3 {
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1.9rem;
    text-transform: uppercase;

    @media (max-width: 27em) {
      font-size: 1.4rem;
    }
  }

  h4 {
    font-size: 1.3rem;
    font-weight: 700;
    line-height: 1.6rem;
    letter-spacing: 5px;
    text-transform: uppercase;

    @media (max-width: 38em) {
      font-size: 1.1rem;
      line-height: 0.6rem;
    }
  }

  p {
    font-size: ${({ styles }) => styles.font === `'Space Mono', monospace` ? '1.3rem' : '1.4rem'};
    font-weight: 700;
    line-height: 1.8rem;

    @media (max-width: 27em) {
      font-size: ${({ styles }) => styles.font === `'Space Mono', monospace` ? '1.1rem' : '1.2rem'};
    }
  }

  button {
    font-family: inherit;
  }
`;


export const bodyTextS = css`
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.8rem;
`