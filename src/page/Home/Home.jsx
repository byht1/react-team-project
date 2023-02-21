import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Background, Box, Image, MaxBox, HomeTitle } from './Home.styled';
const Home = () => {
  const navigate = useNavigate();
  return (
    // <Background>
    <MaxBox>
      <Background>
        <Box>
          <HomeTitle>Take good care of your small pets</HomeTitle>
          <Image src={require('../../img/girl_mobile.png')}></Image>
          <button type="button" onClick={() => navigate('/addpet/step1')}>
            Button
          </button>
        </Box>
      </Background>
    </MaxBox>
    // </Background>
  );
};

export default Home;
