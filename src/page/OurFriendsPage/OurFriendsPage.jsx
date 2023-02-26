import React from 'react';
import { Container } from 'components/global/Container';
import { CardBox, Title, Wrapper } from './OurFriendsPage.styled';
import { useQuery } from '@tanstack/react-query';
import { friendsList } from 'api/friends';
import FriendsCard from '../../components/modules/ourFriendsPage/FriendsCard/FriendsCard';
const OurFriendsPage = () => {
  const { data, isSuccess } = useQuery({
    queryFn: () => friendsList(),
    queryKey: ['friends'],
  });
  const close = () => {};
  return (
    <Container>
      <Wrapper>
        <Title>Our friends</Title>
        <CardBox>
          {isSuccess &&
            data.map(card => {
              return <FriendsCard data={card} key={card._id} close={close} />;
            })}{' '}
        </CardBox>
      </Wrapper>
    </Container>
  );
};

export default OurFriendsPage;
// title
// dropdown
// box paddings
// responsive
