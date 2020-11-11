import React from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

import mapMarkerImg from '../../assets/images/dog.svg';
import { useAuth } from '../../hooks/auth';
import { AppSidebar } from './styles';

const Sidebar: React.FC = () => {
  const { signOut } = useAuth();
  const history = useHistory();

  function handleSignOut() {
    signOut();
    history.push('/');
  }

  return (
    <AppSidebar>
      <img src={mapMarkerImg} alt="AdoteMe" />

      <footer>
        <button type="button" onClick={() => handleSignOut()}>
          <FaSignOutAlt size={24} color="#fff" title="sair" />
        </button>
      </footer>
    </AppSidebar>
  );
};

export default Sidebar;
