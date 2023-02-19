import React from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';
import { Input, Label, ErrorMsg } from './FormInput.styled';

export const FormInput = ({ name, type, placeholder = '', mb }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <Label mb={mb}>
      <Input {...register(name)} type={type} placeholder={placeholder} />
      {errors[name] && <ErrorMsg>{errors[name]?.message}</ErrorMsg>}
    </Label>
  );
};

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  mb: PropTypes.number,
};
