import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { Outlet } from 'react-router-dom';
import { Form } from './Form';
import { FormWrap } from './FormBox.styled';
import { BackDrop } from '../BackDrop.styled';
import { schemaAddPet } from '../schema';
import { yupResolver } from '@hookform/resolvers/yup';
// import yupResolver
export const FormBox = () => {
  const methods = useForm({
    defaultValues: { petName: 'Linsy' },
    resolver: yupResolver(schemaAddPet),
    mode: 'onBlur',
  });

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
