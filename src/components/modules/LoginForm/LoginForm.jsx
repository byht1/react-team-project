import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'components/global/button';
import {
  AuthContainer,
  FormWrapper,
  LoginFormTitle,
  InputsWrapper,
  LoginText,
  Link,
  BgWrapper,
} from './LoginForm.styled';
import { Box } from 'components/global/Box';

import { loginSchema } from './LoginSchema';
import { FormInput } from '../../global/FormInput';
import { FormContext } from 'components/global/FormContext';

export const LoginForm = () => {
  const method = useForm({
    resolver: yupResolver(loginSchema),
    mode: 'onTouched',
  });

  const { reset } = method;

  const onSubmit = data => {
    console.log(data);
    reset();
  };

  return (
    <BgWrapper>
      <AuthContainer>
        <FormWrapper>
          <LoginFormTitle>Login</LoginFormTitle>
          <FormContext methods={method} submit={onSubmit}>
            <InputsWrapper>
              <FormInput name="email" type="text" placeholder="Email" mb={16} />
              <FormInput name="password" type="password" placeholder="Password" mb={40} />

              <Button theme={'dark'} type={'submit'} fn={() => console.log('click')}>
                Login
              </Button>
            </InputsWrapper>
          </FormContext>
          <Box display="flex" mt={40}>
            <LoginText>Don't have an account?</LoginText>
            <Link to="/register">Register</Link>
          </Box>
        </FormWrapper>
      </AuthContainer>
    </BgWrapper>
  );
};
