import React from 'react';
import { useEffect } from 'react';
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

    return () => {
      window.removeEventListener('keydown', clickKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = evt => {
    if (evt.currentTarget === evt.target) {
      onClose();
    }
  };

  return (
    <>
      <Overlay onClick={handleBackdropClick}>{children}</Overlay>
    </>
  );
};

ModalOverlay.propTypes = {
  onClose: PropTypes.func.isRequired,
};
