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
} from './Header.styled';
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
              <LoginButton type="button">
                <LoginIcon />
              </LoginButton>
              <TabletBox>
                {authorized ? (
                  <ButtonsBox>
                    <LoginLink to="">
                      <AccountIcon />
                      Account
                    </LoginLink>
                  </ButtonsBox>
                ) : (
                  <ButtonsBox>
                    <LoginLink to="login" onClick={openMenu}>
                      Login
                    </LoginLink>
                    <RegisterLink to="register" onClick={openMenu}>
                      Registration
                    </RegisterLink>
                  </ButtonsBox>
                )}
              </TabletBox>

              <MenuButton type="button" onClick={openMenu}>
                <MenuIcon />
              </MenuButton>
            </MobileBox>
          </HeaderBox>
        </Container>
      )}
    </>
  );
};
