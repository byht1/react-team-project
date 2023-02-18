import React from 'react';
import { useForm } from 'react-hook-form';
import { FormSellStepOne } from '../FormSell/FormSellStepOne';
import { FormSellStepTwo } from '../FormSell/FormSellStepTwo';
import { useNavigate } from 'react-router-dom';

export const Form = ({ methods }) => {
  // const { register, handleSubmit, watch, errors } = useForm();
  const navigate = useNavigate();
  const onSubmit = data => {
    console.log(data);
    navigate('/');
  };

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      <FormSellStepOne />
      {/* <button className="btn btn-primary">Create New Account</button> */}
    </form>
  );
};
