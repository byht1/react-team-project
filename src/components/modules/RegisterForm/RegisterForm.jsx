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

import { FcGoogle } from 'react-icons/fc';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  AuthContainer,
  FormWrapper,
  RegisterFormTitle,
  InputsWrapper,
  RegisterText,
  Link,
  BgWrapper,
  GoogleBox,
  TransparentBtn,
} from './RegisterForm.styled';
import { Box } from 'components/global/Box';
import { signUp } from 'api';
// import { Alert } from '@mui/material';
import { Loader } from 'components/global/Loader';
import server from 'api/basic';

export const RegisterForm = () => {
  const [step, setStep] = useState(1);
  const [err, setErr] = useState(null);
  const dispatch = useDispatch();

  const method = useForm({
    resolver: yupResolver(registerSchema),
    mode: 'onTouched',
  });
  const { reset, trigger, getValues } = method;

  const { mutate: regUser, isLoading } = useMutation({
    mutationKey: ['user'],
    mutationFn: data => signUp(data),
    onSuccess: signData => {
      // console.log(signData);
      setErr(null);
      dispatch(register(signData));
      reset();
    },
    onError: error => {
      toast.error(error.response.data.message, { hideProgressBar: true, autoClose: 5000 });
      toast.error(error.response.data.city, { hideProgressBar: true, autoClose: 5000 });
      toast.error(error.response.data.email, { hideProgressBar: true, autoClose: 5000 });
      toast.error(error.response.data.name, { hideProgressBar: true, autoClose: 5000 });
      toast.error(error.response.data.password, { hideProgressBar: true, autoClose: 5000 });
      toast.error(error.response.data.phone, { hideProgressBar: true, autoClose: 5000 });
      // setErr(Object.values(error.response.data));
      console.log(err);
      setErr(error.response.data.message);
    },
  });

  const onNextClick = async () => {
    const email = getValues('email');
    try {
      await server.post('/auth/is-use-email', { email });
      // setErr(null);
    } catch (error) {
      // setErr(error.response.data.message);
      toast.error(error.response.data.message, { hideProgressBar: true });

      return;
    }

    const result = await trigger(['email', 'password', 'confirmpassword']);
    // console.log(result);
    result && setStep(2);
  };

  const onSubmit = data => {
    // console.log(data);
    regUser(data);
  };

  return (
    <BgWrapper>
      <ToastContainer />
      {isLoading && <Loader opacity={0.5} />}
      <AuthContainer>
        <FormWrapper>
          <RegisterFormTitle>Registration</RegisterFormTitle>
          {/* {err && (
            <Alert style={{ marginBottom: 16 }} severity="error" onClose={() => setErr(null)}>
              {err}
            </Alert>
          )} */}
          <FormContext methods={method} submit={onSubmit}>
            <InputsWrapper>
              {step === 1 && (
                <>
                  <RegStepOne />
                  <Button theme={'dark'} type={'button'} fn={onNextClick}>
                    Next
                  </Button>
                </>
              )}
              {step === 2 && (
                <>
                  <RegStepTwo />
                  <Button theme={'dark'} type={'submit'}>
                    Register
                  </Button>
                  <TransparentBtn mt={10} fn={() => setStep(1)}>
                    Back
                  </TransparentBtn>
                </>
              )}
            </InputsWrapper>
          </FormContext>
          <Box display="flex" mt={40} mb={5}>
            <RegisterText>Already have an account?</RegisterText>
            <Link to="/login">Login</Link>
          </Box>
          <a href="https://node-team-project.onrender.com/api/auth/google">
            <GoogleBox>
              <RegisterText>Sign in with Google</RegisterText>

              <FcGoogle size={'25px'} />
            </GoogleBox>
          </a>
        </FormWrapper>
      </AuthContainer>
    </BgWrapper>
  );
};
