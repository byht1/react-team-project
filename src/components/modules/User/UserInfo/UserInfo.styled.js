import styled from 'styled-components';
import { theme } from 'theme/theme';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 34px 12px 42px 16px;
`;

export const Item = styled.label`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  display: grid;
  grid-template-columns: 56px 159px max-content;
  grid-column-gap: 6px;
  align-items: center;
  margin-bottom: 6px;

  letter-spacing: 0.04em;

  color: ${theme.colors.b};

  &::after {
    content: 'Icon';
    background-color: aquamarine;
  }
`;

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
