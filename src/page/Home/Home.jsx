import React from 'react';
import { Container } from 'components/global/Container';
import { Text } from 'components/global/text';
import { Background } from './Home.styled';
const Home = () => {
  return (
    <Background>
      <Container>
        <Text>Home Component</Text>
      </Container>
    </Background>
  );
};

export default Home;
