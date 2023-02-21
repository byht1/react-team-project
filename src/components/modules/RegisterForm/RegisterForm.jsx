import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';

import { Button } from 'components/global/button';
import { FormContext } from 'components/global/FormContext';
import { RegStepOne } from './RegStepOne/RegStepOne';
import { RegStepTwo } from './RegStepTwo/RegStepTwo';

import { register } from 'redux/auth';
import { registerSchema } from './RegisterSchema';

import {
  AuthContainer,
  FormWrapper,
  RegisterFormTitle,
  InputsWrapper,
  RegisterText,
  Link,
  BgWrapper,
} from './RegisterForm.styled';
import { Box } from 'components/global/Box';
import { signUp } from 'api';
import { Alert } from '@mui/material';

export const RegisterForm = () => {
  const [step, setStep] = useState(1);
  const [err, setErr] = useState(null);
  const dispatch = useDispatch();

  const method = useForm({
    resolver: yupResolver(registerSchema),
    mode: 'onTouched',
  });
  const { reset, trigger } = method;

  const { mutate: regUser } = useMutation({
    mutationKey: ['user'],
    mutationFn: data => signUp(data),
    onSuccess: signData => {
      // console.log(signData);
      setErr(null);
      dispatch(register(signData));
      reset();
    },
    onError: error => {
      setErr(error.response.data.message);
      // console.log(error.response.data.message);
      // alert(error.response.data.message);
    },
  });

  const onSubmit = data => {
    console.log(data);

    regUser(data);
  };

  return (
    <BgWrapper>
      <AuthContainer>
        <FormWrapper>
          <RegisterFormTitle>Registration</RegisterFormTitle>
          {err && (
            <Alert style={{ marginBottom: 16 }} severity="error" onClose={() => setErr(null)}>
              {err}
            </Alert>
          )}
          <FormContext methods={method} submit={onSubmit}>
            <InputsWrapper>
              {step === 1 && (
                <>
                  <RegStepOne />
                  <Button
                    theme={'dark'}
                    type={'button'}
                    fn={async () => {
                      const result = await trigger(['email', 'password', 'confirmpassword']);
                      console.log(result);
                      result && setStep(2);
                    }}
                  >
                    Next
                  </Button>
                </>
              )}
              {step === 2 && (
                <>
                  <RegStepTwo />
                  <Button theme={'dark'} type={'submit'} fn={() => console.log('click')}>
                    Register
                  </Button>
                  <Button
                    style={{ backgroundColor: 'transparent' }}
                    type={'button'}
                    mt={10}
                    fn={() => setStep(1)}
                  >
                    Back
                  </Button>
                </>
              )}
            </InputsWrapper>
          </FormContext>
          <Box display="flex" mt={40}>
            <RegisterText>Already have an account?</RegisterText>
            <Link to="/login">Login</Link>
          </Box>
        </FormWrapper>
      </AuthContainer>
    </BgWrapper>
  );
};
