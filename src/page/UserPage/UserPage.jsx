import { PetsData } from 'components/modules/User/PetsData';
import { UserData } from 'components/modules/User/UserData';
import React from 'react';
import { Outlet } from 'react-router';
import { Div } from './UserPage.styled';

const UserPage = () => {
  return (
    <Div>
      <UserData />
      <PetsData />
      <Outlet />
    </Div>
  );
};

export default UserPage;
