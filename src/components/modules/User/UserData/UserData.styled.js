import styled from 'styled-components';
import { theme } from '../../../../theme/theme';

export const Title = styled.h2`
  margin-bottom: 18px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
`;

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
  background: ${theme.colors.wt};
  border-radius: ${theme.radii.normal};
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
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

  &::before {
    content: '';
    margin-right: 5px;
    width: 12.5px;
    height: 12.5px;
    background-color: salmon;
  }
`;

export const Logout = styled.div``;

export const SpanLogout = styled.span`
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

  &::before {
    content: '';
    margin-right: 8px;
    width: 12.5px;
    height: 12.5px;
    background-color: salmon;
  }
`;
