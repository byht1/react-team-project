import { createSelector } from '@reduxjs/toolkit';

export const selectNotices = state => state.notices.items;
export const selectCategory = state => state.category;
export const selectIsLoading = state => state.notices.isLoading;
export const selectError = state => state.notices.error;

export const selectVisibleNotices = createSelector(
  [selectNotices, selectCategory],
  (notices, category) => {
    const filteredNotices = notices.map(noticeItem => noticeItem.category === category);
    return filteredNotices;
  }
);
