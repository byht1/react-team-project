import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { IoCloseOutline } from 'react-icons/io5';

import { AddIcon } from './helpers/AddIcon';
import useWindowDimensions from './helpers/getWidth';

import { CloseModalBtn } from 'components/modules/Notices/NoticeModal/NoticeModal.styled';

import {
  FormWrap,
  RadioMale,
  RadioFemale,
  LabelMale,
  LabelFemale,
  InputFileIcon,
  AdditionalImg,
  ImgWrap,
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
  WrapInputs,
  InputAdd,
  WrapAddedImg,
  AddWrap,
  ImgError,
} from './FormAddNotice.styled';

export const FormStepTwo = () => {
  const navigate = useNavigate();

  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);
  const [img, setImage] = useState([]);

  const handleImageChange = e => {
    const files = e.target.files;
    if (e.target.files && e.target.files[0]) {
      for (const file of files) {
        setImage(prev => [...prev, URL.createObjectURL(file)]);
      }
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
              <RadioMale />
              <Sex>Male</Sex>

              <RadioTwo {...register('sex')} type="radio" value="male" id="Male" />
            </LabelMale>

            <LabelFemale
              htmlFor="Female"
              onClick={() => {
                setMale(false);
                setFemale(true);
              }}
              female={female}
            >
              <RadioFemale />
              <Sex>Female</Sex>
              <RadioTwo {...register('sex')} type="radio" value="female" id="Female" />
            </LabelFemale>
          </LabelWrap>
          <LabelInput htmlFor="location">
            <Text>
              Location<Accent>*</Accent>:
            </Text>
            <InputAdd {...register('location')} placeholder="Type location" id="location" />
            {errors.location && <Error>{errors.location.message}</Error>}
          </LabelInput>
          {values.category === 'sell' && (
            <>
              <LabelInput htmlFor="price">
                <Text>
                  Price<Accent>*</Accent>:
                </Text>
                <InputAdd {...register('price')} placeholder="Type price" />
                {errors.price && <Error>{errors.price.message}</Error>}
              </LabelInput>
            </>
          )}{' '}
          <Text>Load the pet’s image:</Text>
          <LabelInput htmlFor="photo">
            <ImgWrap>
              {img.length !== 0 && (
                <WrapInputs>
                  {img.map((x, i) => (
                    <WrapAddedImg key={i + 2}>
                      <ImgLoaded key={i} src={x} alt="uploaded" />
                    </WrapAddedImg>
                  ))}
                </WrapInputs>
              )}
              <InputFileIcon
                color="primary"
                aria-label="upload picture"
                component="label"
                onChange={handleImageChange}
              >
                <input
                  {...register('images')}
                  hidden
                  accept="image/*"
                  type="file"
                  id="photo"
                  multiple
                />
                {/* <ImgLoaded alt="uploaded" /> */}
                <AddIcon />
              </InputFileIcon>
              {errors.images && (
                <ImgError>
                  <Error>{errors.images.message}</Error>
                </ImgError>
              )}
              <AddWrap>
                <AdditionalImg>
                  <AddIcon />
                </AdditionalImg>
                <AdditionalImg>
                  <AddIcon />
                </AdditionalImg>
              </AddWrap>
            </ImgWrap>
          </LabelInput>
          <LabelInput htmlFor="comments">
            <Text>Comments:</Text>
            <Comments {...register('comments')} id="comments" placeholder="Type comment" />
            {errors.comments && <Error>{errors.comments.message}</Error>}
          </LabelInput>
        </InputWrap>
        {useWindowDimensions().width < 768 ? (
          <ButtonWrap>
            <ButtonAhead color="a" p="9px 55px" type="submit">
              Done
            </ButtonAhead>
            <ButtonBack type="button" onClick={() => navigate(-1)}>
              Back
            </ButtonBack>
          </ButtonWrap>
        ) : (
          <ButtonWrap>
            <ButtonBack type="button" onClick={() => navigate(-1)}>
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
