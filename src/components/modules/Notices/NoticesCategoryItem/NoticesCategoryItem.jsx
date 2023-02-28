import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Rings, ThreeDots } from 'react-loader-spinner';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { BiMaleSign, BiFemaleSign } from 'react-icons/bi';
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
  ThumbSexIcon,
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

  const location = useLocation();
  const pathname = location.pathname.split('/')[2];
  const client = useQueryClient();
  const theme = useTheme();
  const favorites = useSelector(selectFavorites);
  const own = useSelector(selectOwn);

  const { mutate: addToFav, isLoading: addToFavLoading } = useMutation({
    mutationFn: handleAddToFav,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['notices'] });
    },
  });
  const { mutate: removeFromFav, isLoading: removeFromFavLoading } = useMutation({
    mutationFn: handleRemoveFromFav,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['notices'] });
    },
  });
  const { mutate: removeFromOwn, isLoading: removeFromOwnLoading } = useMutation({
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
          {!addToFavLoading &&
            !removeFromFavLoading &&
            (favorites.includes(noticesItem._id) ? (
              <ThumbRemoveBtn onClick={() => removeFromFav(noticesItem._id)}>
                <AiFillHeart size={'28px'} color={theme.colors.a} />
              </ThumbRemoveBtn>
            ) : (
              <ThumbAddBtn onClick={() => addToFav(noticesItem._id)}>
                <AiOutlineHeart size={'28px'} color={theme.colors.a} />
              </ThumbAddBtn>
            ))}
          {(addToFavLoading || removeFromFavLoading) && (
            <Rings
              height="80"
              width="80"
              color={theme.colors.a}
              radius="6"
              visible={true}
              ariaLabel="rings-loading"
              wrapperStyle={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '44px',
                height: '44px',
                backgroundColor: theme.colors.tagBg,
                backdropFilter: 'blur(2px)',
                borderRadius: theme.radii.round,
              }}
            />
          )}
          <ThumbSexIcon>
            {noticesItem.sex === 'male' ? (
              <BiMaleSign size={'28px'} color={'deepskyblue'} />
            ) : (
              <BiFemaleSign size={'28px'} color={'hotpink'} />
            )}
          </ThumbSexIcon>
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
              {pathname === 'sell' && (
                <CardDescriptionRow>
                  <CardDescriptionKey>Price:</CardDescriptionKey>
                  <CardDescriptionValue>${noticesItem.price}</CardDescriptionValue>
                </CardDescriptionRow>
              )}
            </TableBody>
          </CardDescriptionTable>
          <BtnWrapper>
            <ViewMoreBtn onClick={openModal}>Learn more</ViewMoreBtn>
            {!removeFromOwnLoading && own.includes(noticesItem._id) && (
              <DeleteBtn
                onClick={() => {
                  removeFromOwn(noticesItem._id);
                }}
              >
                Delete
                <HiTrash size={'20px'} color={'inherit'} style={{ marginLeft: '13px' }} />
              </DeleteBtn>
            )}
            {removeFromOwnLoading && (
              <ThreeDots
                height="60"
                width="60"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: theme.colors.a,
                }}
                visible={true}
              />
            )}
          </BtnWrapper>
        </CardInfoWrapper>
      </CardBox>
      {isModalOpen && <NoticeModal noticeId={noticesItem._id} closeModal={closeModal} />}
    </>
  );
};
