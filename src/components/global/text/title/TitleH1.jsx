import React from 'react';
// import PropTypes from 'prop-types';

import { H1Styled } from './Title.styled';
import { propTypeText } from '../helpers';

export const TitleH1 = ({
  family = 'manrope',
  weight = 700,
  size = 32,
  lh = 'haf',
  hidden,
  children,
  ...props
}) => {
  return (
    <H1Styled
      className={hidden && 'visually-hidden'}
      family={family}
      weight={weight}
      size={size}
      lh={lh}
      {...props}
    >
      {children}
    </H1Styled>
  );
};

TitleH1.propTypes = propTypeText;
