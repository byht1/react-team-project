import React from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';
import { FileInput } from './FileInput';

import {
  Buttons,
  InputWrap,
  LabelInput,
  Subtitle,
  Textarea,
  LabelName,
  ButtonDark,
  ButtonLight,
  ErrorTextarea,
  ErrorInputFile,
  LabelFile,
} from './FormPages.styled';

export const SecondPage = ({ prevStep }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Subtitle>Add photo and some comments</Subtitle>
      <InputWrap>
        <LabelFile htmlFor="myPetURL">
          <FileInput name="myPetURL" />
          {errors.myPetURL && <ErrorInputFile>{errors.myPetURL.message}</ErrorInputFile>}
        </LabelFile>
        <LabelInput htmlFor="comments">
          <LabelName>Comments</LabelName>
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

SecondPage.propTypes = {
  prevStep: PropTypes.func,
};
