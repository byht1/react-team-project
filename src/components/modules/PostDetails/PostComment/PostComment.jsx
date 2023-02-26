import data from '../data';
import { Box } from 'components/global/Box';
import { Text } from 'components/global/text';
import { AiOutlinePlus } from 'react-icons/ai';
import {Label, Input, ImgComment, Content, ButtonBlock, Button, AddComent  } from './PostComment.styled';


export const PostComment = () =>{
    return(
   <Box mt={60} mb={40} >
        <Text weight={600} ml={110} mb={30}>Add comments:</Text>
        <Content>
        <ImgComment src={data.image} alt=""/>
        <ButtonBlock>
        <Label>
            <Input placeholder="Type comment"></Input>
        </Label>
        <AddComent>
        <Button type='button'>
            <AiOutlinePlus size={'32px'} color={'inherit'}/>
        </Button>
        </AddComent>
        </ButtonBlock>
        </Content>
   </Box>
    )
}