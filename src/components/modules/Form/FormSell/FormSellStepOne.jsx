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

import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormSellStepTwo } from './FormSellStepTwo';
import { useNavigate } from 'react-router-dom';
import { Text } from 'components/global/text';
import { useLocation } from 'react-router-dom';
import { InputWrap, ButtonWrap, TextTittle } from './FormSell.styled';

export const FormSellStepOne = () => {
  const [open, setOpen] = useState(false);
  const { register, setValue, getValues, reset } = useFormContext();
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <>
      {/* <label for="petName">Tittle of ad</label> */}
      <TextTittle>Add pet</TextTittle>
      <Text>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur </Text>
      <InputWrap>
        <label htmlFor="tittle">Tittle of ad</label>
        <input {...register('tittle')} placeholder="Type name" id="tittle" />
        <label htmlFor="petName">Name pet</label>
        <input {...register('petName')} placeholder="Type name pet" id="petName" />
        <label htmlFor="petBirth">Date of birth</label>
        <input {...register('petBirth')} placeholder="Type date of birth" id="petBirth" />
        <label htmlFor="petBreed">Breed</label>
        <input {...register('petBreed')} placeholder="Type breed" id="petBreed" />
      </InputWrap>
      <ButtonWrap>
        <button
          type="button"
          onClick={() => {
            setOpen(!open);
            console.log('first');
          }}
        >
          Next
        </button>
        <button type="button" onClick={() => navigate('/')}>
          Back
        </button>
      </ButtonWrap>
      {open && <FormSellStepTwo />}
    </>
  );
};
