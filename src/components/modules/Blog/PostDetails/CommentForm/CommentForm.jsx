import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { getName, getUserPhoto } from 'redux/auth';
import { Box } from 'components/global/Box';
import { AiOutlineSend } from 'react-icons/ai';

import {
  Button,
  ButtonBlock,
  Content,
  UserImage,
  Input,
  Label,
  ErrorInput,
  FormTitle,
} from './CommentForm.styled';

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

export const CommentForm = ({ postId }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    formState: { isSubmitSuccessful },
  } = useForm({ defaultValues: { comment: '' } });
  const client = useQueryClient();

  const userPhoto = useSelector(getUserPhoto);
  const userName = useSelector(getName);

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
      <FormTitle>Add comments:</FormTitle>
      <Content>
        <UserImage src={userPhoto} alt={userName} />
        <ButtonBlock onSubmit={handleSubmit(onSubmit)}>
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
