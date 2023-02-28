import React from 'react';
import { Container } from 'components/global/Container';
import {
  Background,
  //   Box,
  //   MobileImage,
  MaxBox,
  HomeTitle,
  AuthLink,
  //   TabletImage,
  //   DesktopImage,
} from './BadRequest.styled';

const BadRequestPage = () => {
  return (
    <MaxBox>
      <Background>
        <Container>
          <HomeTitle>Oooops! The page has been deleted or does not exist</HomeTitle>
          <AuthLink to="notices">Back to home</AuthLink>
        </Container>
      </Background>
    </MaxBox>
  );
};

export default BadRequestPage;
