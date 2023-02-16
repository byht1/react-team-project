import * as React from 'react';
import ReactDOM from 'react-dom';
import FormSell from './FormSell';

export const ModalWindow = () => {
  return ReactDOM.createPortal(<FormSell />, document.querySelector('#modals'));
};
