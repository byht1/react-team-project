import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchAllNotices } from 'services/notices';
import { NoticesCategoryItem } from '../NoticesCategoryItem';
import { ListBox } from './NoticesCategoriesList.styled';

export const NoticesCategoriesList = () => {
  const { data, isLoading, isSuccess } = useQuery({
    queryFn: () => fetchAllNotices('all'),
    queryKey: ['notices', 'all'],
  });

  console.log(data);
  return (
    <ListBox>
      {/* {isSuccess && data.map(noticeItem => <NoticesCategoryItem />)} */}
      <NoticesCategoryItem />
      <NoticesCategoryItem />
      <NoticesCategoryItem />
      <NoticesCategoryItem />
      <NoticesCategoryItem />
      <NoticesCategoryItem />
      <NoticesCategoryItem />
      <NoticesCategoryItem />
    </ListBox>
  );
};
