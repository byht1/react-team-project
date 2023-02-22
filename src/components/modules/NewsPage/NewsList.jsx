import { getNews } from 'api';
import { useEffect, useState } from 'react';
import { NewsItem } from "./NewsItem";
import { defaultNewsList } from './defaultNewsList';
import { List } from './NewsPage.styled';
export const NewsList = () => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    async function getNewsList() {
      try {
        const news = await getNews();
        setNewsList(news);
      } catch (error) {
        setNewsList(defaultNewsList);
      }
    }
    getNewsList();
  }, []);
  
  return (
    <List>
      {newsList.sort(function(a,b){return new Date(b.date) - new Date(a.date)})
      .slice(0, 6).map(({ title, description, date, url, _id }) => {
        return (
          <NewsItem
            key={_id}
            title={title}
            description={description}
            date={date}
            url={url}
          />
        );
      })}{' '}
    </List>
  );
};
