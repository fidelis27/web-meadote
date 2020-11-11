import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, List, Content } from './styles';
import PageHeader from '../../components/PageHeader';
import Card from '../../components/Card';
import api from '../../services/api';

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

const Pets: React.FC = () => {
  const [pets, setPets] = useState<PetProps[]>();

  useEffect(() => {
    async function loadPets() {
      const response = await api.get('pet-adopted');
      setPets(response.data);
    }
    loadPets();
  }, []);
  return (
    <Container>
      <PageHeader title="Pets que já conseguiram um lar!" />
      <Content>
        <List>
          {pets &&
            pets.map((pet, index) => (
              <Link to={`/pet-details/${pet.id}`} key={String(index)}>
                <Card pet={pet} />
              </Link>
            ))}
        </List>
      </Content>
    </Container>
  );
};

export default Pets;
