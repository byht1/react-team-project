import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';
import { RiAccountPinCircleFill } from 'react-icons/ri';
// import { MenuIcon } from './Header.styled';
//   background-color: ${p => p.theme.colors.aBg};
// export const colors = Object.freeze({
//   a: 'var(--accent)',
//   bg: 'var(--background)',
//   g: 'var(--grey)',
//   l: 'var(--link)',
//   buttonBg: 'var(--button-bg)',
//   da: 'var(--dark-accent)',
//   w: 'var(--white)',
//   b: 'var(--black)',
//   gradient: 'var(--gradient)',
//   overlay: 'var(--overlay)',
//   wt: 'var(--white-text)',
//   bt: 'var(--black-text)',
//   trsp: 'var(--transparent-color)',
// });
export const CloseMenuIcon = styled(IoClose)`
  width: 20px;
  height: 20px;
`;
export const AccountIcon = styled(RiAccountPinCircleFill)`
  width: 20px;
  height: 20px;
  margin-right: 12px;
`;
export const CloseMenuButton = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  text-transform: uppercase;
  background-color: ${p => p.theme.colors.trsp};
  cursor: pointer;

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
  & > span {
    color: ${p => p.theme.colors.a};
  }
`;

export const MobileMenuBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${p => p.theme.colors.bg};
  position: fixed;
  z-index: 10000;
`;
export const Box = styled.div`
  display: flex;
  padding: 16px 0;
  align-items: center;
  margin-bottom: 46px;
`;
export const ButtonsBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
`;
export const MenuBox = styled.div``;
export const NavigationLink = styled(NavLink)``;

export const LoginLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 28px;
  background-color: ${p => p.theme.colors.a};
  border: 2px solid ${p => p.theme.colors.a};
  color: ${p => p.theme.colors.w};
  border-radius: 40px;
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.04em;
  margin-right: 18px;
`;
export const RegisterLink = styled(NavLink)`
  display: inline-block;
  padding: 8px 28px;
  background-color: ${p => p.theme.colors.w};
  color: ${p => p.theme.colors.a};
  border: 2px solid ${p => p.theme.colors.a};
  border-radius: 40px;
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.04em;
`;
export const MenuNavigationLink = styled(NavLink)`
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 32px;
  line-height: 1.38;
  letter-spacing: 0.04em;

  color: #181c27;
`;
export const AccentNavigationLink = styled(NavLink)`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 1.38;
  letter-spacing: 0.04em;
  text-decoration-line: underline;

  color: ${p => p.theme.colors.a};
`;
export const LinksBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;
