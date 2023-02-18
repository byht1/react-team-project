// import { useState } from 'react';
// import { useFormContext } from 'react-hook-form';
// import { FormSellStepTwo } from './FormSellStepTwo';
// import { useNavigate } from 'react-router-dom';
// import { Text } from 'components/global/text';
// import { InputWrap, ButtonWrap, TextTittle } from './FormSell.styled';
// export const FormSellStepOne = () => {
//   const { register, setValue, getValues, reset } = useFormContext();

//   const navigate = useNavigate();
//   return (
//     <>
//       {/* <label for="petName">Tittle of ad</label> */}
//       <TextTittle>Add pet</TextTittle>
//       <Text>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur </Text>
//       <InputWrap>
//         <label htmlFor="tittle">Tittle of ad</label>
//         <input {...register('tittle')} placeholder="Type name" id="tittle" />
//         <label htmlFor="petName">Name pet</label>
//         <input {...register('petName')} placeholder="Type name pet" id="petName" />
//         <label htmlFor="petBirth">Date of birth</label>
//         <input {...register('petBirth')} placeholder="Type date of birth" id="petBirth" />
//         <label htmlFor="petBreed">Breed</label>
//         <input {...register('petBreed')} placeholder="Type breed" id="petBreed" />
//       </InputWrap>
//       <ButtonWrap>
//         <button
//           type="button"
//           onClick={() => {
//             // setOpen(!open);
//             // console.log('first');
//             navigate('/addpet/step2');
//           }}
//         >
//           Next
//         </button>
//         <button type="button" onClick={() => navigate('/')}>
//           Back
//         </button>
//       </ButtonWrap>
//     </>
//   );
// };

import { useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Text } from 'components/global/text';

import { InputWrap, ButtonWrap, TextTittle } from './FormSell.styled';

export const FormSellStepOne = () => {
  const {
    register,
    setValue,
    getValues,
    reset,
    formState: { errors },
  } = useFormContext();
  const navigate = useNavigate();
  return (
    <>
      <TextTittle>Add pet</TextTittle>
      <Text>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur </Text>
      <InputWrap>
        <label htmlFor="tittle">Tittle of ad</label>
        <input {...register('tittle')} placeholder="Type name" id="tittle" />
        {errors.tittle && <p>{errors.tittle.message}</p>}
        <label htmlFor="petName">Name pet</label>
        <input {...register('petName')} placeholder="Type name pet" id="petName" />
        {errors.petName && <p>{errors.petName.message}</p>}
        <label htmlFor="petBirth">Date of birth</label>
        <input {...register('petBirth')} placeholder="Type date of birth" id="petBirth" />
        {errors.petBirth && <p>{errors.petBirth.message}</p>}
        <label htmlFor="petBreed">Breed</label>
        <input {...register('petBreed')} placeholder="Type breed" id="petBreed" />
        {errors.petBreed && <p>{errors.petBreed.message}</p>}
        {/* <Radio icon={<Female />} checkedIcon={<Female color="primary" />} value="female" />
        <Radio icon={<Male />} checkedIcon={<Male color="primary" />} value="male" /> */}
      </InputWrap>
      <ButtonWrap>
        <button type="button" onClick={() => navigate('/')}>
          Cancel
        </button>
        <button type="button" onClick={() => navigate('/addpet/step2')}>
          Next
        </button>
      </ButtonWrap>
    </>
  );
};
