import React from 'react';

import { H2Styled } from './Title.styled';
import { propTypeText } from '../helpers';

export const TitleH2 = ({
  family = 'manrope',
  weight = 700,
  size = 48,
  lh = 'heading',
  hidden,
  children,
  ...props
}) => {
  return (
    <H2Styled
      className={hidden && 'visually-hidden'}
      family={family}
      weight={weight}
      size={size}
      lh={lh}
      {...props}
    >
      {children}
    </H2Styled>
  );
};

TitleH2.propTypes = propTypeText;
