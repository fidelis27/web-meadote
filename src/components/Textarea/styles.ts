import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}
export const Container = styled.div<ContainerProps>`
  position: relative;
  width: 100%;
  + div {
    margin-top: 1.4rem;
  }

  label {
    font-size: 1.4rem;
    ${(props) =>
      props.isFocused &&
      css`
        color: var(--color-focused);
        font-weight: bold;
      `}
  }

  textarea {
    width: 100%;
    height: 16rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background: var(--color-input-background);
    border: 1px solid var(--color-line-in-white);
    outline: 0;
    resize: vertical;
    padding: 1.2rem 1.6rem;
    font: 1.6rem Archivo;
    min-height: 8rem;
    :focus-within::after {
      width: calc(100% - 3.2rem);
      height: 2px;
      content: '';
      background: var(--color-primary-light);
      position: absolute;
      left: 1.6rem;
      right: 1.6rem;
      bottom: 8px;
    }

    ${(props) =>
      props.isErrored &&
      css`
        border-color: var(--color-error);
      `};
    ${(props) =>
      props.isFocused &&
      css`
        border: 1px solid var(--color-focused);
      `}
    ${(props) =>
      props.isFilled &&
      css`
        border-color: var(--color-filled);
        color: var(--color-filled);
      `}
  }
`;

export const ErrorMessage = styled.span`
  color: var(--color-error);
`;
