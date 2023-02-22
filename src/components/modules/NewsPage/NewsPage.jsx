
import React from 'react';
import data from './data';

import { Box } from 'components/global/Box';
import { Container } from 'components/global/Container';
import { NewsList } from 'components/modules/NewsPage/NewsList';
import { Input, Block, Button, Icon, NewBlock, TitleNews } from './NewsPage.styled';

export const NewsPageConponent = () => {
  return (
    <Container pb={100} pt={26}>
      <NewBlock>
        <Box display="flex" flexDirection="column" justifyContent="center">
          <TitleNews textAlign="center">News</TitleNews>
          <Block>
            <label htmlFor="filter">
              <Input type="text" placeholder="Search"></Input>
            </label>
            <Button>
              <Icon />
            </Button>
          </Block>

          <NewsList data={data} />
        </Box>
      </NewBlock>
    </Container>
  );
};
