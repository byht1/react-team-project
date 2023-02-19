import React from 'react';
import { useEffect } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { NoticesModalCard } from '../NoticesModalCard';
import { Backdrop, Modal, CloseModalBtn } from './NoticeModal.styled';

export const NoticeModal = ({ closeModal }) => {
  useEffect(() => {
    window.addEventListener('keydown', closeModal);

    return () => {
      window.removeEventListener('keydown', closeModal);
    };
  }, [closeModal]);

  return (
    <Backdrop id="backdrop" onClick={closeModal}>
      <Modal>
        <CloseModalBtn id="modal-close" type="button" onClick={closeModal}>
          <IoCloseOutline id="close-svg" size={'28px'} />
        </CloseModalBtn>
        <NoticesModalCard />
      </Modal>
    </Backdrop>
  );
};
