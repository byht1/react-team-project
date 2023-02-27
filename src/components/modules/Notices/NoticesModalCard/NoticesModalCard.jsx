import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useFavManagement } from 'hooks/useFavManagement';
import { selectFavorites } from 'redux/notices';
import { fetchOneNotice } from 'api';
import { AiFillHeart } from 'react-icons/ai';
// import SimpleSlider from 'components/modules/NoticesSlider/NoticesSlider';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import {
  ThumbTag,
  TableBody,
  CardDescriptionRow,
} from '../NoticesCategoryItem/NoticesCategoryItem.styled';
import {
  ModalCard,
  ModalCardInfoWrapper,
  ModalThumbWrapper,
  ModalThumbImage,
  ModalCardDescriptionTable,
  ModalCardTitle,
  ModalCardDescriptionKey,
  ModalCardDescriptionLink,
  ModalCardDescriptionValue,
  ModalCommentTitle,
  ModalCommentText,
  ModalCardTextWrapper,
  ModalCardBtnWrapper,
  ContactBtn,
  AddToFavBtn,
  RemoveFromFavBtn,
} from './NoticesModalCard.styled';

export const NoticesModalCard = ({ noticeId }) => {
  const favorites = useSelector(selectFavorites);
  const [handleAddToFav, handleRemoveFromFav] = useFavManagement();
  const location = useLocation();
  const pathname = location.pathname.split('/')[2];

  const { data, isSuccess } = useQuery({
    queryFn: () => fetchOneNotice(noticeId),
    queryKey: ['notices', noticeId],
    staleTime: 5 * 60 * 1000,
  });

  return (
    <>
      {isSuccess && (
        <ModalCard>
          <ModalCardInfoWrapper>
            <ModalThumbWrapper>
              <ModalThumbImage
                src={
                  data.imgUrl[0]
                    ? data.imgUrl[0]
                    : 'https://mkantwerpen.be/wp-content/uploads/2020/01/placeholder.png'
                }
              ></ModalThumbImage>
              <ThumbTag>{data.category ? data.category : ''}</ThumbTag>
            </ModalThumbWrapper>
            <ModalCardTextWrapper>
              <ModalCardTitle>{data.title ? data.title : ''}</ModalCardTitle>
              <ModalCardDescriptionTable>
                <TableBody>
                  <CardDescriptionRow>
                    <ModalCardDescriptionKey>Name:</ModalCardDescriptionKey>
                    <ModalCardDescriptionValue>
                      {data.name ? data.name : ''}
                    </ModalCardDescriptionValue>
                  </CardDescriptionRow>
                  <CardDescriptionRow>
                    <ModalCardDescriptionKey>Birthday:</ModalCardDescriptionKey>
                    <ModalCardDescriptionValue>
                      {data.birthday ? data.birthday : ''}
                    </ModalCardDescriptionValue>
                  </CardDescriptionRow>
                  <CardDescriptionRow>
                    <ModalCardDescriptionKey>Breed:</ModalCardDescriptionKey>
                    <ModalCardDescriptionValue>
                      {data.breed ? data.breed : ''}
                    </ModalCardDescriptionValue>
                  </CardDescriptionRow>
                  <CardDescriptionRow>
                    <ModalCardDescriptionKey>Place:</ModalCardDescriptionKey>
                    <ModalCardDescriptionValue>
                      {data.location ? data.location : ''}
                    </ModalCardDescriptionValue>
                  </CardDescriptionRow>
                  <CardDescriptionRow>
                    <ModalCardDescriptionKey>Sex:</ModalCardDescriptionKey>
                    <ModalCardDescriptionValue>
                      {data.sex ? data.sex : ''}
                    </ModalCardDescriptionValue>
                  </CardDescriptionRow>
                  <CardDescriptionRow>
                    <ModalCardDescriptionKey>Email:</ModalCardDescriptionKey>
                    <ModalCardDescriptionValue>
                      <ModalCardDescriptionLink
                        {...(data.owner && { href: `mailto:${data.owner.email}` })}
                      >
                        {data.owner ? data.owner.email : ''}
                      </ModalCardDescriptionLink>
                    </ModalCardDescriptionValue>
                  </CardDescriptionRow>
                  <CardDescriptionRow>
                    <ModalCardDescriptionKey>Phone:</ModalCardDescriptionKey>
                    <ModalCardDescriptionValue>
                      <ModalCardDescriptionLink
                        {...(data.owner && { href: `tel:${data.owner.phone}` })}
                      >
                        {data.owner ? data.owner.phone : ''}
                      </ModalCardDescriptionLink>
                    </ModalCardDescriptionValue>
                  </CardDescriptionRow>
                  {pathname === 'sell' && (
                    <CardDescriptionRow>
                      <ModalCardDescriptionKey>Price:</ModalCardDescriptionKey>
                      <ModalCardDescriptionValue>
                        ${data.price ? data.price : ''}
                      </ModalCardDescriptionValue>
                    </CardDescriptionRow>
                  )}
                </TableBody>
              </ModalCardDescriptionTable>
            </ModalCardTextWrapper>
          </ModalCardInfoWrapper>
          <ModalCommentText>
            <ModalCommentTitle>Comments: </ModalCommentTitle>
            {data.comments ? data.comments : ''}
          </ModalCommentText>
          <ModalCardBtnWrapper>
            {data.owner && (
              <ContactBtn {...(data.owner && { href: `tel:${data.owner.phone}` })}>
                Contact
              </ContactBtn>
            )}
            {!favorites.includes(data._id) ? (
              <AddToFavBtn onClick={() => handleAddToFav(data._id)}>
                Add to
                <AiFillHeart size={'16px'} />
              </AddToFavBtn>
            ) : (
              <RemoveFromFavBtn onClick={() => handleRemoveFromFav(data._id)}>
                Remove <AiFillHeart size={'16px'} />
              </RemoveFromFavBtn>
            )}
          </ModalCardBtnWrapper>
        </ModalCard>
      )}
    </>
  );
};
