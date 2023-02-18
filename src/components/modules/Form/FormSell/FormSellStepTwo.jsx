// import { useFormContext } from 'react-hook-form';
// import { Text } from 'components/global/text';
// import { Wrap } from './FormSell.styled';
// import { FormWrap } from '../FormBox/FormBox.styled';
// import { InputWrap, ButtonWrap } from './FormSell.styled';
// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';

// export const FormSellStepTwo = () => {
//   const navigate = useNavigate();
//   //   const location = useLocation();

//   //   const [isShown, setIsShown] = useState(true);

//   const { register, setValue, getValues, reset } = useFormContext();
//   return (
//     <>
//       {/* <label for="petName">Tittle of ad</label> */}
//       {/* {isShown && ( */}
//       <FormWrap>
//         <Text>Add pet</Text>
//         <InputWrap>
//           <label htmlFor="location">Location</label>
//           <input {...register('location')} placeholder="Type location" id="location" />
//           <label htmlFor="location">Price</label>
//           <input {...register('price')} placeholder="Type price" />
//           <label htmlFor="location">Load the pet’s image:</label>
//           <input {...register('photo')} type="file" />
//           <label htmlFor="comments">Comments:</label>
//           <textarea {...register('comments')} />
//         </InputWrap>
//         <ButtonWrap>
//           {/* <button type="button" onClick={() => navigate('/addpet/step1')}>
//             Back
//           </button> */}
//           <button type="submit" onClick={() => navigate('/')}>
//             Done
//           </button>
//         </ButtonWrap>
//       </FormWrap>
//       {/* )} */}
//     </>
//   );
// };

import { useFormContext } from 'react-hook-form';
import { Text } from 'components/global/text';
import { Wrap } from './FormSell.styled';
import { FormWrap } from '../FormBox/FormBox.styled';
import { InputWrap, ButtonWrap } from './FormSell.styled';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const FormSellStepTwo = () => {
  const navigate = useNavigate();

  const { register, setValue, getValues, reset } = useFormContext();
  return (
    <>
      {/* <label for="petName">Tittle of ad</label> */}
      <FormWrap>
        <Text>Add pet</Text>
        <InputWrap>
          <label htmlFor="location">Location</label>
          <input {...register('location')} placeholder="Type location" id="location" />
          <label htmlFor="location">Price</label>
          <input {...register('price')} placeholder="Type price" />
          <label htmlFor="location">Load the pet’s image:</label>
          <input {...register('photo')} type="file" />
          <label htmlFor="comments">Comments:</label>
          <textarea {...register('comments')} />
        </InputWrap>
        <ButtonWrap>
          <button type="button" onClick={() => navigate('/addpet/step1')}>
            Back
          </button>
          <button type="submit">Done</button>
        </ButtonWrap>
      </FormWrap>
    </>
  );
};
