import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 10px;
  margin-top: 25px;

  &:hover {
    transform: scale(1.05);
    transition-duration: 200ms;
    cursor: pointer;
    > img {
      margin-top: -20px;
      transform: scale(1.15);
      transition-duration: 300ms;
    }
  }
`;

export const Img = styled.img`
  width: 120px;
  margin: 0 auto;
  z-index: 2;
`;

export const SubCard = styled.div`
  border-radius: 10px;
  box-shadow: 2px 2px 10px -4px rgba(0, 0, 0, 0.25);
  background: #fff;
  min-height: 340px;
  padding: 15px;
  position: absolute;
  width: 100%;
  margin-top: 100px;
  padding-top: 25px;
`;

export const CardTypes = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export const CardType = styled.div`
  display: flex;
  padding: 5px 10px;
  margin: 10px 10px 10px 0;
  border-radius: 5px;
  background: var(--color-primary);
  color: #fff;
`;

export const CardName = styled.div`
  display: flex;
  text-align: center;
  text-transform: capitalize;
  font-weight: 900;

  color: var(--color-primary);
`;

export const CardInfo = styled.div`
  display: flex;
  margin-top: 15px;
  justify-content: space-between;
  color: var(--color-primary);
`;

export const TitleType = styled.p`
  font-weight: 700;
  margin: 0;
  padding-right: 5px;
  color: var(--color-gray-light);
`;

export const Title = styled.p`
  font-weight: 700;
  margin: 0;
  padding-right: 5px;
  color: var(--color-gray-dark);
`;

export const Events = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 20px 0 20px;

  a {
    svg.pencil {
      background-color: #ffc107;
      padding: 8px;
      border-radius: 4px;
    }
  }
  div {
    svg.trash {
      background-color: #dc3545;
      padding: 8px;
      border-radius: 4px;
    }
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

export const PopUp = styled.div`
  .popupcontainer {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .popup {
    text-align: center;
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
    margin: 20px;
    h1 {
      background-color: #0094da;
      font-weight: bold;
      color: white;
      border-bottom: 1px solid #ccc;
      padding: 20px;
      margin-top: 0;
    }
    p {
      font-weight: bold;
    }
    .fancy-btn {
      margin: 10px 30px;
    }
  }
`;
