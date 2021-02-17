import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }
  .card--container{
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
  .news--card{
    background: ${({ theme }) => theme.body};
  }
  .news--author{
    color: ${({ theme }) => theme.text};
  }
  .news--title{
    color: ${({ theme }) => theme.text};
  }
  .news--tags{
    color: ${({ theme }) => theme.text};
  }
  `;