import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { MdPets } from 'react-icons/md';

import logoImg from '../../assets/images/meadote.svg';
import dogImg from '../../assets/images/dog.svg';
import landingImg from '../../assets/images/adoption.svg';

import api from '../../services/api';
import {
  LandingContent,
  Header,
  Container,
  Footer,
  LogoContainer,
  ButtonsContainer,
} from './styles';

const Landing: React.FC = () => {
  const [totalConnections, setTotalConnections] = useState('');

  useEffect(() => {
    async function loadPets() {
      const response = await api.get('pet-adopted');
      setTotalConnections(response.data);
    }
    loadPets();
  }, []);

  return (
    <Container>
      <Header>
        <img src={dogImg} alt="Me adote" />
        <nav>
          <Link to="/signin">Lar de adoção</Link>
          <Link to="/">Sobre</Link>
        </nav>
      </Header>
      <LandingContent>
        <LogoContainer>
          <img src={logoImg} alt="Me adote" />
          <h2>Sua plataforma para adoção</h2>
        </LogoContainer>

        <img src={landingImg} alt="hero" className="hero-image" />
      </LandingContent>
      <Footer>
        <p>
          Seja bem-vindo.
          <strong> De um lar a um Pet!</strong>
        </p>
        <span className="total-connections">
          Total de Pets adotados {totalConnections.length} !
          <FaHeart size={30} color="#f45b65" />
        </span>
        <ButtonsContainer>
          <Link to="/pets-to-adoption" className="pets-to-adoption">
            <MdPets />
            Adote
          </Link>

          <Link to="/pets-to-adopted" className="pets">
            <MdPets />
            Adotados
          </Link>
        </ButtonsContainer>
      </Footer>
    </Container>
  );
};

export default Landing;
