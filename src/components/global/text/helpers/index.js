import { marginType, widthType } from 'helpers';
import PropTypes from 'prop-types';
import { colors, fonts, lineHeights } from 'theme/theme';

export const weights = Object.freeze({
  400: 'normal',
  500: 'average',
  600: 'semiBold',
  700: 'bold',
});

export const sizes = Object.freeze({
  12: 'min',
  14: 's',
  16: 'm',
  18: 'l',
  20: 'xl',
  24: 'xxl',
  28: 'xxxl',
  32: 'logo',
  48: 'xxxxl',
});

const fontsEnum = Object.keys(fonts);
const weightEnum = Object.keys(weights);
const sizeEnum = Object.keys(sizes);
const lineHeightEnum = Object.keys(lineHeights);
const textAlignEnum = ['center', 'left', 'right'];
const colorsEnum = Object.keys(colors);

export const propTypeText = {
  family: PropTypes.oneOf(fontsEnum),
  weight: PropTypes.oneOf(weightEnum),
  size: PropTypes.oneOf(sizeEnum),
  lh: PropTypes.oneOf(lineHeightEnum),
  textAlign: PropTypes.oneOf(textAlignEnum),
  mt: marginType,
  mb: marginType,
  ml: marginType,
  mr: marginType,
  m: PropTypes.string,
  width: widthType,
  color: PropTypes.oneOf(colorsEnum),
  hidden: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
};
