import React from 'react';

import {
  CardContainer,
  Img,
  SubCard,
  CardName,
  CardType,
  CardTypes,
  CardInfo,
  Title,
  CardOng,
  TitleType,
} from './styles';

interface PetProps {
  id: number;
  name: string;
  description: string;
  adopted: boolean;
  images: Array<{
    id: number;
    url: string;
  }>;
  ong_name: string;
  ong: string;
  breed: string;
}
interface Pet {
  pet: PetProps;
}

const Card: React.FC<Pet> = ({ pet }) => {
  return (
    <CardContainer>
      <Img src={pet.images[0].url} alt="pet" />

      <SubCard>
        <CardTypes>
          <CardType>
            <TitleType>Raça</TitleType>
            {pet.breed}
          </CardType>
        </CardTypes>
        <CardName id="name">
          <Title>Nome:</Title>
          {pet.name}
        </CardName>
        <CardInfo>
          <Title>Descrição:</Title>
          {pet.description}
        </CardInfo>
        <CardOng>
          <Title>ONG:</Title>
          {pet.ong_name}
        </CardOng>
      </SubCard>
    </CardContainer>
  );
};

export default Card;
