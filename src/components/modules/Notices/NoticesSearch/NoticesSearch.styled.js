import styled from 'styled-components';

export const Title = styled('h2')`
  text-align: center;
  font-size: ${p => p.theme.fontSizes.xxl};

  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.xxxxl};
  }
`;

export const SearchForm = styled('form')`
  position: relative;

  margin-top: 28px;

  @media (min-width: 768px) {
    width: 608px;
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const SearchBar = styled('input')`
  width: ${p => p.theme.size.max};

  padding-top: 9px;
  padding-bottom: 9px;
  padding-left: 12px;
  padding-right: 12px;

  font-family: ${p => p.theme.fonts.manrope};
  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.average};
  line-height: ${p => p.theme.lineHeights.heading};

  color: ${p => p.theme.colors.sf};
  border: 2px solid;
  border-color: transparent;
  border-radius: ${p => p.theme.radii.inputRadius};
  box-shadow: ${p => p.theme.shadows.s};

  outline: none;

  &:focus {
    border-color: ${p => p.theme.colors.a};
  }

  @media (min-width: 768px) {
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    padding-right: 12px;
  }

  &::placeholder {
    color: ${p => p.theme.colors.sf};
  }
`;

export const SearchButton = styled('button')`
  position: absolute;
  bottom: 8px;
  right: 11px;

  background-color: transparent;

  @media (min-width: 768px) {
    right: 15px;
  }
`;
