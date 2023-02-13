import PropTypes from 'prop-types';

export const marginProps = p => {
  const margin = [];

  if (p.mt) {
    margin.push(marginPropsType(p.mt, 'margin-top'));
  }
  if (p.mr) {
    margin.push(marginPropsType(p.mr, 'margin-right'));
  }
  if (p.mb) {
    margin.push(marginPropsType(p.mb, 'margin-bottom'));
  }
  if (p.ml) {
    margin.push(marginPropsType(p.ml, 'margin-left'));
  }
  if (p.m) {
    margin.push(marginPropsType(p.m));
  }

  return margin.length ? margin.join(';') : '';
};

function marginPropsType(value, position = 'margin') {
  const type = typeof value;

  return type === 'string'
    ? `${position}: ${value};`
    : `${position}: ${value}px;`;
}

export const marginType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
]);