import React from 'react';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <>
      <div>SharedLayout </div>
      <Outlet />
    </>
  );
};
