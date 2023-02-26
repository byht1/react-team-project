import { Box } from 'components/global/Box';
import example from '../example';
import {PostItem} from './PostItem';
import {List} from './PostList.styled';

export const PostList = () =>{
    return(
        <Box pl={6}>
            <List>
                {example.map(({image,feedback }) => {
                    return(
                    <PostItem src={image} text={feedback}/>)
                })}
            </List>
        </Box>
    )
}