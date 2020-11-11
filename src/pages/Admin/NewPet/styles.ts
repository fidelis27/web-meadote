import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  @media (min-width: 700px) {
    max-width: 100vw;
  }

  .page-header .header-content {
    margin-bottom: 6.4rem;

    @media (min-width: 700px) {
      margin-bottom: 0;
    }
  }

  main {
    background: var(--color-box-base);
    width: 100%;
    max-width: 74rem;
    border-radius: 0.8rem;
    padding-top: 6.4rem;
    margin: -3.2rem auto 3.2rem;

    @media (min-width: 700px) {
      .schedule-item {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr;
        column-gap: 1.6rem;
        align-items: flex-end;

        .input-block {
          margin-top: 0 !important;
        }
      }
    }

    fieldset {
      border: 0;
      padding: 0 2.4rem;

      .input-block + .textarea-block,
      .select-block + .input-block {
        margin-top: 2.4rem;
      }

      + fieldset {
        margin-top: 6.4rem;
      }

      legend {
        font: 700 2.4rem Archivo;
        color: var(--color-text-title);
        margin-bottom: 2.4rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding-bottom: 1.6rem;
        border-bottom: 1px solid var(--color-line-in-white);

        button {
          background: none;
          border: 0;
          color: var(--color-primary-dark);
          font: 700 1.6rem Archivo;
          cursor: pointer;
          transition: color 0.2;
          :hover {
            color: var(--color-primary-darker);
          }
        }
      }
    }
    label {
      color: var(--color-text-complement);
    }
  }
`;

export const Footer = styled.footer`
  padding: 4rem 2.4rem;
  background: var(--color-box-footer);
  border-top: 1px solid var(--color-line-in-white);

  @media (min-width: 700px) {
    padding: 4rem 6.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 6.4rem;
    p {
      justify-content: space-between;
    }
    button {
      width: 20rem;
      margin-top: 0;
    }
  }

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: var(--color-text-complement);
    svg {
      margin-right: 3rem;
    }
  }

  button {
    width: 100%;
    height: 5.6rem;
    background: var(--color-secundary);
    color: var(--color-button-text);
    border: 0;
    border-radius: 0.8rem;
    cursor: pointer;
    font: 700 1.6rem Archivo;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: background-color 0.2s;
    margin-top: 3.2rem;

    :hover {
      background: var(--color-secundary-dark);
    }
  }
`;

export const InputBlock = styled.div`
  + div {
    margin-top: 24px;
  }
  label {
    display: flex;
    color: #8fa7b3;
    margin-bottom: 8px;
    line-height: 24px;
    span {
      font-size: 14px;
      color: #8fa7b3;
      margin-left: 24px;
      line-height: 24px;
    }
  }
  input,
  textarea {
    width: 100%;
    background: #f5f8fa;
    border: 1px solid #d3e2e5;
    border-radius: 20px;
    outline: none;
    color: #5c8599;
  }
  input[type='file'] {
    display: none;
  }
  input {
    height: 64px;
    padding: 0 16px;
  }
  textarea {
    min-height: 120px;
    max-height: 240px;
    resize: vertical;
    padding: 16px;
    line-height: 28px;
  }
`;

export const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 16px;
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

export const NewImage = styled.label`
  height: 96px;
  background: #f5f8fa;
  border: 1px dashed #96d2f0;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.label`
  margin: 2rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #96d2f0;
  width: 20rem;
  height: 20rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Checkbox = styled.div`
  & label {
    font-size: 1.6rem;
    color: var(--color-input-label-text);
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & input {
      display: none;
    }
    & span {
      width: 6.4rem;
      height: 2.4rem;
      border-radius: 1.6rem;
      border: 1px solid var(--color-input-border);
      background-color: var(--color-background-light);
      display: flex;
      align-items: center;
      padding: 0 0.8rem;
      cursor: pointer;
      transition: all 0.2s;
      &.checked {
        border: 1px solid var(--color-whatsapp);
        background-color: var(--color-whatsapp);
        justify-content: flex-end;
      }
      &::after {
        content: '';
        width: 2.4rem;
        height: 1.2rem;
        background-color: var(--color-gray-dark);
        border-radius: 0.8rem;
        transition: all 0.2s;
      }
      &.checked::after {
        background-color: var(--color-background-light);
      }
    }
  }
`;
export const ElementWrapper = styled.div`
  margin-bottom: 2.4rem;
`;
