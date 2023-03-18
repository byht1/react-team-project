import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { PostForm } from './PostForm';

import { ModalBackdrop, ModalWrap, CloseBtn, FormTitle, GrCloseIcon } from './PostModal.styled';

const modalRoot = document.querySelector('#modal-root');

export const PostModal = ({ onClose }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) onClose();
  };

  return createPortal(
    <ModalBackdrop onClick={handleBackdropClick}>
      <ModalWrap>
        <FormTitle>Add post</FormTitle>
        <CloseBtn type="button" onClick={onClose}>
          <GrCloseIcon />
        </CloseBtn>
        <PostForm onClose={onClose} />
      </ModalWrap>
    </ModalBackdrop>,
    modalRoot
  );
};

PostModal.propTypes = {
  onClose: PropTypes.func,
};
