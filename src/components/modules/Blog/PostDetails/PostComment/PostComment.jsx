import { Box } from 'components/global/Box';
import { Text } from 'components/global/text';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineSend } from 'react-icons/ai';
import data from '../data';
import {
  Button,
  ButtonBlock,
  Content,
  ImgComment,
  Input,
  Label,
  ErrorInput,
} from './PostComment.styled';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const validationComment = {
  minLength: {
    value: 5,
    message: 'Minimum length 5 symbols',
  },
  maxLength: {
    value: 120,
    message: 'Maximum length 120 symbols',
  },
};

export const PostComment = ({ handleSubmitComment }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    formState: { isSubmitSuccessful },
  } = useForm({ defaultValues: { comment: '' } });

  const onSubmit = data => {
    handleSubmitComment(data);
  };

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful, reset]);

  return (
    <Box mt={60} mb={40}>
      <ToastContainer />
      <Text weight={'600'} ml={110} mb={30}>
        Add comments:
      </Text>
      <Content onSubmit={handleSubmit(onSubmit)}>
        <ImgComment src={data.image} alt="" />
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
