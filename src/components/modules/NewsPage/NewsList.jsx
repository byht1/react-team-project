
import { NewsItem } from "./NewsItem";
import { List } from './NewsPage.styled';
export const NewsList = ({ data }) => {
  return (
    <List>
      {data.map(({ title, description, date, url, _id }) => {
        return (
          <NewsItem
            key={_id}
            title={title}
            text={description}
            day={date}
            link={url}
          />
        );
      })}{' '}
    </List>
  );
};
