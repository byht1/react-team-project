import { Box } from 'components/global/Box';
import { Text } from 'components/global/text';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineSend } from 'react-icons/ai';
import { getUserPhoto } from 'redux/auth';
import { useSelector } from 'react-redux';
import {
  Button,
  ButtonBlock,
  Content,
  ImgComment,
  Input,
  Label,
  ErrorInput,
} from './PostComment.styled';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addNewCommentToPost } from 'api';

const validationComment = {
  minLength: {
    value: 2,
    message: 'Minimum length 2 symbols',
  },
  maxLength: {
    value: 200,
    message: 'Maximum length 200 symbols',
  },
};

export const PostComment = ({ postId }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    formState: { isSubmitSuccessful },
  } = useForm({ defaultValues: { comment: '' } });
  const client = useQueryClient();

  const userPhoto = useSelector(getUserPhoto);

  const { mutate: addComment } = useMutation({
    mutationKey: ['posts', postId],
    mutationFn: data => addNewCommentToPost(postId, data),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['posts', postId] });
      client.invalidateQueries({ queryKey: ['posts'] });
    },
  });

  const onSubmit = async data => {
    await addComment({ text: data.comment });
  };

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful, reset]);

  return (
    <Box mt={60} mb={40}>
      <Text weight={'600'} ml={110} mb={30}>
        Add comments:
      </Text>
      <Content onSubmit={handleSubmit(onSubmit)}>
        <ImgComment src={userPhoto} alt="" />
        <ButtonBlock>
          <Label>
            <Input placeholder="Type comment" {...register('comment', validationComment)}></Input>
            {errors.comment && <ErrorInput>{errors.comment.message}</ErrorInput>}
          </Label>
          <Button type="submit">
            Send <AiOutlineSend size={18} />
          </Button>
        </ButtonBlock>
      </Content>
    </Box>
  );
};
