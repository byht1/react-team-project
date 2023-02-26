import data from '../data';
import { Box } from 'components/global/Box';
import { Text } from 'components/global/text';
import {Label, Input, ImgComment, Content  } from './PostComment.styled';

export const PostComment = () =>{
    return(
   <Box mt={60} mb={40} >
        <Text weight={600} ml={110} mb={30}>Add comments:</Text>
        <Content>
        <ImgComment src={data.image} alt=""/>
        <Label>
            <Input placeholder="Type comment" />
        </Label>
        </Content>
   </Box>
    )
}