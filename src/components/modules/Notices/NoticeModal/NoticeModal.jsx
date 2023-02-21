import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { IoCloseOutline } from 'react-icons/io5';
import { NoticesModalCard } from '../NoticesModalCard';
import { Backdrop, Modal, CloseModalBtn } from './NoticeModal.styled';

const modalRoot = document.querySelector('#modal-root');

export const NoticeModal = ({ noticeId, onClose }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => { 
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    }
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) onClose();
  };

  return createPortal (
    <Backdrop id="backdrop" onClick={handleBackdropClick}>
      <Modal>
        <CloseModalBtn id="modal-close" type="button" onClick={onClose}>
          <IoCloseOutline id="close-svg" size={'28px'} />
        </CloseModalBtn>
        <NoticesModalCard noticeId={noticeId} />
      </Modal>
    </Backdrop>,
    modalRoot
  );
};
