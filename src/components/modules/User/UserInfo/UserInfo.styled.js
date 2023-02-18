import styled from 'styled-components';
import { theme } from 'theme/theme';

export const Form = styled.form`
  display: grid;
  gap: 6px;
  width: 252px;
  grid-template-columns: auto auto auto;
  padding: 34px 12px 42px 8px;
`;

export const Item = styled.label``;

export const Input = styled.input`
  width: 159px;
  height: 24px;
  background: ${theme.colors.w};
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  padding: 4px 18px;
  outline: none;

  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;

  color: ${theme.colors.b};

  &:focus {
    background: ${theme.colors.bg};
    border: 1px solid rgba(245, 146, 86, 0.5);
    border-radius: 40px;
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

  @media (min-width: 768px) {
    margin-left: 8px;
    margin-right: auto;
  }
  @media (min-width: 1280px) {
  }

  &::before {
    content: '';
    margin-right: 8px;
    width: 12.5px;
    height: 12.5px;
    background-color: salmon;
  }
`;

export const Cover = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 280px;
  @media (min-width: 768px) {
  }
  @media (min-width: 1280px) {
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

  /* Черный */

  color: #111111;
`;

export const Icon = styled.span`
  width: 20px;
  height: 20px;
  background-color: salmon;
`;
