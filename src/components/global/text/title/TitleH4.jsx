import React from 'react';

import { H4Styled } from './Title.styled';
import { propTypeText } from '../helpers';

export const TitleH4 = ({
  family = 'manrope',
  weight = 600,
  size = 20,
  lh = 'big',
  hidden,
  children,
  ...props
}) => {
  return (
    <H4Styled
      className={hidden && 'visually-hidden'}
      family={family}
      weight={weight}
      size={size}
      lh={lh}
      {...props}
    >
      {children}
    </H4Styled>
  );
};

TitleH4.propTypes = propTypeText;
