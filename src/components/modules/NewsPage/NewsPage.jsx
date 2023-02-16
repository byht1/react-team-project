import React from 'react';
import { IoMdSearch } from 'react-icons/io';
import data from './data';
import {TitleH2} from 'components/global/text';
import {Box} from 'components/global/Box';
import {Container} from 'components/global/Container';
import {NewsList} from 'components/modules/NewsPage/NewsList';
import {Input, Block, Button} from './NewsPage.styled';


export const NewsPageConponent = () => {
  return (
      <Container pb={200} pt={69}>
          <Box display="flex" flexDirection="column" justifyContent="center">
            <TitleH2 textAlign="center" mb={40}>News</TitleH2>
            <Block>
              <Input type="text" placeholder="Search" />
                <Button>
                  <IoMdSearch fill='111111'/>
                </Button>
           </Block>
            
            <NewsList data = {data}/>
          </Box>
        </Container>
    );
};
