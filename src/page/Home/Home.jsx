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

import { useNavigate } from 'react-router';
const Home = () => {
  const navigate = useNavigate();
  return (
    <MaxBox>
      <Background>
        <button type="button" onClick={() => navigate('/addpet/step1')}>
          Button
        </button>
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
