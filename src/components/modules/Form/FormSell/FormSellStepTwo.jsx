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
import { FormWrap } from '../FormBox/FormBox.styled';
import { InputWrap, ButtonWrap } from './FormSell.styled';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Radio, FormControlLabel } from '@mui/material';
import { Male, Female } from '@mui/icons-material';
import { RadioTwo } from './FormSell.styled';
import { RadioMale, RadioFemale, LabelMale, LabelFemale } from './FormSell.styled';
import { LabelMail } from './FormSell.styled';
import StarIcon from '@mui/icons-material/Star';

export const FormSellStepTwo = () => {
  const navigate = useNavigate();
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(true);
  const {
    control,
    register,
    setValue,
    getValues,
    reset,
    watch,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <FormWrap>
        <Text>Add pet</Text>

        <InputWrap>
          <LabelMale
            htmlFor="Male"
            onClick={() => {
              setMale(true);
              setFemale(false);
            }}
            male={male}
          >
            Male
            <RadioMale />
          </LabelMale>

          <RadioTwo {...register('sex')} type="radio" value="Male" id="Male" />
          <LabelFemale
            htmlFor="Female"
            onClick={() => {
              setMale(false);
              setFemale(true);
            }}
            female={female}
          >
            Female
            <RadioFemale />
          </LabelFemale>
          <RadioTwo {...register('sex')} type="radio" value="Female" id="Female" />

          <label htmlFor="location">Location</label>
          <input {...register('location')} placeholder="Type location" id="location" />
          {errors.location && <p>{errors.location.message}</p>}
          <label htmlFor="price">Price</label>
          <input {...register('price')} placeholder="Type price" />
          {errors.price && <p>{errors.price.message}</p>}
          <label htmlFor="photo">Load the pet’s image:</label>
          <input {...register('photo')} type="file" />
          {errors.photo && <p>{errors.photo.message}</p>}
          <label htmlFor="comments">Comments:</label>
          <textarea {...register('comments')} />
          {errors.comments && <p>{errors.comments.message}</p>}
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
