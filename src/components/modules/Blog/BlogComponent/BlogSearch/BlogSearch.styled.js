import styled from 'styled-components';

export const SearchForm = styled('form')`
  position: relative;

  margin-top: ${p => p.theme.space[8]}px;

  @media (min-width: 768px) {
    width: 608px;
    margin-top: ${p => p.theme.space[11]}px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const SearchBar = styled('input')`
  width: ${p => p.theme.size.max};

  padding: ${p => p.theme.space[4]}px;

  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;

  color: ${p => p.theme.colors.white};
  border: ${p => p.theme.borders.normal};
  border-color: transparent;
  border-radius: ${p => p.theme.radii.inputRadius};
  box-shadow: ${p => p.theme.shadows.s};

  outline: none;

  transition: border 250ms linear;

  &:focus {
    border-color: ${p => p.theme.colors.a};
  }

  @media (min-width: 768px) {
    padding-left: ${p => p.theme.space[6]}px;
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
