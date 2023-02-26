import {ImgComment, Item, Feedback} from './PostList.styled';
import { Text } from 'components/global/text';
export const PostItem = ({src, text}) =>{
    return(
        <Item>
            <ImgComment src={src} alt=""/>
            <Feedback>
            <Text>{text}</Text>
            </Feedback>
            
        </Item>
    )
}