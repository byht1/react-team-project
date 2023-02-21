import { useFormContext } from 'react-hook-form';
import { FormWrap } from '../Form/Form.styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from 'components/global/FormInput/FormInput.styled';
import { Button } from 'components/global/button';
import { AddIcon } from '../helpers/AddIcon';
import { TextareaAutosize } from '@mui/base';
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
import { LabelInput, LabelSex, LabelWrap, Sex, Text, Comments } from './FormStep.styled';

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

  function resize() {
    var el = this;
    setTimeout(function () {
      el.style.cssText = 'height:auto; padding:0';
      el.style.cssText = 'height:' + el.scrollHeight + 'px';
    }, 1);
  }
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
          <LabelSex>
            The sex<span>*</span>:
          </LabelSex>
          <LabelWrap>
            <LabelMale
              htmlFor="Male"
              onClick={() => {
                setMale(true);
                setFemale(false);
              }}
              male={male}
            >
              <RadioMale
                sx={{ width: { xs: '45px', md: '72px' }, height: { xs: '45px', md: '72px' } }}
              />
              <Sex>Male</Sex>
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
              <RadioFemale
                sx={{ width: { xs: '45px', md: '72px' }, height: { xs: '45px', md: '72px' } }}
              />
              <Sex>Female</Sex>
            </LabelFemale>
            <RadioTwo
              {...register('sex')}
              type="radio"
              value="female"
              id="Female"
              checked={female}
            />
          </LabelWrap>
          <LabelInput htmlFor="location">
            <Text>
              Location<span>*</span>:
            </Text>
            <Input {...register('location')} placeholder="Type location" id="location" />
          </LabelInput>

          {/* {errors.location && <p>{errors.location.message}</p>} */}
          {values.category === 'sell' && (
            <>
              <LabelInput htmlFor="price">
                <Text>
                  Price<span>*</span>:
                </Text>
                <Input {...register('price')} placeholder="Type price" />
              </LabelInput>

              {/* {errors.price && <p>{errors.price.message}</p>} */}
            </>
          )}
          <LabelInput htmlFor="photo">
            {' '}
            <Text>Load the pet’s image:</Text>
            {/*  */}
            <InputFile
              color="primary"
              aria-label="upload picture"
              component="label"
              onChange={handleImageChange}
            >
              <input {...register('picture')} hidden accept="image/*" type="file" id="photo" />
              {img && <ImgLoaded src={img} alt="uploaded" />}
              <AddIcon />
            </InputFile>
          </LabelInput>
          {errors.photo && <p>{errors.photo.message}</p>}
          <LabelInput htmlFor="comments">
            <Text>Comments:</Text>
            <Comments {...register('comments')} id="comments" placeholder="Type comment" />
          </LabelInput>

          {/* {errors.comments && <p>{errors.comments.message}</p>} */}
          {/* ТЕСТУЮннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннЮ */}
        </InputWrap>
        <ButtonWrap>
          <ButtonWrap>
            <Button type="button" p="9px 55px" onClick={() => navigate('/addpet/step1')}>
              Back
            </Button>
            <Button theme="dark" p="9px 55px" type="submit">
              Done
            </Button>
          </ButtonWrap>
          {/* <button type="button" onClick={() => navigate('/addpet/step1')}>
            Back
          </button>
          <button type="submit">Done</button> */}
        </ButtonWrap>
      </FormWrap>
    </>
  );
};
