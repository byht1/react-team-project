import React from 'react';
import { useEffect } from 'react';

import { IoCloseOutline } from 'react-icons/io5';
import { NoticesModalCard } from '../NoticesModalCard';
import { Backdrop, Modal, CloseModalBtn } from './NoticeModal.styled';

export const NoticeModal = ({ noticeId, closeModal }) => {
  useEffect(() => {
    window.addEventListener('keydown', closeModal);

    document.querySelector('body').classList.add('hidden');

    return () => {
      window.removeEventListener('keydown', closeModal);
      document.querySelector('body').classList.remove('hidden');
    };
  }, [closeModal]);

  return (
    <Backdrop id="backdrop" onClick={closeModal}>
      <Modal>
        <CloseModalBtn id="modal-close" type="button" onClick={closeModal}>
          <IoCloseOutline id="close-svg" size={'28px'} />
        </CloseModalBtn>
        <NoticesModalCard noticeId={noticeId} />
      </Modal>
    </Backdrop>
  );
};
