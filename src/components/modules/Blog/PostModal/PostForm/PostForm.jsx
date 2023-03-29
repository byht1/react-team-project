import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';
import { yupResolver } from '@hookform/resolvers/yup';

import { addUserPost } from 'redux/auth';
import { createPost } from 'api/posts';
import { validationSchema } from './validationSchema';

import { TfiPlus } from 'react-icons/tfi';

import {
  ButtonsWrap,
  ContentWrap,
  LabelInput,
  Input,
  LabelName,
  ErrorInput,
  Textarea,
  TabletFlexWrap,
  PostInfoWrap,
  ImageWrap,
  ImageErrorText,
  PostFormButton,
  LabelFile,
  InputFile,
  InputFileWrap,
  PreviewPhoto,
} from './PostForm.styled';
import { Loader } from 'components/global/Loader';

export const PostForm = ({ onClose, passError }) => {
  const client = useQueryClient();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onBlur',
  });

  const files = watch('image');
  const onDrop = useCallback(
    droppedFiles => {
      setValue('image', droppedFiles, { shouldValidate: true });
    },
    [setValue]
  );

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: {
      'image/*': ['.jpeg', '.png', '.webp'],
    },
  });

  const { mutate: create, isLoading } = useMutation({
    mutationKey: ['posts'],
    mutationFn: createPost,
    onSuccess: updateDate => {
      client.invalidateQueries(['posts'], updateDate);
      dispatch(addUserPost(updateDate._id));
      onClose();
    },
    onError: error => {
      passError(error);
    },
    retry: 1,
  });

  const onSubmit = async data => {
    const formData = new FormData();
    for (const key in data) {
      if (key === 'image') {
        formData.append(key, data[key][0]);
        continue;
      }
      formData.append(key, data[key].trim());
    }
    create(formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ContentWrap>
          <TabletFlexWrap>
            <ImageWrap>
              <LabelFile>
                <InputFileWrap
                  {...getRootProps()}
                  type="file"
                  role="button"
                  aria-label="upload photo"
                >
                  <InputFile {...register('image')} {...getInputProps()} />
                  {acceptedFiles?.length === 0 && (
                    <TfiPlus color="rgba(17, 17, 17, 0.6)" size="48px" />
                  )}
                  {!!acceptedFiles?.length && (
                    <PreviewPhoto src={URL.createObjectURL(files[0])} alt={files[0].name} />
                  )}
                </InputFileWrap>
                {errors.image && <ImageErrorText>{errors.image.message}</ImageErrorText>}
              </LabelFile>
            </ImageWrap>
            <PostInfoWrap>
              <LabelInput>
                <LabelName>Title</LabelName>
                <Input {...register('title')} type="text" placeholder="Type post title" />
                {errors.title && <ErrorInput>{errors.title.message}</ErrorInput>}
              </LabelInput>
              <LabelInput>
                <LabelName>Category</LabelName>
                <Input {...register('category')} type="text" placeholder="Type post category" />
                {errors.category && <ErrorInput>{errors.category.message}</ErrorInput>}
              </LabelInput>
            </PostInfoWrap>
          </TabletFlexWrap>
          <LabelInput>
            <LabelName>Text</LabelName>
            <Textarea {...register('text')} name="text" type="text" placeholder="Type post text" />
            {errors.text && <ErrorInput>{errors.text.message}</ErrorInput>}
          </LabelInput>
        </ContentWrap>
        <ButtonsWrap>
          <PostFormButton theme="dark" type="submit">
            Done
          </PostFormButton>
          <PostFormButton onClick={onClose}>Cancel</PostFormButton>
        </ButtonsWrap>
      </form>
      {isLoading && <Loader />}
    </>
  );
};

PostForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  passError: PropTypes.func.isRequired,
};
