import React from 'react';
import { Container } from 'components/global/Container';
import { NewsList } from 'components/modules/NewsPage/NewsList';
import { NewBlock } from './NewsPage.styled';

export const NewsPageConponent = () => {
  return (
    <Container pb={100} pt={26}>
      <NewBlock>
        <NewsList />
      </NewBlock>
    </Container>
  );
};
