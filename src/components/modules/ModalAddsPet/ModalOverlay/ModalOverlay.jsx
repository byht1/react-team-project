import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay } from './ModalOverlay.styled.js';

export const ModalOverlay = ({ onClose, children }) => {
  useEffect(() => {
    const clickKeyDown = elem => {
      if (elem.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', clickKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', clickKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  const handleBackdropClick = evt => {
    if (evt.currentTarget === evt.target) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>{children}</Overlay>,
    document.querySelector('#modal-root')
  );
};

ModalOverlay.propTypes = {
  onClose: PropTypes.func.isRequired,
};
