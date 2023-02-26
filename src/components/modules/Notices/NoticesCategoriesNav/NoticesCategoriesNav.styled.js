import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Box } from 'components/global/Box';

export const CategoriesBox = styled(Box)`
  padding-top: 28px;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const CategoryBtnWrapper = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 12px;

  @media (min-width: 768px) {
    width: 75%;
  }
`;

export const CategoryBtn = styled(NavLink)`
  display: inline-block;

  padding-left: 28px;
  padding-right: 28px;
  padding-top: 8px;
  padding-bottom: 8px;

  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.heading};

  font-family: ${p => p.theme.fonts.manrope};
  font-weight: ${p => p.theme.fontWeights.average};

  background-color: ${p => p.theme.colors.a};
  color: ${p => p.theme.colors.wt};

  outline: none;

  border: 2px solid ${p => p.theme.colors.a};
  border-radius: ${p => p.theme.radii.buttonRadius};

  transition: var(--transition-bg), var(--transition-color), var(--transition-border-color);

  &:hover,
  &:focus,
  &.active {
    background-color: ${p => p.theme.colors.w};
    color: ${p => p.theme.colors.a};
    cursor: pointer;
  }

  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.xl};
  }
`;

export const FloatingAddPetBtn = styled('span')`
  position: fixed;
  bottom: 40px;
  right: 20px;
  z-index: 999;

  display: flex;
  flex-direction: column-reverse;

  align-items: center;
  justify-content: center;

  width: 80px;
  height: 80px;

  color: ${p => p.theme.colors.w};
  background-color: ${p => p.theme.colors.a};

  font-weight: ${p => p.theme.fontWeights.average};
  font-size: ${p => p.theme.fontSizes.min};

  border-radius: ${p => p.theme.radii.round};

  @media (min-width: 768px) {
    display: none;
  } ;
`;

export const FixedBtnWrapper = styled('button')`
  display: none;

  @media (min-width: 768px) {
    display: flex;

    justify-content: center;
    align-items: center;
    align-content: flex-start;
    flex-wrap: wrap;
  }
  color: ${p => p.theme.colors.b};
`;

export const FixedAddPetText = styled('p')`
  margin-right: 12px;

  font-size: ${p => p.theme.fontSizes.xl};
`;

export const FixedAddPetBtn = styled('span')`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 44px;
  height: 44px;

  color: ${p => p.theme.colors.w};
  background-color: ${p => p.theme.colors.a};

  font-weight: ${p => p.theme.fontWeights.average};
  font-size: ${p => p.theme.fontSizes.min};

  border-radius: ${p => p.theme.radii.round};
`;
