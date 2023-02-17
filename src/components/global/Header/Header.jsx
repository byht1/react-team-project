import {
  MenuButton,
  MenuIcon,
  LoginButton,
  HeaderBox,
  LoginIcon,
  Title,
  NavigationLink,
} from './Header.styled';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import { useState, useEffect } from 'react';
import { Container } from '../Container';
import { BiMenu } from 'react-icons/bi';
import { IoClose } from 'react-icons/io5';
export const Header = ({}) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

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
            <LoginButton type="button">
              <LoginIcon />
            </LoginButton>
            <MenuButton type="button" onClick={openMenu}>
              <MenuIcon />
            </MenuButton>
          </HeaderBox>
        </Container>
      )}
    </>
  );
};
