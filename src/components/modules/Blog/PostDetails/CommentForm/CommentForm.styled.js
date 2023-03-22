import styled from 'styled-components';
import { Text } from 'components/global/text';

export const FormTitle = styled(Text)`
  font-weight: ${p => p.theme.fontWeights.semiBold};
  margin-bottom: 32px;
  @media screen and (min-width: 768px) {
    gap: 16px;
    margin-left: 76px;
  }
  @media screen and (min-width: 1280px) {
    gap: 32px;
    margin-left: 112px;
  }
`

export const Content = styled.div`
  display: flex;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }

  @media screen and (min-width: 1280px) {
    gap: 32px;
  }
`;

export const UserImage = styled.img`
  flex-grow: 0;
  width: 40px;
  height: 40px;
  border-radius: ${p => p.theme.radii.round};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  object-fit: cover;
  @media screen and (min-width: 768px) {
    width: 60px;
    height: 60px;
  }
  @media screen and (min-width: 1280px) {
    width: 80px;
    height: 80px;
  }
`;

export const ButtonBlock = styled.form`
  position: relative;
  width: 100%;
  display: flex;
  gap: 30px;
  flex-direction: column;
  align-items: flex-end;
`;

export const Label = styled.label`
  position: relative;
  width: 100%;
`;

export const Input = styled.textarea`
  width: 100%;
  height: 200px;

  font-size: ${p => p.theme.fontSizes.m};
  /* padding: 19px 32px 19px 32px; */
  padding: 16px;
  border: 2px solid ${p => p.theme.colors.trsp};
  outline: none;
  resize: none;
  box-shadow: ${p => p.theme.shadows.s};
  border-radius: ${p => p.theme.radii.normal};

  transition: var(--transition-border-color);

  &:focus {
    border: 2px solid ${p => p.theme.colors.a};
  }
  @media (min-width: 768px) {
    padding: 24px;
    font-size: ${p => p.theme.fontSizes.xl};
  }
`;

export const Button = styled.button`
  position: absolute;
  right: 50px;
  bottom: 30px;
  display: block;
  display: flex;
  align-items: center;
  font-size: 18px;
  gap: 5px;
  padding: 5px 15px;
  border-radius: ${p => p.theme.radii.buttonRadius};

  color: ${p => p.theme.colors.a};
  background-color: ${p => p.theme.colors.w};

  font-weight: ${p => p.theme.fontWeights.semiBold};
  border: 2px solid ${p => p.theme.colors.a};

  transition: var(--transition-border-color);
  &:hover {
    color: ${p => p.theme.colors.w};
    background-color: ${p => p.theme.colors.a};
  }
  @media (min-width: 768px) {
    padding: 10px 40px;
  }
`;

export const ErrorInput = styled.div`
  position: absolute;
  color: red;
  font-size: 10px;
  top: -20px;

  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.s};
  }
`;
