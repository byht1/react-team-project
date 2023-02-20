import { useFormContext } from 'react-hook-form';
import { FormWrap } from '../Form/Form.styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AddIcon } from '../helpers/AddIcon';
import {
  RadioMale,
  RadioFemale,
  LabelMale,
  LabelFemale,
  InputFile,
  ImgLoaded,
  InputWrap,
  ButtonWrap,
  RadioTwo,
  TextTittle,
} from './FormStep.styled';

export const FormSellStepTwo = () => {
  const navigate = useNavigate();
  const [male, setMale] = useState(true);
  const [female, setFemale] = useState(false);
  const [img, setImage] = useState(null);

  const handleImageChange = e => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };
  const {
    register,
    formState: { errors },
    getValues,
  } = useFormContext();

  const values = getValues();
  console.log(values);
  // useEffect(() => {
  //   const value = getValues();
  //   console.log(value.radio);
  // }, [getValues, values]);
  return (
    <>
      <FormWrap>
        <TextTittle>Add pet</TextTittle>
        <InputWrap>
          <p>
            The sex<span>*</span>:
          </p>
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
          <RadioTwo {...register('sex')} type="radio" value="male" id="Male" checked={male} />
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
          <RadioTwo {...register('sex')} type="radio" value="female" id="Female" checked={female} />
          <label htmlFor="location">
            Location<span>*</span>:
          </label>
          <input {...register('location')} placeholder="Type location" id="location" />
          {errors.location && <p>{errors.location.message}</p>}
          {values.radio === 'sell' && (
            <>
              <label htmlFor="price">
                Price<span>*</span>:
              </label>
              <input {...register('price')} placeholder="Type price" />
              {errors.price && <p>{errors.price.message}</p>}
            </>
          )}
          <label htmlFor="photo">Load the pet’s image:</label>
          <InputFile
            color="primary"
            aria-label="upload picture"
            component="label"
            onChange={handleImageChange}
          >
            <input {...register('picture')} hidden accept="image/*" type="file" />
            {img && <ImgLoaded src={img} alt="uploaded" />}
            <AddIcon />
          </InputFile>
          <input {...register('picture')} type="file" />
          {errors.photo && <p>{errors.photo.message}</p>}
          <label htmlFor="comments">Comments:</label>
          <textarea {...register('comments')} />
          {errors.comments && <p>{errors.comments.message}</p>}
          {/* ТЕСТУЮннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннЮ */}
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
