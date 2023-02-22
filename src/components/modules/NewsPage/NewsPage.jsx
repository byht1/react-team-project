import React, {useState} from 'react';
// import data from './data';

import {Box} from 'components/global/Box';
import {Container} from 'components/global/Container';
import {NewsList} from 'components/modules/NewsPage/NewsList';

import {Input, Block, Button, IconSearch, NewBlock, TitleNews, IconClose} from './NewsPage.styled';



export const NewsPageConponent = () => {
  const [valueSVG, setValueSvg] = useState(true);
  const [valueInput, setValueInput] = useState(''); 
   const handleChangeSvg = () =>{
    setValueSvg(false);
   }
   const handleChangeSvgNext = () =>{
    setValueSvg(true);
    
   }
   const handleChangeInput = event =>{
    setValueInput(event.target.value)
   }
   console.log(valueInput);
  return (
      <Container pb={100} pt={26}>
        <NewBlock>
        <Box display="flex" flexDirection="column" justifyContent="center">
            <TitleNews textAlign="center">News</TitleNews>
            <Block>
              <label htmlFor="filter">
                <Input type="text" 
                      placeholder="Search" 
                      onChange={handleChangeInput}
                      onFocus={handleChangeSvg}
                      onBlur={handleChangeSvgNext}
                      value = {valueInput}>
                        
                </Input>
              </label>
                <Button>
                  {valueSVG && <IconSearch/>}
                  {!valueSVG && <IconClose/>}
                </Button>
           </Block>
          
            
            <NewsList/>
          </Box>
        </NewBlock>
        </Container>
    );
};
