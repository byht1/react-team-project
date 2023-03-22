import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { PostForm } from './PostForm';

import {
  ModalBackdrop,
  ModalWrap,
  CloseBtn,
  FormTitle,
  GrCloseIcon,
  AlertContainer as Alert,
} from './PostModal.styled';

const modalRoot = document.querySelector('#modal-root');

export const PostModal = ({ onClose }) => {
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.querySelector('body').classList.add('hidden');

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.querySelector('body').classList.remove('hidden');
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) onClose();
  };

  const getError = error => {
    setError(error);
  };

  const closeAlert = () => {
    setError(null);
  };

  return createPortal(
    <>
      <ModalBackdrop onClick={handleBackdropClick}>
        <ModalWrap>
          <FormTitle>Add post</FormTitle>
          <CloseBtn type="button" onClick={onClose}>
            <GrCloseIcon />
          </CloseBtn>
          <PostForm onClose={onClose} passError={getError} />
        </ModalWrap>
        {error && (
          <Alert severity="error" onClose={closeAlert}>
            Oops, something went wrong
          </Alert>
        )}
      </ModalBackdrop>
    </>,
    modalRoot
  );
};

PostModal.propTypes = {
  onClose: PropTypes.func,
};
