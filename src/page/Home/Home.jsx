import React from 'react';
// import { Container } from '../../components/global/Container/Container';
import {
  Background,
  Box,
  MobileImage,
  MaxBox,
  HomeTitle,
  TabletImage,
  DesktopImage,
} from './Home.styled';
const Home = () => {
  return (
    // <Background>
    <MaxBox>
      <Background>
        <Box>
          <HomeTitle>Take good care of your small pets</HomeTitle>
          <MobileImage src={require('../../img/home/girl_mobile.png')} />
          <TabletImage src={require('../../img/home/tablet_girl.png')} />
          {/* <Container>
            <HomeTitle>Take good care of your small pets</HomeTitle> */}
          <DesktopImage src={require('../../img/home/girl_desk.png')} />
          {/* </Container> */}
        </Box>
      </Background>
    </MaxBox>
    // </Background>
  );
};

export default Home;
