
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
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
import { logIn } from 'api';
import { register } from 'redux/auth';
import { Alert } from '@mui/material';

export const LoginForm = () => {
  const [err, setErr] = useState(null);
  const dispatch = useDispatch();

  const method = useForm({
    resolver: yupResolver(loginSchema),
    mode: 'onTouched',
  });

  const { reset } = method;

  const { mutate: logUser } = useMutation({
    mutationKey: ['user'],
    mutationFn: data => logIn(data),
    onSuccess: logData => {
      console.log(logData);
      setErr(null);
      dispatch(register(logData));
      reset();
    },
    onError: error => {
      setErr(error.response.data.message);
    },
  });

  const onSubmit = data => {
    console.log(data);
    logUser(data);
  };

  return (
    <BgWrapper>
      <AuthContainer>
        <FormWrapper>
          <LoginFormTitle>Login</LoginFormTitle>
          {err && (
            <Alert style={{ marginBottom: 16 }} severity="error" onClose={() => setErr(null)}>
              {err}
            </Alert>
          )}
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

