import React from 'react';
import { useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { HiTrash } from 'react-icons/hi';
import { useTheme } from 'styled-components';
import { NoticeModal } from '../NoticeModal';
import { ViewMoreBtn, DeleteBtn } from './NoticesCategoryItem.styled';
import {
  CardBox,
  ThumbWrapper,
  ThumbImage,
  ThumbTag,
  ThumbLikeBtn,
  CardInfoWrapper,
  CardTitle,
  CardDescriptionTable,
  TableBody,
  CardDescriptionRow,
  CardDescriptionKey,
  CardDescriptionValue,
} from './NoticesCategoryItem.styled';

export const NoticesCategoryItem = () => {
  const theme = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = e => {
    if (
      e.target.id === 'backdrop' ||
      e.target.id === 'modal-close' ||
      e.target.id === 'close-svg' ||
      e.key === 'Escape'
    ) {
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <CardBox onClick={openModal}>
        <ThumbWrapper>
          <ThumbImage src="https://mkantwerpen.be/wp-content/uploads/2020/01/placeholder.png"></ThumbImage>
          <ThumbTag>in good hands</ThumbTag>
          <ThumbLikeBtn>
            <AiOutlineHeart size={'28px'} color={theme.colors.a} />
          </ThumbLikeBtn>
        </ThumbWrapper>
        <CardInfoWrapper>
          <CardTitle>Сute dog looking for a home</CardTitle>
          <CardDescriptionTable>
            <TableBody>
              <CardDescriptionRow>
                <CardDescriptionKey>Breed:</CardDescriptionKey>
                <CardDescriptionValue>Pomeranian</CardDescriptionValue>
              </CardDescriptionRow>
              <CardDescriptionRow>
                <CardDescriptionKey>Place:</CardDescriptionKey>
                <CardDescriptionValue>Lviv</CardDescriptionValue>
              </CardDescriptionRow>
              <CardDescriptionRow>
                <CardDescriptionKey>Age:</CardDescriptionKey>
                <CardDescriptionValue>one year</CardDescriptionValue>
              </CardDescriptionRow>
            </TableBody>
          </CardDescriptionTable>
          <ViewMoreBtn>Learn more</ViewMoreBtn>
          <DeleteBtn>
            Delete
            <HiTrash size={'20px'} color={'inherit'} style={{ marginLeft: '13px' }} />
          </DeleteBtn>
        </CardInfoWrapper>
      </CardBox>
      {isModalOpen && <NoticeModal closeModal={closeModal} />}
    </>
  );
};
