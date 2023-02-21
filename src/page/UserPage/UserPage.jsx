import { PetsData } from 'components/modules/User/PetsData';
import { UserData } from 'components/modules/User/UserData';
import React from 'react';
import { Div } from './UserPage.styled';

const UserPage = () => {
  return (
    <Div>
      <UserData />
      <PetsData />
    </Div>
  );
};

export default UserPage;
