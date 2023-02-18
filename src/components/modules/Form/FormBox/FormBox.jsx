import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { Outlet } from 'react-router-dom';
import { Form } from './Form';
import { FormWrap } from './FormBox.styled';
import { BackDrop } from '../BackDrop.styled';

export const FormBox = () => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <BackDrop>
        <FormWrap>
          <Form methods={methods}>
            <Outlet />
          </Form>
        </FormWrap>
      </BackDrop>
    </FormProvider>
  );
};
