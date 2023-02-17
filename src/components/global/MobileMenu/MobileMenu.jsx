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
  LoginLink,
  RegisterLink,
  MenuNavigationLink,
  AccentNavigationLink,
  AccountIcon,
  LinksBox,
} from './MobileMenu.styled';
export const MobileMenu = ({ closeMenu }) => {
  let authorized = false;
  return (
    <MobileMenuBox>
      <Container>
        <Box>
          <NavigationLink to="">
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
              <LoginLink to="">
                <AccountIcon />
                Account
              </LoginLink>
            </ButtonsBox>
          ) : (
            <ButtonsBox>
              <LoginLink to="login">Login</LoginLink>
              <RegisterLink to="register">Register</RegisterLink>
            </ButtonsBox>
          )}
          <LinksBox>
            <MenuNavigationLink to="news">News</MenuNavigationLink>
            <AccentNavigationLink to="notices">Find pet</AccentNavigationLink>
            <MenuNavigationLink to="friends">Our friends</MenuNavigationLink>
          </LinksBox>
        </MenuBox>
      </Container>
    </MobileMenuBox>
  );
};
