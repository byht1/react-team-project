import React from 'react';
import data from './data';
import {TitleH2} from 'components/global/text';
import {Box} from 'components/global/Box';
import {Container} from 'components/global/Container';
import {NewsList} from 'components/modules/NewsPage/NewsList';
import {Input, Label} from './NewsPage.styled';


export const NewsPageConponent = () => {
  return (
      <Container pb={200} pt={69}>
          <Box display="flex" flexDirection="column" justifyContent="center">
            <TitleH2 textAlign="center" mb={40}>News</TitleH2>
            <Label>
            <Input type="text" placeholder="Search" />
            </Label>
            
            <NewsList data = {data}/>
          </Box>
        </Container>
    );
};
