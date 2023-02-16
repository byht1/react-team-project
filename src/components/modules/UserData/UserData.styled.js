import styled from 'styled-components';
import { theme } from '../../../theme/theme';

export const ProfileImage = styled.img`
  margin-left: auto;
  margin-right: auto;
  width: 233px;
  height: 233px;
  border-radius: ${theme.radii.round};
`;

export const ImgCover = styled.div``;

export const Div = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  background: ${theme.colors.g};
  border-radius: ${theme.radii.normal};
`;

export const EditPhoto = styled.div``;

export const SpanEditPhoto = styled.span`
  width: fit-content;
  margin-right: 24px;
  margin-left: auto;
  color: ${theme.colors.bt};
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
`;
