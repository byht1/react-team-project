import styled from 'styled-components';
import { theme } from 'theme/theme';
import { ReactComponent as edit } from '../../../../img/User/edit.svg';
import { ReactComponent as check } from '../../../../img/User/check.svg';

export const Item = styled.label`
  display: grid;
  grid-template-columns: 55px 156px auto;

  @media (min-width: 768px) {
    grid-template-columns: 82px 216px auto;
  }
  @media (min-width: 1280px) {
  }
`;

export const Input = styled.input`
  position: relative;
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
    font-size: 18px;
    line-height: 25px;
    margin-left: 36px;
    width: 216px;
    height: 32px;
    padding: 4px 12px;
  }
  @media (min-width: 1280px) {
  }

  &:focus {
    background: ${theme.colors.bg};
    outline: 1px solid rgba(245, 146, 86, 0.5);
    border-radius: 40px;
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
  background-color: ${theme.colors.bg};
  margin-left: 26px;
  @media (min-width: 768px) {
    margin-left: 42px;
    width: 32px;
    height: 32px;
  }
  @media (min-width: 1280px) {
    margin-left: 42px;
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

export const InputErrMessage = styled.span`
  position: absolute;
  top: 400px;
  width: 280px;
  color: red;
  margin: 0 0 0 -60px;
  z-index: 333;
  font-size: 14px;
  @media (min-width: 768px) {
    width: 100%;
    top: 240px;
    margin: 0 0 0 -80px;
  }
  @media (min-width: 1280px) {
    width: 375px;
    top: 260px;
    margin: 0 0 0 -80px;
  }
`;
