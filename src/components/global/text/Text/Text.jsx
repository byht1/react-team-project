import React from 'react';

import { TextStyled } from './Text.styled';
import { propTypeText } from '../helpers';

export const Text = ({
  family = 'manrope',
  weight = 500,
  size = 16,
  lh = 'normal',
  hidden,
  children,
  ...props
}) => {
  return (
    <TextStyled
      className={hidden && 'visually-hidden'}
      family={family}
      weight={weight}
      size={size}
      lh={lh}
      {...props}
    >
      {children}
    </TextStyled>
  );
};

Text.propTypes = propTypeText;
