import data from '../data';
import { Box } from 'components/global/Box';
import { Text } from 'components/global/text';
import {AiOutlineSend} from 'react-icons/ai'
import {Label, Input, ImgComment, Content, ButtonBlock, Button } from './PostComment.styled';


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
        <Button type='button'> Send <AiOutlineSend size={18}/> </Button>

        </ButtonBlock>
        </Content>
   </Box>
    )
}