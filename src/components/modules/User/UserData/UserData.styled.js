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
  @media (min-width: 768px) {
    width: 736px;
  }
  @media (min-width: 1280px) {
    font-size: 28px;
    line-height: 38px;
  }
`;

export const ProfileImage = styled.img`
  margin-left: auto;
  margin-right: auto;
  width: 233px;
  height: 233px;
  border-radius: ${theme.radii.round};
`;

export const Div = styled.div`
  padding: 20px 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.wt};
  border-radius: ${theme.radii.normal};
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    padding: 24px 40px 24px 32px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
  @media (min-width: 1280px) {
    position: relative;
    flex-direction: column;
    padding: 20px 16px 18px 16px;
  }
`;

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

  @media (min-width: 768px) {
    margin-top: 8px;
  }
  @media (min-width: 1280px) {
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 231px;
    margin-right: 16px;
  }

  &::before {
    content: '';
    margin-right: 5px;
    width: 12.5px;
    height: 12.5px;
    background-color: salmon;
  }
  &:hover {
    cursor: pointer;
  }
`;

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

export const Container = styled.div`
  margin: 0px 20px;
  max-width: 280px;
  @media (min-width: 768px) {
    max-width: 736px;
    margin: 0px 32px 0px 0px;
  }
  @media (min-width: 1280px) {
    max-width: 411px;
  }
`;

export const PhotoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 280px;
  @media (min-width: 768px) {
  }
  @media (min-width: 1280px) {
    max-width: fit-content;
  }
`;
