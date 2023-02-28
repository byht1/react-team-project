import { FormContext } from 'components/global/FormContext';
import React, { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Alert } from '@mui/material';
import { FormInput } from 'components/global/FormInput';
import { Button } from 'components/global/button';
import { Loader } from 'components/global/Loader';
import { newPassSchema } from './newPassSchema';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import {
  BgWrapper,
  AuthContainer,
  FormWrapper,
  NewPassFormTitle,
  InputsWrapper,
  Link,
} from './NewPassForm.styled';
import { useMutation } from '@tanstack/react-query';
import { newPass } from 'api';
import { register } from 'redux/auth';

export const NewPassForm = () => {
  const [err, setErr] = useState(null);
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const accessToken = searchParams.get('token');

  const method = useForm({
    resolver: yupResolver(newPassSchema),
    mode: 'onTouched',
  });
  const { reset, getValues } = method;

  const { mutate: saveNewPass, isLoading } = useMutation({
    mutationKey: ['user'],
    mutationFn: ({ token, data }) => {
      return newPass(token, data);
    },
    onSuccess: newData => {
      setErr(null);
      dispatch(register(newData));
      setSearchParams({});
      reset();
    },
    onError: error => {
      setErr(error.response.data.message);
    },
  });

  const onSubmit = () => {

    const password = getValues('password');
    saveNewPass({ token: accessToken, data: { password } });
  };

  return (
    <BgWrapper>
      {isLoading && <Loader opacity={0.5} />}
      <AuthContainer>
        <FormWrapper>
          <NewPassFormTitle></NewPassFormTitle>
          {err && (
            <Alert style={{ marginBottom: 16 }} severity="error" onClose={() => setErr(null)}>
              {err}
            </Alert>
          )}
          <FormContext methods={method} submit={onSubmit}>
            <InputsWrapper>
              <FormInput
                name="password"
                type={'password'}
                placeholder="Password"
                mb={20}
                showhide={true}
              />

              <FormInput
                name="confirmpassword"
                type={'password'}
                placeholder="Confirm Password"
                mb={40}
                showhide={true}
              />
              <Button theme={'dark'} type={'submit'}>
                Change password
              </Button>
            </InputsWrapper>
          </FormContext>
          <Link to="/login">Back to login</Link>
        </FormWrapper>
      </AuthContainer>
    </BgWrapper>
  );
};
