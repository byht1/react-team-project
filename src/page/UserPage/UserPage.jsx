import { PetsData } from 'components/modules/PetsData';
import { UserData } from 'components/modules/UserData';
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
