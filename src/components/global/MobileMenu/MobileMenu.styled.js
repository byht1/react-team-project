import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';
import { RiAccountPinCircleFill } from 'react-icons/ri';
export const CloseMenuIcon = styled(IoClose)`
  width: 20px;
  height: 20px;
  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
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
  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
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
  & > span {
    color: ${p => p.theme.colors.a};
  }
`;

export const MobileMenuBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${p => p.theme.colors.bg};
  position: fixed;
  z-index: 10;
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

// export const LoginLink = styled(NavLink)`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 8px 28px;
//   background-color: ${p => p.theme.colors.a};
//   border: 2px solid ${p => p.theme.colors.a};
//   color: ${p => p.theme.colors.w};
//   border-radius: 40px;
//   font-family: 'Manrope';
//   font-weight: 500;
//   font-size: 14px;
//   line-height: 19px;
//   letter-spacing: 0.04em;

//   @media (min-width: 768px) {
//     font-size: 20px;
//     line-height: 27px;
//     padding: 10px 28px;
//   }
//   &:active {
//     background-color: ${p => p.theme.colors.w};
//     border: 2px solid ${p => p.theme.colors.a};
//     color: ${p => p.theme.colors.a};
//   }
// `;
export const AuthLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 28px;
  margin-right: 18px;
  background-color: ${p => p.theme.colors.w};
  color: ${p => p.theme.colors.a};
  border: 2px solid ${p => p.theme.colors.a};
  border-radius: 40px;
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.04em;
  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 27px;
    padding: 10px 28px;
  }
  &:active,
  &.active {
    background-color: ${p => p.theme.colors.a};
    border: 2px solid ${p => p.theme.colors.a};
    color: ${p => p.theme.colors.w};
  }
`;
export const MenuNavigationLink = styled(NavLink)`
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 32px;
  line-height: 1.38;
  letter-spacing: 0.04em;

  color: #181c27;
  &.active {
    text-decoration-line: underline;

    color: ${p => p.theme.colors.a};
  }
  @media (min-width: 768px) {
    font-size: 42px;
    line-height: 1.38;
  }
`;
export const LinksBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;
