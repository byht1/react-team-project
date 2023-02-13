import React from 'react';

import { H3Styled } from './Title.styled';
import { propTypeText } from '../helpers';

export const TitleH3 = ({
  family = 'manrope',
  weight = 700,
  size = 28,
  lh = 'heading',
  hidden,
  children,
  ...props
}) => {
  return (
    <H3Styled
      className={hidden && 'visually-hidden'}
      family={family}
      weight={weight}
      size={size}
      lh={lh}
      {...props}
    >
      {children}
    </H3Styled>
  );
};

TitleH3.propTypes = propTypeText;
