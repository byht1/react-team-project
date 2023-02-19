import React from 'react';
import { NoticesSearch } from 'components/modules/Notices/NoticesSearch';
import { NoticesCategoriesNav } from 'components/modules/Notices/NoticesCategoriesNav';
import { NoticesCategoriesList } from 'components/modules/Notices/NoticesCategoriesList';
import { NoticesContainer } from './NoticesPage.styled';

const NoticesPage = () => {
  return (
    <NoticesContainer>
      <NoticesSearch />
      <NoticesCategoriesNav />
      <NoticesCategoriesList />
    </NoticesContainer>
  );
};

export default NoticesPage;
