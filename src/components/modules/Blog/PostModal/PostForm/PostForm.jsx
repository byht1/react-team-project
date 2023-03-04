import React, { useCallback } from 'react';
// import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDropzone } from 'react-dropzone';
import { TfiPlus } from 'react-icons/tfi';

// import { createPost } from 'api/posts';
import { validationSchema } from './validationSchema';

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
// import { useMutation, useQueryClient } from '@tanstack/react-query';
// import { Loader } from 'components/global/Loader';

export const PostForm = ({ onClose }) => {
  // const navigate = useNavigate();
  // const client = useQueryClient();
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

  const files = watch("image");
  const onDrop = useCallback(
    droppedFiles => {
      setValue("image", droppedFiles, { shouldValidate: true });
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

  // const { mutate: create, isLoading } = useMutation({
  //   mutationKey: ['posts'],
  //   mutationFn: createPost,
  //   onSuccess: () => {
  //     client.invalidateQueries({ queryKey: ['posts'] });
  //   },
  // });

  const onSubmit = async data => {
    const formData = new FormData();
    for(const key in data) {
      if (key === 'image') {
          formData.append(key, data[key][0]);
        continue;
      }
      formData.append(key, data[key]);
    }
    // create(formData);

    // console.log("postdata2:", data);

    // await createPost(formData);
    onClose()
    // navigate(`/posts/${post._id}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ContentWrap>
          <TabletFlexWrap>
            <ImageWrap>
              <LabelFile htmlFor="image">
                <InputFileWrap {...getRootProps()} type="file" role="button" aria-label="" id="image">
                  <InputFile {...register("image")} {...getInputProps()} />
                  {acceptedFiles?.length === 0 && <TfiPlus color="rgba(17, 17, 17, 0.6)" size="48px" />}
                  {!!acceptedFiles?.length && (
                    <PreviewPhoto src={URL.createObjectURL(files[0])} alt={files[0].name} />
                  )}
                </InputFileWrap>
                {errors.image && <ImageErrorText>{errors.image.message}</ImageErrorText>}
              </LabelFile>
            </ImageWrap>
            <PostInfoWrap>
              <LabelInput htmlFor="title">
                <LabelName>Title</LabelName>
                <Input {...register('title')} id="title" type="text" placeholder="Type post title" />
                {errors.title && <ErrorInput>{errors.title.message}</ErrorInput>}
              </LabelInput>
              <LabelInput htmlFor="category">
                <LabelName>Category</LabelName>
                <Input {...register('category')} id="category" type="text" placeholder="Type post category" />
                {errors.category && <ErrorInput>{errors.category.message}</ErrorInput>}
              </LabelInput>
            </PostInfoWrap>
          </TabletFlexWrap>
          <LabelInput htmlFor="text">
            <LabelName>Text</LabelName>
            <Textarea {...register('text')} name="text" type="text" placeholder="Type post text" />
            {errors.text && <ErrorInput>{errors.text.message}</ErrorInput>}
          </LabelInput>
        </ContentWrap>
        <ButtonsWrap>
          <PostFormButton theme="dark" type="submit">Done</PostFormButton>
          <PostFormButton onClick={onClose}>Cancel</PostFormButton>
        </ButtonsWrap>
      </form>
    {/* {isLoading && <Loader />} */}
    </>
  );
};

PostForm.propTypes = {
  onClose: PropTypes.func,
}