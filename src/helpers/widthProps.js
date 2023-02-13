import PropTypes from 'prop-types';

export const widthTypeOf = value => {
  const type = typeof value;

  return type === 'string' ? `width: ${value};` : `width: ${value}px;`;
};

export const widthType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
]);
