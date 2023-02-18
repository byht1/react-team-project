
import React from 'react';
import { FormProvider } from 'react-hook-form';
import PropTypes from 'prop-types';

import { Form } from './FormContext.styled';

export const FormContext = ({ methods, children, submit }) => {
  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit(submit)}>{children}</Form>
    </FormProvider>
  );
};

FormContext.propTypes = {
  methods: PropTypes.any.isRequired,
  submit: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
};
