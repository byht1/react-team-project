import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { Outlet } from 'react-router-dom';
import { Form } from './Form';
import { FormWrap } from './FormBox.styled';
import { BackDrop } from '../BackDrop.styled';
import { schemaAddPet } from '../schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { RadioTwo, RadioMale, RadioFemale } from '../FormSell/FormSell.styled';

// import yupResolver
export const FormBox = () => {
  const methods = useForm({
    defaultValues: { petName: 'Linsy' },
    resolver: yupResolver(schemaAddPet),
    mode: 'onBlur',
  });

  // Добавляем дополнительное поле "myField" со значением "myValue" в объект "data"

  return (
    <FormProvider {...methods}>
      <BackDrop>
        <FormWrap>
          {/* <label>
            <RadioMale />
          </label>
          <RadioTwo type="radio" value="lost/found" />
          <label>
            <RadioFemale />
          </label>
          <RadioTwo type="radio" value="in good hands" />
          <label>
            <RadioMale />
          </label> */}

          <Form methods={methods}>
            <Outlet />
          </Form>
        </FormWrap>
      </BackDrop>
    </FormProvider>
  );
};
