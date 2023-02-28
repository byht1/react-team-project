import { useQuery } from '@tanstack/react-query';
import { getNews } from 'api';
import { useState} from 'react';
import { NewsItem } from './NewsItem';
import { Box } from 'components/global/Box';
import { TitleH2 } from 'components/global/text';

import { InputSearch } from '../../global/InputSearch';
import { List, TitleNews, LoadMore  } from './NewsPage.styled';

export const NewsList = () => {
  const [filter, setFilter] = useState('');
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(6);


  const { isSuccess } = useQuery({
    queryFn: () => getNews(),
    queryKey: ['news'],
    onSuccess: date => {
      setData(date);
    },
  });

const loadMore = async () => {
  setTotal(prevTotal => prevTotal + 6);
};
  const normalizeFilter = filter.toLowerCase();
  const visibleNews = data.filter(todo => todo.title.toLowerCase().includes(normalizeFilter));
  
  return (
    <Box display="flex" flexDirection="column" justifyContent="center">
      <TitleNews textAlign="center">News</TitleNews>
      <InputSearch change={setFilter} value={filter} />
      {isSuccess &&
      <List>
          {visibleNews.length === 0 && (<TitleH2 color="a">Sorry, no news found</TitleH2>)}
          {  visibleNews
                    .sort(function (a, b) {
                      return new Date(b.date) - new Date(a.date);
                    })
                    .slice(0, total)
                    .map(({ title, description, date, url, _id }) => {
                      return (
                        <NewsItem key={_id} title={title} description={description} date={date} url={url} />
                      );
                    })}{' '}  
                    {visibleNews.length >= total &&
                        (<LoadMore onClick={loadMore}>Load More</LoadMore>
                      )}    
      </List>
      }
 
   
    </Box>
  );
};
