import React from 'react';
import PropTypes from 'prop-types';
import { ContainerBox } from './Container.styled';

export const Container = ({ children, ...props }) => {
  return <ContainerBox {...props}>{children}</ContainerBox>;
};

Container.propTypes = {
  pt: PropTypes.number,
  pb: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
};
