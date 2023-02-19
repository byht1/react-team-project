import { useFormContext } from 'react-hook-form';
import { Text } from 'components/global/text';
import { FormWrap } from '../FormBox/FormBox.styled';
import { InputWrap, ButtonWrap } from './FormSell.styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AddIcon } from './AddIcon';
import { RadioTwo } from './FormSell.styled';
import {
  RadioMale,
  RadioFemale,
  LabelMale,
  LabelFemale,
  InputFile,
  ImgLoaded,
} from './FormSell.styled';

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

          <RadioTwo {...register('sex')} type="radio" value="Male" id="Male" checked={male} />
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
          <RadioTwo {...register('sex')} type="radio" value="Female" id="Female" checked={female} />

          <label htmlFor="location">Location</label>
          <input {...register('location')} placeholder="Type location" id="location" />
          {errors.location && <p>{errors.location.message}</p>}
          <label htmlFor="price">Price</label>
          <input {...register('price')} placeholder="Type price" />
          {errors.price && <p>{errors.price.message}</p>}
          <label htmlFor="photo">Load the pet’s image:</label>
          {/* <input {...register('photo')} type="file" /> */}
          {errors.photo && <p>{errors.photo.message}</p>}
          <label htmlFor="comments">Comments:</label>
          <textarea {...register('comments')} />
          {errors.comments && <p>{errors.comments.message}</p>}
          {/* ТЕСТУЮннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннЮ */}
          <InputFile
            color="primary"
            aria-label="upload picture"
            component="label"
            onChange={handleImageChange}
          >
            <input {...register('photo')} hidden accept="image/*" type="file" />
            {img && <ImgLoaded src={img} alt="uploaded" />}
            <AddIcon />
            {/* <SvgIcon strokeWidth={1}>
              <path d="M12 5.25V12H5.25C4.83579 12 4.5 12.3358 4.5 12.75C4.5 13.1642 4.83579 13.5 5.25 13.5H12V20.25C12 20.6642 12.3358 21 12.75 21C13.1642 21 13.5 20.6642 13.5 20.25V13.5H20.25C20.6642 13.5 21 13.1642 21 12.75C21 12.3358 20.6642 12 20.25 12H13.5V5.25C13.5 4.83579 13.1642 4.5 12.75 4.5C12.3358 4.5 12 4.83579 12 5.25Z" />
            </SvgIcon> */}
          </InputFile>
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
