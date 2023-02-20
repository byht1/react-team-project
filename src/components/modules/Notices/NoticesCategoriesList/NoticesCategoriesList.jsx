import React from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchAllNotices } from 'services/notices';
import { NoticesCategoryItem } from '../NoticesCategoryItem';
import { ListBox } from './NoticesCategoriesList.styled';

export const NoticesCategoriesList = () => {
  const location = useLocation();
  const pathname = location.pathname.split('/')[2];
  let categoryName = '';

  switch (pathname) {
    case 'for-free':
      categoryName = 'in good hands';
      break;

    case 'lost-found':
      categoryName = 'lost/found';
      break;

    default:
      categoryName = 'sell';
      break;
  }

  const { data, isLoading, isSuccess } = useQuery({
    queryFn: () => fetchAllNotices(categoryName),
    queryKey: ['notices', 'all', categoryName],
    enabled: !!categoryName,
    staleTime: 5 * 60 * 1000,
  });

  return (
    <ListBox>
      {isSuccess &&
        data.map(noticesItem => {
          return <NoticesCategoryItem key={noticesItem._id} noticesItem={noticesItem} />;
        })}
    </ListBox>
  );
};
