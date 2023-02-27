import React from 'react';
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
    <MaxBox>
      <Background>
        <Box>
          <HomeTitle>Take good care of your small pets</HomeTitle>
          <MobileImage src={require('../../img/home/girl_mobile.png')} />
          <TabletImage src={require('../../img/home/tablet_girl.png')} />
          <DesktopImage src={require('../../img/home/girl_desk.png')} />
        </Box>
      </Background>
    </MaxBox>
  );
};

export default Home;
