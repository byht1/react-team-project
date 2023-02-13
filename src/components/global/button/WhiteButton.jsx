import React from 'react';

import { WhiteButtonBox } from './Button.styled';
import { propTypeButton } from './type';

export const WhiteButton = ({ children, type = 'button', fn, ...props }) => {
  return (
    <WhiteButtonBox onClick={fn} type={type} {...props}>
      {children}
    </WhiteButtonBox>
  );
};

WhiteButton.propTypes = propTypeButton;
