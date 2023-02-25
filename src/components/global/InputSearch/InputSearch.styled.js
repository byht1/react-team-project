import styled from 'styled-components';
import { IoMdSearch, IoMdClose } from 'react-icons/io';

export const Block = styled.div`
  position: relative;
  
  @media (min-width: 768px) {
    margin: 0 auto;
  }
  
`;

export const Button = styled.button`
  position: absolute;
  top: 10px;
  right: 12px;
  width: 20px;
  height: 20px;
  border-radius: ${p => p.theme.radii.round};
  background: ${p => p.theme.colors.trsp};

  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;
export const IconSearch = styled(IoMdSearch)`
  width: 20px;
  height: 20px;
  fill: ${p => p.theme.colors.g};
  transition: var(--transition-color);
  &:hover,
  &:focus {
    fill: ${p => p.theme.colors.a};
  }
  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;
export const IconSearchHover = styled(IoMdSearch)`
  width: 20px;
  height: 20px;
  fill: ${p => p.theme.colors.a};
  transition: var(--transition-color);
  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;
export const IconClose = styled(IoMdClose)`
  width: 20px;
  height: 20px;
  fill: ${p => p.theme.colors.g};
  transition: var(--transition-color);
  &:hover,
  &:focus {
    fill: ${p => p.theme.colors.a};
  }
  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;
export const Input = styled.input`
  width: 100%;
  font-size: ${p => p.theme.fontSizes.m};
  padding: 9px 12px 9px 12px;
  color: #535353;
  border: 2px solid ${p => p.theme.colors.trsp};
  outline: none;
  box-shadow: ${p => p.theme.shadows.s};
  border-radius: ${p => p.theme.radii.inputRadius};
  &::placeholder {
    color: #535353;
  }
  transition: var(----transition-border-color);
 
  &:focus {
    border: 2px solid ${p => p.theme.colors.a};
  }
  @media (min-width: 768px) {
    width: 608px;
    font-size: ${p => p.theme.fontSizes.xl};
    padding: 10px 12px 10px 20px;
    
  }
 
`;