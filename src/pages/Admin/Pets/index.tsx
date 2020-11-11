import React, { useState, useEffect } from 'react';

import { Container, List, Content } from './styles';
import PageHeader from '../../../components/PageHeader';
import Card from '../../../components/CardAdmin';
import api from '../../../services/api';

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

const Pets: React.FC = () => {
  const [pets, setPets] = useState<PetProps[]>();

  useEffect(() => {
    async function loadPets() {
      const response = await api.get('pets');
      setPets(response.data);
    }
    loadPets();
  }, []);

  return (
    <>
      <Container>
        <PageHeader title="Pets para adoção" />

        <Content>
          <List>
            {pets &&
              pets.map((pet, index) => (
                <button type="button" key={String(index)}>
                  <Card pet={pet} />
                </button>
              ))}
          </List>
        </Content>
      </Container>
    </>
  );
};

export default Pets;
