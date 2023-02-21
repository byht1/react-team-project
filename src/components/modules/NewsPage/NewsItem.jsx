import { Text } from 'components/global/text';
import {TitleH3} from 'components/global/text';
import {Item, NewsMore, Line} from './NewsPage.styled';


export const NewsItem = ({ title, description, date, url }) => {
  return (
    <Item>
    <div>
    <Line/>
     <TitleH3 size={24} lh="heading">
        {title}
     </TitleH3>
    </div>
        <Text weight={400} lh="heading">
          {description}
        </Text>
        <NewsMore>
            <Text weight={400} lh="heading" color="overlay">
              {date}
            </Text>
            <a href={url} target="_blank" rel="noreferrer" >
              <Text color="a">
              Read more
              </Text>
            </a>
        </NewsMore>
        
    </Item>
  );
};