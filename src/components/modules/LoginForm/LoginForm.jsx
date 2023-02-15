import { Container } from 'components/global/Container';
import React from 'react';
import { LoginFormTitle } from './LoginForm.styled';

export const LoginForm = () => {
  return (
    <Container pt={42}>
      <LoginFormTitle>Login</LoginFormTitle>
    </Container>
  );
};
