import React from 'react';
import ReactDOM from 'react-dom';
import { useForm, FormProvider } from 'react-hook-form';
import { FormWrap } from './FormBox.styled';
import { Form } from './Form';

export const FormBox = () => {
  const methods = useForm({ defaultValues: { ' tittle': 'hjbmj' } });
  const { register, handleSubmit } = methods;
  return (
    <FormProvider {...methods}>
      <FormWrap>
        <Form methods={methods}>
          {/* <FormSell /> */}
          {/* <Test /> */}
        </Form>
      </FormWrap>
    </FormProvider>
  );
};

// const rootElement = document.getElementById('root');
// ReactDOM.render(<App />, rootElement);
