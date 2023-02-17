import { PetsData } from 'components/modules/User/PetsData';
import { UserData } from 'components/modules/User/UserData';
import React from 'react';

const UserPage = () => {
  return (
    <div>
      <UserData />
      <PetsData />
    </div>
  );
};

export default UserPage;
