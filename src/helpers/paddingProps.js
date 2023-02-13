import PropTypes from 'prop-types';

export const paddingProps = p => {
  const padding = [];

  if (p.pt) {
    padding.push(paddingPropsType(p.pt, 'padding-top'));
  }
  if (p.pr) {
    padding.push(paddingPropsType(p.pr, 'padding-right'));
  }
  if (p.pb) {
    padding.push(paddingPropsType(p.pb, 'padding-bottom'));
  }
  if (p.pl) {
    padding.push(paddingPropsType(p.pl, 'padding-left'));
  }
  if (p.p) {
    padding.push(paddingPropsType(p.p));
  }

  return padding.length ? padding.join(';') : '';
};

function paddingPropsType(value, position = 'padding') {
  const type = typeof value;

  return type === 'string'
    ? `${position}: ${value};`
    : `${position}: ${value}px;`;
}

export const paddingType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
]);