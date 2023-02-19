import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { Outlet } from 'react-router-dom';
import { Form } from './Form';
import { FormWrap } from './FormBox.styled';
import { BackDrop } from '../BackDrop.styled';
import { schemaAddPet } from '../schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { RadioTwo, RadioMale, RadioFemale } from '../FormSell/FormSell.styled';
import { useState } from 'react';
import { useEffect } from 'react';
// import yupResolver
export const FormBox = () => {
  const [selectedValue, setSelectedValue] = useState('option-1');

  // const formProps = 'KLSVMKLmDSLKVtrue';
  const methods = useForm({
    defaultValues: { petName: 'Linsy', radio: selectedValue },
    resolver: yupResolver(schemaAddPet),
    mode: 'onBlur',
  });

  // const selectedVal = methods.watch('radio');
  // async function myfunc() {
  //   const radioValue = await methods.watch('radio');
  //   console.log('Current value of radio field:', radioValue);
  //   methods.setValue('radio', radioValue);
  // }

  const handleRadioInputChange = event => {
    setSelectedValue(event.target.value);
    methods.setValue('radio', event.target.value);
  };
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
          <div>
            <label>
              <input
                type="radio"
                {...methods.register('radio')}
                value="option-1"
                onChange={handleRadioInputChange}
                checked={selectedValue === 'option-1'}
              />
              <p>Option 1</p>
            </label>
            <label>
              <input
                type="radio"
                {...methods.register('radio')}
                value="option-2"
                onChange={handleRadioInputChange}
                checked={selectedValue === 'option-2'}
              />
              <p>Option 2</p>
            </label>
            <label>
              <input
                type="radio"
                {...methods.register('radio')}
                value="option-3"
                onChange={handleRadioInputChange}
                checked={selectedValue === 'option-3'}
              />
              <p>Option3</p>
            </label>
          </div>
          <Form methods={methods}>
            <Outlet />
          </Form>
        </FormWrap>
      </BackDrop>
    </FormProvider>
  );
};
