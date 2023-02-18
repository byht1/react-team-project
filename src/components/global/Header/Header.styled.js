import styled from 'styled-components';
import { BiMenu } from 'react-icons/bi';
import { MdLogin } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

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

export const MenuButton = styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
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
export const MenuIcon = styled(BiMenu)`
  width: 30px;
  height: 20px;
`;
export const LoginButton = styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  background-color: ${p => p.theme.colors.trsp};
  cursor: pointer;
  &:active {
    color: ${p => p.theme.colors.buttonBg};
  }
`;
export const LoginIcon = styled(MdLogin)`
  width: 30px;
  height: 20px;
`;
export const HeaderBox = styled.header`
  display: flex;
  padding: 16px 0;
  align-items: center;
`;
export const NavigationLink = styled(NavLink)`
  color: red;
`;
