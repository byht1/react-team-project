import { getNews } from 'api';
import { useEffect, useState } from 'react';
import { NewsItem } from './NewsItem';
import { Box } from 'components/global/Box';
import { defaultNewsList } from './defaultNewsList';
import { Filter } from './Filter';
import { Block, Button, IconSearch, IconClose, List, TitleNews } from './NewsPage.styled';

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

  const [filter, setFilter] = useState('');
  //  const [valueSVG, setValueSvg] = useState(true);

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const normalizeFilter = filter.toLowerCase();
  const visibleNews = newsList.filter(todo => todo.title.toLowerCase().includes(normalizeFilter));

  const handleClear = () => {
    setFilter('');
  };

  return (
    <Box display="flex" flexDirection="column" justifyContent="center">
      <TitleNews textAlign="center">News</TitleNews>
      <Block>
        <Filter value={filter} onChange={changeFilter} />
        {filter ? (
          <Button type="button" onClick={handleClear}>
            <IconClose />
          </Button>
        ) : (
          <Button>
            <IconSearch />
          </Button>
        )}
      </Block>
      <List>
        {visibleNews
          .sort(function (a, b) {
            return new Date(b.date) - new Date(a.date);
          })
          .slice(0, 6)
          .map(({ title, description, date, url, _id }) => {
            return (
              <NewsItem key={_id} title={title} description={description} date={date} url={url} />
            );
          })}{' '}
      </List>
    </Box>
  );
};
