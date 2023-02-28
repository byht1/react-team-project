import styled from 'styled-components';
import { Box } from 'components/global/Box';
import { LightBtn } from 'components/global/button/Button.styled';

export const CardBox = styled(Box)`
  padding-bottom: 12px;

  background-color: ${p => p.theme.colors.w};
  border-radius: ${p => p.theme.radii.cardRadius};

  box-shadow: ${p => p.theme.shadows.s};

  @media (max-width: 767.98px) {
    margin-top: 32px;
  }

  @media (min-width: 768px) {
    width: 336px;
  }

  @media (min-width: 1280px) {
    width: 288px;
  }
`;

export const ThumbWrapper = styled(Box)`
  position: relative;
  height: 288px;
`;

export const ThumbImage = styled('img')`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ThumbTag = styled('span')`
  position: absolute;
  top: 20px;
  left: 0;

  width: 158px;
  padding-top: 7px;
  padding-bottom: 7px;

  text-align: center;
  background-color: ${p => p.theme.colors.tagBg};
  backdrop-filter: blur(2px);

  border-radius: ${p => p.theme.radii.tagRadius};
`;

export const ThumbAddBtn = styled('button')`
  position: absolute;
  top: 12px;
  right: 12px;

  display: flex;

  align-items: center;
  justify-content: center;

  width: 44px;
  height: 44px;

  background-color: ${p => p.theme.colors.tagBg};
  backdrop-filter: blur(2px);

  border-radius: ${p => p.theme.radii.round};
`;

export const ThumbRemoveBtn = styled(ThumbAddBtn)``;

export const ThumbSexIcon = styled('span')`
  position: absolute;
  top: 60px;
  right: 12px;

  display: flex;

  align-items: center;
  justify-content: center;

  width: 44px;
  height: 44px;

  background-color: ${p => p.theme.colors.tagBg};
  backdrop-filter: blur(2px);

  border-radius: ${p => p.theme.radii.round};
`;

export const CardInfoWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  height: 280px;
  margin-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const CardTitle = styled('h3')`
  /* height: 80px; */
  flex-grow: 1;
  overflow-wrap: anywhere;
  overflow-y: hidden;
  font-size: ${p => p.theme.fontSizes.xxxl};
  line-height: ${p => p.theme.lineHeights.heading};
`;

export const CardDescriptionTable = styled('table')`
  margin-top: 20px;
  border-spacing: 0 4px;
  border-collapse: separate;
`;

export const TableBody = styled('tbody')``;

export const CardDescriptionRow = styled('tr')`
  &:first-child {
    border-top: none;
  }
`;

export const CardDescriptionKey = styled('td')``;

export const CardDescriptionValue = styled('td')`
  padding-left: 45px;
  text-align: left;
  overflow-wrap: anywhere;
`;

export const BtnWrapper = styled(Box)`
  margin-top: 20px;
`;

export const ViewMoreBtn = styled(LightBtn)`
  display: block;

  width: ${p => p.theme.size.max};

  padding-top: 8px;
  padding-bottom: 8px;

  color: ${p => p.theme.colors.a};

  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.heading};
`;

export const DeleteBtn = styled(LightBtn)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${p => p.theme.size.max};

  padding-top: 8px;
  padding-bottom: 8px;
  margin-top: 12px;

  color: ${p => p.theme.colors.da};

  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.heading};
`;
