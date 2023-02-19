import React from 'react';
import data from './data';
import {TitleH2} from 'components/global/text';
import {Box} from 'components/global/Box';
import {Container} from 'components/global/Container';
import {NewsList} from 'components/modules/NewsPage/NewsList';
import {Input, Block, Button, Icon} from './NewsPage.styled';


export const NewsPageConponent = () => {
  return (
      <Container pb={200} pt={69}>
          <Box display="flex" flexDirection="column" justifyContent="center">
            <TitleH2 textAlign="center" mb={40}>News</TitleH2>
            <Block>
              {/* <SvgContainer> */}
                <Input type="text" placeholder="Search" />
                  <Button>
                    <Icon/>
                  </Button>
              {/* </SvgContainer> */}
             
            </Block>
            
            <NewsList data = {data}/>
          </Box>
        </Container>
    );
};
