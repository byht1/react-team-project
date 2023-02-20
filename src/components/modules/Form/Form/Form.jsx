import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaAddPet } from '../helpers/schemaAppPet';
import { Text } from 'components/global/text';
import { FormWrap, BackDrop } from './Form.styled';
import { RadioTwo, LabelText, RadioWrap, Label, TextTittle } from '../FormSteps/FormStep.styled';

export const Form = () => {
  const [selectedValue, setSelectedValue] = useState('lost/found');
  const location = useLocation();
  console.log(location);

  const methods = useForm({
    defaultValues: { petName: 'Linsy', category: selectedValue },
    resolver: yupResolver(schemaAddPet),
    mode: 'onBlur',
  });

  const navigate = useNavigate();
  const handleRadioInputChange = event => {
    setSelectedValue(event.target.value);
    methods.setValue('category', event.target.value);
  };

  const onSubmit = data => {
    console.log(data);
    navigate('/');
  };
  return (
    <FormProvider {...methods}>
      <BackDrop>
        <FormWrap>
          <TextTittle>Add pet</TextTittle>
          {location.pathname === '/addpet/step1' && (
            <Text>
              Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
            </Text>
          )}

          <RadioWrap>
            <Label checked={selectedValue === 'lost/found'}>
              <RadioTwo
                type="radio"
                {...methods.register('category')}
                value="lost/found"
                onChange={handleRadioInputChange}
                checked={selectedValue === 'lost/found'}
              />
              <LabelText>lost/found</LabelText>
            </Label>
            <Label checked={selectedValue === 'in good hands'}>
              <RadioTwo
                type="radio"
                {...methods.register('category')}
                value="in good hands"
                onChange={handleRadioInputChange}
                checked={selectedValue === 'in good hands'}
              />
              <LabelText>in good hands</LabelText>
            </Label>
            <Label checked={selectedValue === 'sell'}>
              <RadioTwo
                type="radio"
                {...methods.register('category')}
                value="sell"
                onChange={handleRadioInputChange}
                checked={selectedValue === 'sell'}
              />
              <LabelText>sell</LabelText>
            </Label>
          </RadioWrap>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Outlet />
          </form>
        </FormWrap>
      </BackDrop>
    </FormProvider>
  );
};
