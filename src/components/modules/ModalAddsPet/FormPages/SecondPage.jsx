import { useFormContext } from 'react-hook-form';
import { useState } from 'react';
import { TfiPlus } from 'react-icons/tfi';

import {
  Buttons,
  InputWrap,
  LabelInput,
  InputFile,
  LabelFile,
  Subtitle,
  Textarea,
  PreviewPhoto,
  ButtonDark,
  ButtonLight,
  ErrorTextarea,
  ErrorInputFile,
} from './FormPages.styled';

export const SecondPage = ({ prevStep }) => {
  const [photo, setPhoto] = useState('');
  const [onAddPhoto, setOnAddPhoto] = useState(false);

  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext();

  const handleChange = e => {
    const file = e.currentTarget.files[0];

    console.log(file);

    if (file) {
      setOnAddPhoto(true);
    }

    const reader = new FileReader();
    reader.onload = function (e) {
      setPhoto(e.target.result);
    };
    reader.readAsDataURL(file);
    setValue('myPetImageURL', file);
  };

  return (
    <>
      <Subtitle>Add photo and some comments</Subtitle>
      <InputWrap>
        <LabelFile htmlFor="petPhotoURL">
          {!photo ? (
            <TfiPlus color="rgba(17, 17, 17, 0.6)" size="48px" />
          ) : (
            <PreviewPhoto src={photo} alt="preview" />
          )}
          <InputFile
            {...register('myPetURL')}
            name="petPhotoURL"
            type="file"
            id="petPhotoURL"
            accept="image/png, image/jpeg, image/jpg, image/webp"
            onChange={handleChange}
            required
          />
          {!onAddPhoto && (
            <ErrorInputFile>
              <p>This field is requaired!'</p>
            </ErrorInputFile>
          )}
          {/* {errors.myPetImageURL && <ErrorInputFile>{errors.myPetImageURL.message}</ErrorInputFile>} */}
        </LabelFile>

        <LabelInput htmlFor="comments">
          Comments
          <Textarea {...register('comments')} name="comments" placeholder="Type comments" />
          {errors.comments && <ErrorTextarea>{errors.comments.message}</ErrorTextarea>}
        </LabelInput>
      </InputWrap>

      <Buttons>
        <ButtonDark type="submit">Done</ButtonDark>
        <ButtonLight onClick={prevStep}>Back</ButtonLight>
      </Buttons>
    </>
  );
};
