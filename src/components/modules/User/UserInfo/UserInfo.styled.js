import styled from 'styled-components';
import { theme } from 'theme/theme';
import { ReactComponent as logout } from '../../../../img/User/logout.svg';

export const Form = styled.div`
  display: grid;
  gap: 6px;
  width: 252px;
  grid-template-columns: auto;
  margin-top: 38px;
  margin-bottom: 25px;

  @media (min-width: 768px) {
  }
  @media (min-width: 1280px) {
    width: 100%;
    gap: 4px;
    padding: 32px 0 0 0;
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

export const LogoutIc = styled(logout)`
  cursor: pointer;
  height: 22px;
  width: 22px;
  margin-right: 8px;

  & path {
    stroke: ${theme.colors.w};
  }
`;
