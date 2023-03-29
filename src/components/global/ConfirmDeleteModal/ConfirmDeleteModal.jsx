import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import { Text } from '../text';
import {
  ButtonsWrap,
  CloseBtn,
  GrCloseIcon,
  ModalBackdrop,
  ModalButton as Button,
  ModalWrap,
} from './ConfirmDeleteModal.styled';

const modalRoot = document.querySelector('#modal-root');

export const ConfirmDeleteModal = ({ id, onClose, deleteFunction, deleteEntityName }) => {
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

  const handleDelete = id => {
    deleteFunction(id);
    onClose();
  };

  return createPortal(
    <ModalBackdrop onClick={handleBackdropClick}>
      <ModalWrap>
        <div style={{ textAlign: 'center' }}>
          {deleteEntityName ? (
            <Text size="24" lh={"heading"}>
              Are you sure to delete
              <b> {deleteEntityName}</b>?
            </Text>
          ) : (
            <Text size="24">Confirm delete</Text>
          )}
        </div>
        <CloseBtn type="button" onClick={onClose}>
          <GrCloseIcon />
        </CloseBtn>
        <ButtonsWrap>
          <Button onClick={onClose}>Cancel</Button>
          <Button theme="dark" onClick={() => handleDelete(id)}>
            Delete
          </Button>
        </ButtonsWrap>
      </ModalWrap>
    </ModalBackdrop>,
    modalRoot
  );
};

ConfirmDeleteModal.propTypes = {
  id: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  deleteFunction: PropTypes.func.isRequired,
  deleteEntityName: PropTypes.string,
};