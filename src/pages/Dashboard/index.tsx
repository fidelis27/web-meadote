import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/SideBar';
import { useAuth } from '../../hooks/auth';

import { Container, Main, Buttons, ImgProfile } from './styles';
import img from '../../assets/images/dog.svg';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <Container>
      <Sidebar />
      <Main>
        <ImgProfile>
          <img
            src={
              user.avatar
                ? user.avatar
                : 'https://aeealberta.org/wp-content/uploads/2018/10/profile.png'
            }
            alt="profile"
          />
        </ImgProfile>

        <span>
          Instituição<strong>{user?.name}</strong>
        </span>
        <Link to="/admin/profile" className="edit">
          Editar perfil
        </Link>

        <Buttons>
          <Link to="/admin/newpet" className="pets">
            <img src={img} alt="novo pet" />
            Cadastre novo Pet
          </Link>
          <Link to="/admin/pets" className="pets-adoption">
            <img src={img} alt="novo pet" />
            Pets para adoção
          </Link>
        </Buttons>
      </Main>
    </Container>
  );
};

export default Dashboard;
