import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTheme } from 'styled-components';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { HiTrash } from 'react-icons/hi';
import { addNoticeToFav, removeNoticeFromFav } from 'api';
import { getIsLogin } from 'redux/auth';
import { selectFavorites, addFavorite, removeFavorite } from 'redux/notices';
import { showLoginWarning } from 'helpers/showLoginWarning';
import { getPetAge } from 'helpers/getPetAge';
import { NoticeModal } from '../NoticeModal';
import {
  CardBox,
  ThumbWrapper,
  ThumbImage,
  ThumbTag,
  ThumbAddBtn,
  ThumbRemoveBtn,
  CardInfoWrapper,
  CardTitle,
  CardDescriptionTable,
  TableBody,
  CardDescriptionRow,
  CardDescriptionKey,
  CardDescriptionValue,
  BtnWrapper,
  ViewMoreBtn,
  DeleteBtn,
} from './NoticesCategoryItem.styled';

export const NoticesCategoryItem = ({ noticesItem }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();
  const theme = useTheme();
  const isLoggedIn = useSelector(getIsLogin);
  const favorites = useSelector(selectFavorites);

  const petAge = getPetAge(noticesItem.birthday);

  const handleAddToFav = itemId => {
    if (!isLoggedIn) {
      showLoginWarning();
      return;
    }
    dispatch(addFavorite(itemId));
    addNoticeToFav(itemId);
    return;
  };

  const handleRemoveFromFav = itemId => {
    dispatch(removeFavorite(itemId));
    removeNoticeFromFav(itemId);
  };

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
          {!favorites.includes(noticesItem._id) ? (
            <ThumbAddBtn onClick={() => handleAddToFav(noticesItem._id)}>
              <AiOutlineHeart size={'28px'} color={theme.colors.a} />
            </ThumbAddBtn>
          ) : (
            <ThumbRemoveBtn onClick={() => handleRemoveFromFav(noticesItem._id)}>
              <AiFillHeart size={'28px'} color={theme.colors.a} />
            </ThumbRemoveBtn>
          )}
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
          <BtnWrapper>
            <ViewMoreBtn onClick={openModal}>Learn more</ViewMoreBtn>
            <DeleteBtn>
              Delete
              <HiTrash size={'20px'} color={'inherit'} style={{ marginLeft: '13px' }} />
            </DeleteBtn>
          </BtnWrapper>
        </CardInfoWrapper>
      </CardBox>
      {isModalOpen && <NoticeModal noticeId={noticesItem._id} closeModal={closeModal} />}
    </>
  );
};
