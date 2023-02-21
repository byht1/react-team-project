import styled from 'styled-components';
import { theme } from 'theme/theme';
import { ReactComponent as edit } from '../../../../img/User/edit.svg';
import { ReactComponent as logout } from '../../../../img/User/logout.svg';
import { ReactComponent as check } from '../../../../img/User/check.svg';

export const Form = styled.form`
  display: grid;
  gap: 6px;
  width: 252px;
  grid-template-columns: auto auto auto;
  margin-top: 38px;
  margin-bottom: 25px;

  @media (min-width: 768px) {
    width: fit-content;
  }
  @media (min-width: 1280px) {
    width: 100%;
    gap: 4px;
    padding: 32px 0 0 0;
  }
`;

export const Item = styled.label``;

export const Input = styled.input`
  scroll-margin-top: 200px;
  overflow-anchor: none;
  width: 159px;
  height: 24px;
  background: ${theme.colors.w};
  border-radius: 40px;
  padding: 4px 18px;
  outline: none;
  border: none;

  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;

  color: ${theme.colors.b};

  @media (min-width: 768px) {
  }
  @media (min-width: 1280px) {
    margin-left: 24px;
    width: 216px;
    height: 32px;
    font-size: 18px;
    line-height: 25px;
    padding: 4px 12px;
  }

  &:focus {
    background: ${theme.colors.bg};
    border: 1px solid rgba(245, 146, 86, 0.5);
    border-radius: 40px;
    border: 1px solid rgba(245, 146, 86, 0.5);
  }
`;

export const SpanLogout = styled.span`
  width: fit-content;
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
  color: rgba(17, 17, 17, 0.6);

  @media (min-width: 768px) {
    margin-left: 0px;
    margin-right: auto;
    margin-top: 18px;
  }
  @media (min-width: 1280px) {
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    margin-top: 24px;
  }

  cursor: pointer;
`;

export const Cover = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 280px;
  @media (min-width: 768px) {
  }
  @media (min-width: 1280px) {
    margin-right: auto;
  }
`;

export const FildName = styled.span`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;

  color: ${theme.colors.b};

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 25px;
  }
  @media (min-width: 1280px) {
  }
`;

export const Icon = styled.a`
  cursor: default;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: #fdf7f2;
  @media (min-width: 768px) {
  }
  @media (min-width: 1280px) {
    margin-left: 16px;
    width: 32px;
    height: 32px;
  }
`;

export const EditIc = styled(edit)`
  cursor: pointer;
  height: 15px;
  width: 15px;

  & path {
    fill: ${theme.colors.a};
  }
  @media (min-width: 768px) {
    height: 22px;
    width: 22px;
  }
  @media (min-width: 1280px) {
  }
`;

export const LogoutIc = styled(logout)`
  cursor: pointer;
  height: 22px;
  width: 22px;
  margin-right: 8px;

  & path {
    stroke: ${theme.colors.w};
  }
`;

export const CheckIc = styled(check)`
  cursor: pointer;
  height: 15px;
  width: 15px;
  @media (min-width: 768px) {
    height: 22px;
    width: 22px;
  }
  @media (min-width: 1280px) {
  }
`;

export const EditIcBlack = styled(edit)`
  height: 15px;
  width: 15px;
  cursor: default;

  & path {
    fill: ${theme.colors.g};
  }
  @media (min-width: 768px) {
    height: 22px;
    width: 22px;
  }
  @media (min-width: 1280px) {
  }
`;
