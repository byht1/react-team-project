import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { IoCloseOutline } from 'react-icons/io5';

import { AddIcon } from './helpers/AddIcon';
import useWindowDimensions from './helpers/getWidth';
import { Input } from 'components/global/FormInput/FormInput.styled';

import { CloseModalBtn } from 'components/modules/Notices/NoticeModal/NoticeModal.styled';
import {
  FormWrap,
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
  ButtonAhead,
  ButtonBack,
  Accent,
  Error,
  LabelInput,
  LabelSex,
  LabelWrap,
  Sex,
  Text,
  Comments,
  ErrorSex,
} from './FormAddNotice.styled';

export const FormStepTwo = () => {
  const navigate = useNavigate();
  const [male, setMale] = useState(false);
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
  // console.log(values);
  // useEffect(() => {
  //   const value = getValues();
  //   console.log(value.radio);
  // }, [getValues, values]);
  // console.log(errors.sex.message);
  console.log(errors);
  return (
    <>
      <FormWrap>
        <TextTittle>Add pet</TextTittle>
        <CloseModalBtn id="modal-close" type="button" onClick={() => navigate('/')}>
          <IoCloseOutline id="close-svg" size={'28px'} />
        </CloseModalBtn>
        {errors.sex && <ErrorSex>{errors.sex.message}</ErrorSex>}
        <InputWrap>
          <LabelSex>
            The sex<Accent>*</Accent>:
          </LabelSex>
          <LabelWrap>
            <LabelMale
              htmlFor="Male"
              onClick={e => {
                setMale(true);
                setFemale(false);
              }}
              value="male"
              male={male}
            >
              <RadioMale
              // sx={{ width: { xs: '45px', md: '72px' }, height: { xs: '45px', md: '72px' } }}
              />
              <Sex>Male</Sex>

              <RadioTwo {...register('sex')} type="radio" value="male" id="Male" />
            </LabelMale>
            {/* {errors.sex && <Error>Its </Error>} */}

            <LabelFemale
              htmlFor="Female"
              onClick={() => {
                setMale(false);
                setFemale(true);
              }}
              female={female}
            >
              <RadioFemale
              // sx={{ width: { xs: '45px', md: '72px' }, height: { xs: '45px', md: '72px' } }}
              />
              <Sex>Female</Sex>
              <RadioTwo {...register('sex')} type="radio" value="female" id="Female" />
            </LabelFemale>
          </LabelWrap>

          <LabelInput htmlFor="location">
            <Text>
              Location<Accent>*</Accent>:
            </Text>
            <Input {...register('location')} placeholder="Type location" id="location" />
            {errors.location && <Error>{errors.location.message}</Error>}
          </LabelInput>

          {values.category === 'sell' && (
            <>
              <LabelInput htmlFor="price">
                <Text>
                  Price<Accent>*</Accent>:
                </Text>
                <Input {...register('price')} placeholder="Type price" />
                {errors.price && <Error>{errors.price.message}</Error>}
              </LabelInput>
            </>
          )}
          <LabelInput htmlFor="photo">
            {' '}
            <Text>Load the pet’s image:</Text>
            <InputFile
              color="primary"
              aria-label="upload picture"
              component="label"
              onChange={handleImageChange}
            >
              <input {...register('images')} hidden accept="image/*" type="file" id="photo" />
              {img && <ImgLoaded src={img} alt="uploaded" />}
              <AddIcon />
            </InputFile>
            {errors.images && <Error>{errors.images.message}</Error>}
          </LabelInput>
          <LabelInput htmlFor="comments">
            <Text>Comments:</Text>
            <Comments {...register('comments')} id="comments" placeholder="Type comment" />
            {errors.comments && <Error>{errors.comments.message}</Error>}
          </LabelInput>

          {/* ТЕСТУЮннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннЮ */}
        </InputWrap>
        {useWindowDimensions().width < 768 ? (
          <ButtonWrap>
            <ButtonAhead color="a" p="9px 55px" type="submit">
              Done
            </ButtonAhead>
            <ButtonBack type="button" onClick={() => navigate('/addpet/step1')}>
              Back
            </ButtonBack>
          </ButtonWrap>
        ) : (
          <ButtonWrap>
            <ButtonBack type="button" onClick={() => navigate('/addpet/step1')}>
              Back
            </ButtonBack>
            <ButtonAhead color="a" p="9px 55px" type="submit">
              Done
            </ButtonAhead>
          </ButtonWrap>
        )}
      </FormWrap>
    </>
  );
};
