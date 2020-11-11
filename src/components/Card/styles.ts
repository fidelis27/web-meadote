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
  display: flex;
  flex-direction: column;
  justify-content: center;

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
  justify-content: space-between;
  text-transform: capitalize;
  font-weight: 900;

  color: var(--color-primary);
`;

export const CardInfo = styled.div`
  display: flex;
  font-size: 1.5rem;
  margin-top: 15px;
  justify-content: space-between;
  color: var(--color-primary);
`;

export const CardOng = styled.div`
  display: flex;
  font-size: 1.5rem;
  margin-top: 15px;
  justify-content: space-between;
  color: var(--color-primary-light);
`;

export const Title = styled.p`
  font-weight: 700;
  text-align: center;
  margin: 0;
  padding-right: 5px;
  color: var(--color-gray-dark);
`;

export const TitleType = styled.p`
  font-weight: 700;
  margin: 0;
  padding-right: 5px;
  color: var(--color-gray-light);
`;
