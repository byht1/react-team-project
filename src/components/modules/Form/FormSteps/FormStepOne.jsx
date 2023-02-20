import { useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Autocomplete, TextField } from '@mui/material';
import { dogBreeds } from '../helpers/dogBreeds';
import { InputWrap, ButtonWrap } from './FormStep.styled';

export const FormSellStepOne = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const navigate = useNavigate();
  return (
    <>
      <InputWrap>
        <label htmlFor="tittle">
          Tittle of ad<span>*</span>:
        </label>
        <input {...register('tittle')} placeholder="Type name" id="tittle" />
        {/* {errors.tittle && <p>{errors.tittle.message}</p>} */}
        <label htmlFor="petName">Name pet:</label>
        <input {...register('name')} placeholder="Type name pet" id="petName" />
        {/* {errors.name && <p>{errors.name.message}</p>} */}
        <label htmlFor="petBirth">Date of birth:</label>
        <input {...register('birthday')} placeholder="Type date of birth" id="petBirth" />
        {/* {errors.birthday && <p>{errors.birthday.message}</p>} */}
        <label htmlFor="petBreed">
          Breed:
          <Autocomplete
            disablePortal
            id="petBreed"
            options={dogBreeds}
            sx={{ width: 300 }}
            freeSolo={true}
            renderInput={params => <TextField {...params} {...register('bread')} />}
          />
        </label>
        {/* {errors.bread && <p>{errors.bread.message}</p>} */}
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
