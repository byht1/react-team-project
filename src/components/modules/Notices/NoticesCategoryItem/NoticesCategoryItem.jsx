import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useTheme } from 'styled-components';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { HiTrash } from 'react-icons/hi';
import { selectFavorites, selectOwn } from 'redux/notices';
import { useFavManagement } from 'hooks/useFavManagement';
import { useOwnCardsManagement } from 'hooks/useOwnCardsManagement';
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
  const [handleAddToFav, handleRemoveFromFav] = useFavManagement();
  const handleRemoveFromOwn = useOwnCardsManagement();

  const client = useQueryClient();
  const theme = useTheme();
  const favorites = useSelector(selectFavorites);
  const own = useSelector(selectOwn);

  const { mutate: addToFav } = useMutation({
    mutationFn: handleAddToFav,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['notices'] });
    },
  });
  const { mutate: removeFromFav } = useMutation({
    mutationFn: handleRemoveFromFav,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['notices'] });
    },
  });
  const { mutate: removeFromOwn } = useMutation({
    mutationFn: handleRemoveFromOwn,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['notices'] });
    },
  });

  const petAge = getPetAge(noticesItem.birthday);

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
            <ThumbAddBtn onClick={() => addToFav(noticesItem._id)}>
              <AiOutlineHeart size={'28px'} color={theme.colors.a} />
            </ThumbAddBtn>
          ) : (
            <ThumbRemoveBtn onClick={() => removeFromFav(noticesItem._id)}>
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
            {own.includes(noticesItem._id) && (
              <DeleteBtn
                onClick={() => {
                  removeFromOwn(noticesItem._id);
                }}
              >
                Delete
                <HiTrash size={'20px'} color={'inherit'} style={{ marginLeft: '13px' }} />
              </DeleteBtn>
            )}
          </BtnWrapper>
        </CardInfoWrapper>
      </CardBox>
      {isModalOpen && <NoticeModal noticeId={noticesItem._id} closeModal={closeModal} />}
    </>
  );
};
