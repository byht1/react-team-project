import { Text } from 'components/global/text';
import {TitleH3} from 'components/global/text';
import {Item, NewsMore, Line, LinkText} from './NewsPage.styled';


export const NewsItem = ({ title, description, date, url }) => {

let text = description.split(' ', 20).join(' ');

  return (
    <Item>
    <div>
    <Line/>
     <TitleH3 size={24} lh="heading">
        {title}
     </TitleH3>
    </div>
        <Text weight={400} lh="heading">
          {text+"..."}
        </Text>
        <NewsMore>
            <Text weight={400} lh="heading" color="overlay">
              {date}
            </Text>
            <a href={url} target="_blank" rel="noreferrer" >
              <LinkText color="a">
              Read more
              </LinkText>
            </a>
        </NewsMore>
        
    </Item>
  );
};