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
  RegisterLink,
  LoginLink,
  AccountIcon,
  TabletBox,
  DesktopBox,
  LinksBox,
  MenuNavigationLink,
  AccentNavigationLink,
} from './Header.styled';
import { useLocation } from 'react-router-dom';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import { useState } from 'react';
import { Container } from '../Container';
export const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  let authorized = false;
  async function openMenu() {
    try {
      setMenuIsOpen(!menuIsOpen);
      console.log('first');
    } catch (error) {
      console.log(error);
    }
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
            <NavigationLink to="">
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
                    <LoginLink to="user">
                      <AccountIcon />
                      Account
                    </LoginLink>
                  </ButtonsBox>
                ) : (
                  <ButtonsBox>
                    <LoginLink to="login">Login</LoginLink>
                    <RegisterLink to="register">Registration</RegisterLink>
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
                <AccentNavigationLink to="notices">Find pet</AccentNavigationLink>
                <MenuNavigationLink to="friends">Our friends</MenuNavigationLink>
              </LinksBox>
              {authorized ? (
                <ButtonsBox>
                  <LoginLink to="user">
                    <AccountIcon />
                    Account
                  </LoginLink>
                </ButtonsBox>
              ) : (
                <ButtonsBox>
                  <LoginLink to="login">Login</LoginLink>
                  <RegisterLink to="register">Registration</RegisterLink>
                </ButtonsBox>
              )}
            </DesktopBox>
          </HeaderBox>
        </Container>
      )}
    </>
  );
};
