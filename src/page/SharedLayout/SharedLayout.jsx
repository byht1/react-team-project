import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/modules/Header/Header';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
