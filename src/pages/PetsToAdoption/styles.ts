import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;
export const Content = styled.div`
  width: 90vw;
  margin: 30px;
  a {
    flex: 1;
    @media (min-width: 700px) {
    }
    padding: 0 2rem;

    border-radius: 0.8rem;

    font: 700 2rem Archivo;

    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: var(--color-button-text);
    transition: background-color 0.2s;

    img {
      align-self: center;
      border-radius: 50%;
      object-fit: cover;
      @media (min-width: 700px) {
        width: 20rem;
        margin: 0 1rem;
      }
      width: 15rem;
      margin: 0 2rem;
    }
  }
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 25px;
  padding-bottom: 30px;
`;
