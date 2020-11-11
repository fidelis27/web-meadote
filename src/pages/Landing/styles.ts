import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  color: var(--color-title-in-primary);
  background: var(--color-primary);
`;

export const LandingContent = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 700px) {
    flex-direction: row;
  }

  img {
    width: 25rem;
    @media (min-width: 700px) {
      width: 30rem;
    }
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2.2rem;
  @media (min-width: 700px) {
    margin-top: 5.2rem;
  }
  img {
    @media (min-width: 700px) {
      height: 30rem;
    }
    height: 10rem;
  }
  h2 {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 3.6rem;
    margin-top: 2rem;
    @media (min-width: 700px) {
      margin-top: -8rem;
    }
    width: 40rem;
  }
`;
export const Header = styled.header`
  margin-top: 1rem;
  width: 100%;

  @media (min-width: 700px) {
    padding: 0 10rem;
  }
  padding: 0 5rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 2.2rem;
  img {
    width: 5rem;
  }
  nav {
    display: flex;
    a {
      background: var(--color-primary);
      display: flex;
      align-items: center;
      height: 3.2rem;
      transition: opacity 0.2s;
      text-decoration: none;
      color: var(--color-title-in-primary);
      padding: 5px 10px;
      font-size: 2.5rem;
      font-weight: 700;
      :hover {
        background-color: #fff;
        color: var(--color-primary);
        border-radius: 3px;
      }
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: 1fr 1fr 2fr;
    justify-content: space-between;
    width: 100%;
    padding: 0 10rem;
    margin-top: 2.2rem;
  }

  p {
    width: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 2.2rem;
  }
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 20rem;
    margin-top: 2.2rem;
    svg {
      margin-left: 1.2rem;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;

  justify-content: center;

  margin: 3.2rem 1rem;
  a {
    @media (min-width: 700px) {
      width: 30rem;
      height: 8.4rem;
    }
    padding: 0 2rem;
    width: 18rem;
    height: 6.4rem;
    border-radius: 0.8rem;
    margin-right: 1.6rem;
    font: 700 2rem Archivo;

    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    color: var(--color-button-text);
    transition: background-color 0.2s;
    :first-child {
      margin-right: 1.6rem;
    }
    svg {
      @media (min-width: 700px) {
        width: 5rem;
        margin: 0 1rem;
      }
      width: 3rem;
      margin: 0 1rem;
    }
  }
  a.pets-to-adoption {
    background: var(--color-primary-lighter);
    :hover {
      background: var(--color-primary-light);
    }
  }
  a.pets {
    background: var(--color-tertiary);
    :hover {
      background: var(--color-tertiary-dark);
    }
  }
`;
