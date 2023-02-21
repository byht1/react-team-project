import { getNews } from 'api';
import { useEffect, useState } from 'react';
import { NewsItem } from "./NewsItem";
import { List } from './NewsPage.styled';
export const NewsList = ({ data }) => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    async function getNewsList() {
      try {
        const news = await getNews();
        setNewsList(news);
      } catch (error) {
        // setNewsList(defaultNewsList);
      }
    }
    getNewsList();
  }, []);
  return (
    <List>
      {newsList.map(({ title, description, date, url, _id }) => {
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
