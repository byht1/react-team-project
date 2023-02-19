import React from 'react';
import { NoticesCategoryItem } from '../NoticesCategoryItem';
import { ListBox } from './NoticesCategoriesList.styled';

export const NoticesCategoriesList = () => {
  return (
    <ListBox>
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
