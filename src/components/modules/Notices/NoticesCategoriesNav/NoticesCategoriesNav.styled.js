import styled from 'styled-components';
import { Box } from 'components/global/Box';
import { LightBtn } from 'components/global/button/Button.styled';

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

export const CategoryBtn = styled(LightBtn)`
  display: inline-block;

  padding-top: 8px;
  padding-bottom: 8px;

  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.heading};

  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.xl};
  }
`;

export const FloatingAddPetBtn = styled('button')`
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

export const FixedBtnWrapper = styled(Box)`
  display: none;

  @media (min-width: 768px) {
    display: flex;

    justify-content: center;
    align-items: center;
    align-content: flex-start;
    flex-wrap: wrap;
  }
`;

export const FixedAddPetText = styled('p')`
  margin-right: 12px;

  font-size: ${p => p.theme.fontSizes.xl};
`;

export const FixedAddPetBtn = styled('button')`
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
