// import React from 'react';
// import { useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { Overlay } from './ModalOverlay.styled.js';

// export const ModalOverlay = ({ onClose, children }) => {
//   useEffect(() => {
//     const clickKeyDown = elem => {
//       if (elem.code === 'Escape') {
//         onClose();
//       }
//     };

//     window.addEventListener('keydown', clickKeyDown);

//     return () => {
//       window.removeEventListener('keydown', clickKeyDown);
//     };
//   }, [onClose]);

//   const handleBackdropClick = evt => {
//     if (evt.currentTarget === evt.target) {
//       onClose();
//     }
//   };

//   return (
//     <>
//       <Overlay onClick={handleBackdropClick}>{children}</Overlay>
//     </>
//   );
// };

// ModalOverlay.propTypes = {
//   onClose: PropTypes.func.isRequired,
// };

import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay } from './ModalOverlay.styled.js';

const modalRoot = document.querySelector('#modal-root-pets');

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

  return createPortal(<Overlay onClick={handleBackdropClick}>{children}</Overlay>, modalRoot);
};

ModalOverlay.propTypes = {
  onClose: PropTypes.func.isRequired,
};
