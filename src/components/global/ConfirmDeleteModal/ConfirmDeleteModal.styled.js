import styled from 'styled-components';
import { GrClose } from 'react-icons/gr';
import { Button } from '../button';

export const ModalBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
`

export const ModalWrap = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    max-width: 87vw;
    max-height: 50vh;
    padding: 40px 24px 24px;
    background-color: ${p => p.theme.colors.w};
    border-radius: ${p => p.theme.radii.normal};
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
    
    @media screen and (min-width: 768px) {
      max-width: 650px;
      padding: 40px;
    }
`

export const CloseBtn = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
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
`;

export const GrCloseIcon = styled(GrClose)`
  width: 16px;
  @media (min-width: 768px) {
    width: 20px;
  }
`;

export const ButtonsWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 40px;
`

export const ModalButton = styled(Button)`
  width: 180px;
  height: 40px;
`
