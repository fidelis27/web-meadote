import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding-left: 100px;
  @media (min-width: 700px) {
    margin: 100px;
  }
  span {
    font-size: 2.4rem;
    padding: 1.2rem;
    padding-bottom: 0;
    strong {
      margin-left: 0.4rem;
    }
  }
  a.edit {
    text-decoration: none;
    font: 700 2rem Archivo;
    color: gray;
    padding: 0 2rem 2rem;
    :hover {
      color: var(--color-text-title);
    }
  }
`;
export const Buttons = styled.div`
  display: flex;

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
    img {
      @media (min-width: 700px) {
        width: 4rem;
        margin: 0 1rem;
      }
      width: 3rem;
      margin: 0 2rem;
    }
  }
  a.pets {
    background: var(--color-tertiary);
    :hover {
      background: var(--color-tertiary-dark);
    }
  }
  a.pets-adoption {
    background: var(--color-primary-lighter);
    :hover {
      background: var(--color-primary-light);
    }
  }
`;

export const ImgProfile = styled.div`
  margin-bottom: 32px;
  position: relative;
  align-self: center;
  img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }
`;
