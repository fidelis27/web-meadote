import React, { ChangeEvent, useCallback, memo, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { FaTrash, FaPencilAlt } from 'react-icons/fa';
import crypto from 'crypto';
import api from '../../services/api';

import {
  CardContainer,
  Img,
  SubCard,
  CardName,
  CardType,
  CardTypes,
  CardInfo,
  Title,
  Events,
  ElementWrapper,
  Checkbox,
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
}
interface Pet {
  pet: PetProps;
}

const Card: React.FC<Pet> = ({ pet }) => {
  const [adopted, setAdopted] = useState<boolean>(() => pet.adopted);
  const hash = crypto.randomBytes(6).toString('hex');
  const history = useHistory();

  const handleChange = useCallback(
    async (event: ChangeEvent<HTMLInputElement>) => {
      const { checked } = event.target;

      const status = checked === true;
      setAdopted(status);

      const { id } = pet;

      await api.patch('adopted', {
        id,
        adopted: status,
      });
    },
    [pet],
  );

  const handleRemove = useCallback(
    async (id) => {
      await api.delete(`/pets/${id}`);
      history.push(`/admin/pets`);
    },
    [history],
  );

  return (
    <CardContainer>
      <Img src={pet.images[0].url} alt="pet" />

      <SubCard>
        <CardTypes>
          <CardType>
            <TitleType>Raça</TitleType>Vira-lata
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
        <Events>
          <Link to="/admin/edit/pet">
            <FaPencilAlt size={40} color="#000" className="pencil" />
          </Link>
          <div>
            <FaTrash
              onClick={() => handleRemove(pet.id)}
              size={40}
              color="#000"
              className="trash"
            />
          </div>
        </Events>
        <ElementWrapper>
          <Checkbox>
            <label htmlFor={hash}>
              Adotado?
              <span className={adopted && adopted ? 'checked' : ''}>
                <input
                  type="checkbox"
                  name={hash}
                  id={hash}
                  onChange={handleChange}
                  defaultChecked={adopted}
                />
              </span>
            </label>
          </Checkbox>
        </ElementWrapper>
      </SubCard>
    </CardContainer>
  );
};

export default memo(Card);
