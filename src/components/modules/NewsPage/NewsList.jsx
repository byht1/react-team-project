import { useQuery } from '@tanstack/react-query';
import { getNews } from 'api';
import { useState } from 'react';
import { NewsItem } from './NewsItem';
import { Box } from 'components/global/Box';
import { defaultNewsList } from './defaultNewsList';
import {InputSearch} from '../../global/InputSearch';
import { Filter } from './Filter';
import { Block, Button, IconSearch, IconClose, List, TitleNews } from './NewsPage.styled';

export const NewsList = () => {
  const [filter, setFilter] = useState('');
  const [data, setData] = useState([]);
  const { isSuccess } = useQuery({
    queryFn: () => getNews(),
    queryKey: ['news'],
    onSuccess: date => {
      setData(date);
    }
  });
 
  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const normalizeFilter = filter.toLowerCase();
  const visibleNews = data.filter(todo => todo.title.toLowerCase().includes(normalizeFilter));

  const handleClear = () => {
    setFilter('');
  };

  return (
    <Box display="flex" flexDirection="column" justifyContent="center">
      <TitleNews textAlign="center">News</TitleNews>
      <InputSearch onChange={changeFilter} value={filter} onClick={handleClear}/>
      <List>
        {isSuccess &&
        visibleNews.sort(function (a, b) {
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
