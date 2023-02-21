import {
  MenuButton,
  MenuIcon,
  LoginButton,
  HeaderBox,
  LoginIcon,
  Title,
  NavigationLink,
  MobileBox,
  ButtonsBox,
  AccountIcon,
  TabletBox,
  DesktopBox,
  LinksBox,
  MenuNavigationLink,
  AuthLink,
} from './Header.styled';
import { useLocation } from 'react-router-dom';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import { useState, useEffect } from 'react';
import { Container } from '../Container';
import { useSelector } from 'react-redux';
import { getIsLogin } from 'redux/auth';
export const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  useEffect(() => {
    if (menuIsOpen) {
      document.body.style.overflow = 'hidden';
    }
  }, [menuIsOpen]);
  let authorized = useSelector(getIsLogin);
  function openMenu() {
    setMenuIsOpen(!menuIsOpen);
  }
  const location = useLocation();
  console.log(location.pathname);
  console.log(menuIsOpen);
  return (
    <>
      {menuIsOpen ? (
        <MobileMenu closeMenu={openMenu} />
      ) : (
        <Container>
          <HeaderBox>
            <NavigationLink to="/" end>
              <Title>
                pe
                <span>t</span>ly
              </Title>
            </NavigationLink>
            <MobileBox>
              {!(location.pathname === '/login' || location.pathname === '/register') && (
                <LoginButton to="login">
                  <LoginIcon />
                </LoginButton>
              )}

              <TabletBox>
                {authorized ? (
                  <ButtonsBox>
                    <AuthLink to="user">
                      <AccountIcon />
                      Account
                    </AuthLink>
                  </ButtonsBox>
                ) : (
                  <ButtonsBox>
                    <AuthLink to="login">Login</AuthLink>
                    <AuthLink to="register">Registration</AuthLink>
                  </ButtonsBox>
                )}
              </TabletBox>

              <MenuButton type="button" onClick={openMenu}>
                <MenuIcon />
              </MenuButton>
            </MobileBox>
            <DesktopBox>
              <LinksBox>
                <MenuNavigationLink to="news">News</MenuNavigationLink>
                <MenuNavigationLink to="notices">Find pet</MenuNavigationLink>
                <MenuNavigationLink to="friends">Our friends</MenuNavigationLink>
              </LinksBox>
              {authorized ? (
                <ButtonsBox>
                  <AuthLink to="user">
                    <AccountIcon />
                    Account
                  </AuthLink>
                </ButtonsBox>
              ) : (
                <ButtonsBox>
                  <AuthLink to="login">Login</AuthLink>
                  <AuthLink to="register">Registration</AuthLink>
                </ButtonsBox>
              )}
            </DesktopBox>
          </HeaderBox>
        </Container>
      )}
    </>
  );
};
