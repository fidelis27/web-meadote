import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  main {
    flex: 1;
    @media (min-width: 700px) {
      margin: 50px;
    }
  }
`;
export const Images = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 8px;
  margin: 8px 20px 0;
  @media (min-width: 700px) {
    column-gap: 16px;
    margin: 16px 40px 0;
  }
  button {
    border: 0;
    height: 88px;
    background: none;
    cursor: pointer;
    border-radius: 20px;
    overflow: hidden;
    outline: none;
    opacity: 0.6;
  }
  button.active {
    opacity: 1;
  }
  button img {
    width: 100%;
    height: 88px;
    object-fit: cover;
  }
`;
export const CardContainer = styled.div`
  max-width: 700px;
  margin: 44px auto;
  background: #ffffff;
  border: 1px solid #d3e2e5;
  border-radius: 20px;
  overflow: hidden;
  padding: 34px 40px;
  @media (min-width: 700px) {
    padding: 24px 80px;
  }
  & > img {
    width: 90%;
    height: 300px;
    object-fit: cover;
  }
`;

export const PetDetailsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  @media (min-width: 700px) {
    padding: 50px;
  }
  h1 {
    color: #4d6f80;
    font-size: 28px;
    line-height: 44px;
    margin-bottom: 8px;
    @media (min-width: 700px) {
      font-size: 34px;
      line-height: 54px;
    }
    strong {
      font-size: 24px;
      margin-right: 5px;
    }
  }
  p {
    line-height: 28px;
    font-size: 20px;
    color: #5c8599;
    margin-top: 24px;
    strong {
      font-size: 24px;
      margin-right: 5px;
    }
  }
  hr {
    width: 100%;
    height: 1px;
    border: 0;
    background: #d3e2e6;
    margin: 64px 0;
  }
  h2 {
    font-size: 28px;
    line-height: 46px;
    color: #4d6f80;
    strong {
      font-size: 24px;
      margin-right: 5px;
    }
  }
`;
