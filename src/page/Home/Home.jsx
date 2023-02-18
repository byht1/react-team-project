import React from 'react';
import { Container } from 'components/global/Container';

import { Background, Box, Image, MaxBox, HomeTitle } from './Home.styled';
const Home = () => {
  return (
    // <Background>
    <MaxBox>
      <Background>
        <Box>
          <HomeTitle>Take good care of your small pets</HomeTitle>
          <Image src={require('../../img/girl_mobile.png')}></Image>
        </Box>
      </Background>
    </MaxBox>
    // </Background>
  );
};

export default Home;
