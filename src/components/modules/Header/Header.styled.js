import styled from 'styled-components';
import { BiMenu } from 'react-icons/bi';
import { MdLogin } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { RiAccountPinCircleFill } from 'react-icons/ri';
export const DesktopBox = styled.div`
  @media (max-width: 1279.9px) {
    display: none;
  }
  display: flex;
  width: 100%;
`;
export const TabletBox = styled.div`
  @media (max-width: 767.9px) {
    display: none;
  }
`;
export const MobileBox = styled.div`
  display: flex;
  margin-bottom: 0;
  margin-left: auto;
  justify-content: center;
  align-items: center;

  @media (min-width: 1280px) {
    display: none;
  }
`;
export const MenuButton = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  background-color: ${p => p.theme.colors.trsp};
  cursor: pointer;
  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 32px;
    line-height: 1.5;
    margin-left: 20px;
  }
  @media (min-width: 1280px) {
    display: none;
  }
  &:active {
    color: ${p => p.theme.colors.buttonBg};
  }
`;
export const Title = styled.h1`
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 28px;
  line-height: 1.5;
  letter-spacing: 0.07em;

  color: ${p => p.theme.colors.b};

  padding: 0;
  margin: 0;
  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 1.5;
  }
  @media (min-width: 1280px) {
    margin-right: 80px;
    @media (min-width: 768px) {
      padding: 24px 0;
    }
  }
  & > span {
    color: ${p => p.theme.colors.a};
  }
`;
export const MenuIcon = styled(BiMenu)`
  width: 40px;
  height: 30px;
  @media (min-width: 768px) {
    width: 50px;
    height: 40px;
  }
`;
export const LoginButton = styled(NavLink)`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  background-color: ${p => p.theme.colors.trsp};
  color: ${p => p.theme.colors.b};
  cursor: pointer;
  &:active {
    color: ${p => p.theme.colors.a};
  }
  @media (min-width: 768px) {
    display: none;
  }
`;
export const LoginIcon = styled(MdLogin)`
  width: 40px;
  height: 30px;
`;
export const HeaderBox = styled.header`
  display: flex;
  padding: 16px 0;
  align-items: center;
  position: relative;
  z-index: 10;
  @media (min-width: 768px) {
    padding: 24px 0;
  }
  @media (min-width: 1280px) {
    padding: 0;
  }
`;
export const NavigationLink = styled(NavLink)``;
export const ButtonsBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-left: auto;
  }
`;
export const AuthLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 28px;
  background-color: ${p => p.theme.colors.w};
  color: ${p => p.theme.colors.b};
  border: 2px solid ${p => p.theme.colors.a};
  border-radius: 40px;
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.04em;
  &:not(:last-child) {
    margin-right: 18px;
  }

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 27px;
    padding: 10px 28px;
  }
  transition: var(--transition-bg), var(--transition-color), var(--transition-border-color);
  &:active,
  &:hover,
  &:focus,
  &.active {
    background-color: ${p => p.theme.colors.a};
    border: 2px solid ${p => p.theme.colors.a};
    color: ${p => p.theme.colors.w};
  }
`;
export const AccountIcon = styled(RiAccountPinCircleFill)`
  width: 20px;
  height: 20px;
  margin-right: 12px;
  @media (min-width: 768px) {
    width: 30px;
    height: 30px;
    margin-right: 12px;
  }
`;
export const MenuNavigationLink = styled(NavLink)`
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 32px;
  line-height: 1.38;
  letter-spacing: 0.04em;
  &.active {
    text-decoration-line: underline;

    color: ${p => p.theme.colors.a};
  }
  color: #181c27;
  @media (min-width: 768px) {
    font-size: 42px;
    line-height: 1.38;
  }
  @media (min-width: 1280px) {
    font-size: 20px;
    line-height: 1.38;
    &:hover {
      transform: scale(1.05);
    }
    @media (min-width: 768px) {
      padding: 24px 0;
    }
  }
`;
export const LinksBox = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  @media (min-width: 1280px) {
    gap: 80px;
  }
`;
