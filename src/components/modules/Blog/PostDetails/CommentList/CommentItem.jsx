import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import PropTypes from 'prop-types';

import { getUserId } from 'redux/auth';
import { convertCreationDateToDateAndTime } from '../../helpers';
import { deleteCommentFromPost } from 'api';

import { Text } from 'components/global/text';
import { Loader } from 'components/global/Loader';
import { ConfirmDeleteModal } from 'components/global/ConfirmDeleteModal';
import { ImgComment, Item, Feedback, CommentText, CommentDate, DeleteButton, TrashBinIc, CommentFooter } from './CommentList.styled';

export const CommentItem = ({ comment }) => {
  const { _id: commentId, text, createdAt, post: postId, author } = comment;
  const { _id: authorId, name, photo } = author;

  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const userId = useSelector(getUserId);
  const client = useQueryClient();

  const isCurrentUserComment = userId === authorId;

  const firstName = name.split(' ')[0];

  const { mutate: deleteUserComment, isLoading } = useMutation({
    mutationKey: ['posts', postId],
    mutationFn: commentId => deleteCommentFromPost(postId, commentId),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['posts'] });
    },
  });

  const handleDelete = () => {
    deleteUserComment(commentId)
  }

  const toggleConfirmModal = () => {
    setShowConfirmModal(!showConfirmModal);
  };

  return (
    <>
      <Item>
          <ImgComment src={photo} alt={name} />
        <Feedback>
          <Text weight="600">
            {firstName}: <CommentText>{text}</CommentText>
          </Text>
          <CommentFooter>
            <CommentDate>{createdAt ? convertCreationDateToDateAndTime(createdAt) : ''}</CommentDate>
            {isCurrentUserComment &&
              <DeleteButton onClick={toggleConfirmModal}>
                <TrashBinIc />
              </DeleteButton>}
          </CommentFooter>
          
        </Feedback>
      </Item>
      {showConfirmModal && (
      <ConfirmDeleteModal
        id={postId}
        onClose={toggleConfirmModal}
        deleteFunction={handleDelete}
      />
    )}
      {isLoading && <Loader />}
    </>
  );
};

CommentItem.propTypes = {
  comment: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    post: PropTypes.string.isRequired,
    author: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired
    })
  })
};

