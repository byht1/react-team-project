
import { NewsItem } from "./NewsItem";
import { List } from './NewsPage.styled';
export const NewsList = ({ data }) => {
  return (
    <List>
      {data.map(({ title, text, day, link }) => {
        return (
          <NewsItem
            title={title}
            text={text}
            day={day}
            link={link}
          />
        );
      })}{' '}
    </List>
  );
};
