import styled from 'styled-components';
import { GrClose } from 'react-icons/gr';

export const FormWrapper = styled.div`
  position: relative;
  width: 280px;
  background-color: ${p => p.theme.colors.w};
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: ${p => p.theme.radii.normal};
  padding: 40px 20px;

  @media (min-width: 768px) {
    width: 608px;
    border-radius: ${p => p.theme.radii.inputRadius};
    padding: 40px 80px;
  }
`;

export const FormTitle = styled.p`
  font-size: ${p => p.theme.fontSizes.xxl};
  line-height: 1.375;
  color: ${p => p.theme.colors.bt};
  margin-bottom: ${p => p.theme.space[8]}px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 36px;
    line-height: ${p => p.theme.lineHeights.heading};
    margin-bottom: ${p => p.theme.space[11]}px;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 23px;
  right: 23px;
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  background-color: ${p => p.theme.colors.bg};
  border-radius: ${p => p.theme.radii.round};
  border: 1px solid transparent;
  transition: var(--transition-border-color);

  &:hover,
  &:focus {
    border: 1px solid ${p => p.theme.colors.a};
  }

  @media (min-width: 768px) {
    top: 24px;
    right: 24px;
    width: 44px;
    height: 44px;
  }
`;

export const GrCloseIcon = styled(GrClose)`
  width: 16px;

  @media (min-width: 768px) {
    width: 20px;
  }
`;
