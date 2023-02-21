import { Container } from '../Container';
import {
  CloseMenuButton,
  MobileMenuBox,
  Title,
  NavigationLink,
  CloseMenuIcon,
  Box,
  MenuBox,
  ButtonsBox,
  MenuNavigationLink,
  AccountIcon,
  LinksBox,
  AuthLink,
} from './MobileMenu.styled';
export const MobileMenu = ({ closeMenu }) => {
  let authorized = false;
  return (
    <MobileMenuBox>
      <Container>
        <Box>
          <NavigationLink to="/" end onClick={closeMenu}>
            <Title>
              pe
              <span>t</span>ly
            </Title>
          </NavigationLink>
          <CloseMenuButton type="button" onClick={closeMenu}>
            <CloseMenuIcon />
          </CloseMenuButton>
        </Box>
        <MenuBox>
          {authorized ? (
            <ButtonsBox>
              <AuthLink to="user">
                <AccountIcon />
                Account
              </AuthLink>
            </ButtonsBox>
          ) : (
            <ButtonsBox>
              <AuthLink to="login" onClick={closeMenu}>
                Login
              </AuthLink>
              <AuthLink to="register" onClick={closeMenu}>
                Registration
              </AuthLink>
            </ButtonsBox>
          )}
          <LinksBox>
            <MenuNavigationLink to="news" onClick={closeMenu}>
              News
            </MenuNavigationLink>
            <MenuNavigationLink to="notices" onClick={closeMenu}>
              Find pet
            </MenuNavigationLink>
            <MenuNavigationLink to="friends" onClick={closeMenu}>
              Our friends
            </MenuNavigationLink>
          </LinksBox>
        </MenuBox>
      </Container>
    </MobileMenuBox>
  );
};
