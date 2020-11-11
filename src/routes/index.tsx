import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Landing from '../pages/Landing';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Admin/Profile';
import ErrorAuth from '../pages/ErrorAuth';
import NewPet from '../pages/Admin/NewPet';
import Pets from '../pages/Admin/Pets';
import EditPet from '../pages/Admin/EditPet';
import PetsToAdoption from '../pages/PetsToAdoption';
import PetsToAdopted from '../pages/PetsToAdopted';
import PetDetails from '../pages/PetDetails';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/admin/newPet" exact component={NewPet} isPrivate />
      <Route path="/admin/pets" component={Pets} isPrivate />
      <Route path="/admin/edit/pet" component={EditPet} isPrivate />
      <Route path="/admin/dashboard" exact component={Dashboard} isPrivate />
      <Route path="/admin/profile" component={Profile} isPrivate />
      <Route path="/pet-details/:id" component={PetDetails} />

      <Route path="/signin" exact component={SignIn} />
      <Route path="/signup" exact component={SignUp} />
      <Route path="/" exact component={Landing} />
      <Route path="/pets-to-adoption" component={PetsToAdoption} />
      <Route path="/pets-to-adopted" component={PetsToAdopted} />
      <Route path="/error" component={ErrorAuth} />
    </Switch>
  );
};

export default Routes;
