import React from 'react';
import { useState } from 'react';

import { getPetAge } from 'helpers/getPetAge';
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

export const NoticesCategoryItem = ({ noticesItem }) => {
  const theme = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const petAge = getPetAge(noticesItem.birthday);

  // const openModal = () => {
  //   setIsModalOpen(true);
  // };
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // const closeModal = e => {
  //   if (
  //     e.target.id === 'backdrop' ||
  //     e.target.id === 'modal-close' ||
  //     e.target.id === 'close-svg' ||
  //     e.key === 'Escape'
  //   ) {
  //     setIsModalOpen(false);
  //   }
  // };

  return (
    <>
      <CardBox>
        <ThumbWrapper>
          <ThumbImage
            src={
              noticesItem.imgUrl[0]
                ? noticesItem.imgUrl[0]
                : 'https://mkantwerpen.be/wp-content/uploads/2020/01/placeholder.png'
            }
          ></ThumbImage>
          <ThumbTag>{noticesItem.category}</ThumbTag>
          <ThumbLikeBtn>
            <AiOutlineHeart size={'28px'} color={theme.colors.a} />
          </ThumbLikeBtn>
        </ThumbWrapper>
        <CardInfoWrapper>
          <CardTitle>{noticesItem.title}</CardTitle>
          <CardDescriptionTable>
            <TableBody>
              <CardDescriptionRow>
                <CardDescriptionKey>Breed:</CardDescriptionKey>
                <CardDescriptionValue>{noticesItem.breed}</CardDescriptionValue>
              </CardDescriptionRow>
              <CardDescriptionRow>
                <CardDescriptionKey>Place:</CardDescriptionKey>
                <CardDescriptionValue>{noticesItem.location}</CardDescriptionValue>
              </CardDescriptionRow>
              <CardDescriptionRow>
                <CardDescriptionKey>Age:</CardDescriptionKey>
                <CardDescriptionValue>{petAge}</CardDescriptionValue>
              </CardDescriptionRow>
            </TableBody>
          </CardDescriptionTable>
          <ViewMoreBtn onClick={toggleModal}>Learn more</ViewMoreBtn>
          <DeleteBtn>
            Delete
            <HiTrash size={'20px'} color={'inherit'} style={{ marginLeft: '13px' }} />
          </DeleteBtn>
        </CardInfoWrapper>
      </CardBox>
      {isModalOpen && <NoticeModal noticeId={noticesItem._id} onClose={toggleModal} />}
    </>
  );
};
