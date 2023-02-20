import styled from 'styled-components';
import { Box } from 'components/global/Box';
import { LightBtn } from 'components/global/button/Button.styled';

export const CardBox = styled(Box)`
  padding-bottom: 12px;

  background-color: ${p => p.theme.colors.w};
  border-radius: ${p => p.theme.radii.cardRadius};

  box-shadow: ${p => p.theme.shadows.s};
`;

export const ThumbWrapper = styled(Box)`
  position: relative;
`;

export const ThumbImage = styled('img')``;

export const ThumbTag = styled('span')`
  position: absolute;
  top: 20px;
  left: 0;

  width: 158px;
  padding-top: 7px;
  padding-bottom: 7px;
  padding-left: 20px;

  background-color: ${p => p.theme.colors.tagBg};
  backdrop-filter: blur(2px);

  border-radius: ${p => p.theme.radii.tagRadius};
`;

export const ThumbLikeBtn = styled('button')`
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

export const CardInfoWrapper = styled(Box)`
  margin-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const CardTitle = styled('h3')`
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
`;

export const ViewMoreBtn = styled(LightBtn)`
  display: block;

  width: ${p => p.theme.size.max};

  padding-top: 8px;
  padding-bottom: 8px;
  margin-top: 20px;

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
  margin-top: 20px;

  color: ${p => p.theme.colors.da};

  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.heading};
`;
