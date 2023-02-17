import React from 'react';
import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/global/Header/Header';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
