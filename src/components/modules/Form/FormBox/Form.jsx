import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export const Form = ({ methods }) => {
  const navigate = useNavigate();
  const onSubmit = data => {
    console.log(data);
    navigate('/');
  };

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      <Outlet />
    </form>
  );
};
