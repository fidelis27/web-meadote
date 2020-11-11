import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import PageHeader from '../../components/PageHeader';

import { Container, CardContainer, Images, PetDetailsContent } from './styles';

interface PetProps {
  id: number;
  name: string;
  description: string;
  adopted: boolean;
  images: Array<{
    id: number;
    url: string;
  }>;
  breed: string;
  ong_name: string;
  ong_description: string;
  ong_email: string;
}

interface PetParams {
  id: string;
}
const PetDetails: React.FC = () => {
  const [pet, setPet] = useState<PetProps>();
  const params = useParams<PetParams>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    async function loadPets() {
      const response = await api.get(`pets/${params.id}`);
      setPet(response.data);
    }
    loadPets();
  }, [params.id]);

  if (!pet) {
    return <p>Carregando...</p>;
  }
  return (
    <>
      <PageHeader title="Informações do PET!" />
      <Container>
        <main>
          <CardContainer>
            <img src={pet.images[activeImageIndex].url} alt={pet.name} />

            <Images>
              {pet.images.map((image, index) => {
                return (
                  <button
                    key={image.id}
                    onClick={() => {
                      setActiveImageIndex(index);
                    }}
                    className={activeImageIndex === index ? 'active' : ''}
                    type="button"
                  >
                    <img src={image.url} alt={pet.name} />
                  </button>
                );
              })}
            </Images>

            <PetDetailsContent>
              <h1>
                <strong>Nome do Pet:</strong> {pet.name}
              </h1>
              <p>
                <strong>Descrição do Pet:</strong>
                {pet.description}
              </p>

              <hr />

              <h2>
                <strong>Ong:</strong>
                {pet.ong_name}
              </h2>

              <p>
                <strong>Descrição:</strong>
                {pet.ong_description}
              </p>
              <p>
                <strong>E-mail:</strong>
                {pet.ong_email}
              </p>
            </PetDetailsContent>
          </CardContainer>
        </main>
      </Container>
    </>
  );
};

export default PetDetails;
