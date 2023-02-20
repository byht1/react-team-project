import { Text } from 'components/global/text';
import {TitleH3} from 'components/global/text';
import {Item, NewsMore, Line} from './NewsPage.styled';


export const NewsItem = ({ title, text, day, link }) => {
  return (
    <Item>
    <div>
    <Line/>
     <TitleH3 size={24} lh="heading">
        {title}
     </TitleH3>
    </div>
        <Text weight={400} lh="heading">
          {text}
        </Text>
        <NewsMore>
            <Text weight={400} lh="heading" color="overlay">
              {day}
            </Text>
            <a href={link} target="_blank" rel="noreferrer" >
              <Text color="a">
              Read more
              </Text>
            </a>
        </NewsMore>
        
    </Item>
  );
};