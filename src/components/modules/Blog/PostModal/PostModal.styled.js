import styled from 'styled-components';
import { GrClose } from 'react-icons/gr';
import { Alert } from '@mui/material';

export const ModalBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
`

export const ModalWrap = styled.div`
    overflow-y: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 416px;
    min-width: 280px;
    width: 87vw;
    max-height: 76.5vh;
    padding: 40px 24px;
    background-color: ${p => p.theme.colors.w};
    border-radius: ${p => p.theme.radii.normal};
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
    
    @media screen and (min-width: 768px) {
      max-width: 608px;
      max-height: 82.5vh;
    }
`

export const FormTitle = styled.p`
  margin-bottom: ${p => p.theme.space[8]}px;
  text-align: center;
  font-size: ${p => p.theme.fontSizes.xxl};
  font-weight: ${p => p.theme.fontWeights.average};
  color: ${p => p.theme.colors.bt};
  
  @media (min-width: 768px) {
    margin-bottom: ${p => p.theme.space[11]}px;
    font-size: 36px;
    font-weight: ${p => p.theme.fontWeights.semiBold};  
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 23px;
  right: 23px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 28px;
  height: 28px;
  
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

export const AlertContainer = styled(Alert)`
  position: fixed;
  top: 16px;
  right: 6vw;
  
  @media (min-width: 768px) {
    top: 32px;
    right: 32px;
  }

  @media (min-width: 1280px) {
    right: 64px;
  }

`
