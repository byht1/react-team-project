import { FormContext } from 'components/global/FormContext';
import React, { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
// import { Alert } from '@mui/material';
import {
  AuthContainer,
  BgWrapper,
  ForgotPassFormTitle,
  FormWrapper,
  InputsWrapper,
  Link,
  SuccessMessage,
} from './ForgotPassForm.styled';
import { forgotPassSchema } from './ForgotPassSchema';
import { FormInput } from 'components/global/FormInput';
import { Button } from 'components/global/button';
import { Loader } from 'components/global/Loader';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import server from 'api/basic';

export const ForgotPassForm = () => {
  // const [err, setErr] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const method = useForm({
    resolver: yupResolver(forgotPassSchema),
    mode: 'onTouched',
  });

  const { reset, getValues } = method;

  const onSubmit = async () => {
    const email = getValues('email');
    try {
      setIsLoading(true);
      await server.patch('/auth/forgotten-password', { email });
      // setErr(null);
      setSuccess(true);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.error(error.response.data.message, { hideProgressBar: true });

      // setErr(error.response.data.message);
      return;
    }
    reset();
  };

  return (
    <BgWrapper>
      <ToastContainer />
      {isLoading && <Loader opacity={0.5} />}
      <AuthContainer>
        <FormWrapper>
          <ForgotPassFormTitle>{success ? 'Success' : 'Enter your email'}</ForgotPassFormTitle>
          {/* {err && (
            <Alert style={{ marginBottom: 16 }} severity="error" onClose={() => setErr(null)}>
              {err}
            </Alert>
          )} */}
          <FormContext methods={method} submit={() => console.log('click')}>
            {success ? (
              <SuccessMessage>An email has been sent to you</SuccessMessage>
            ) : (
              <InputsWrapper>
                <FormInput name="email" type="text" placeholder="Email" mb={20} />
                <Button theme={'dark'} type={'submit'} fn={() => onSubmit()}>
                  Send Email
                </Button>
              </InputsWrapper>
            )}
          </FormContext>
          <Link to="/login">Back to login</Link>
        </FormWrapper>
      </AuthContainer>
    </BgWrapper>
  );
};
