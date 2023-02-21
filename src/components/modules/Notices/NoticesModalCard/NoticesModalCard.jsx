import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchOneNotice } from 'services/notices';
import { AiFillHeart } from 'react-icons/ai';
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
  ModalCardDescriptionValue,
  ModalCommentTitle,
  ModalCommentText,
  ModalCardTextWrapper,
  ModalCardBtnWrapper,
  ContactBtn,
  AddToFavBtn,
} from './NoticesModalCard.styled';

export const NoticesModalCard = ({ noticeId }) => {
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
                      {data.owner ? data.owner.email : ''}
                    </ModalCardDescriptionValue>
                  </CardDescriptionRow>
                  <CardDescriptionRow>
                    <ModalCardDescriptionKey>Phone:</ModalCardDescriptionKey>
                    <ModalCardDescriptionValue>
                      {data.owner ? data.owner.phone : ''}
                    </ModalCardDescriptionValue>
                  </CardDescriptionRow>
                  <CardDescriptionRow>
                    <ModalCardDescriptionKey>Price:</ModalCardDescriptionKey>
                    <ModalCardDescriptionValue>
                      ${data.price ? data.price : ''}
                    </ModalCardDescriptionValue>
                  </CardDescriptionRow>
                </TableBody>
              </ModalCardDescriptionTable>
            </ModalCardTextWrapper>
          </ModalCardInfoWrapper>
          <ModalCommentText>
            <ModalCommentTitle>Comments: </ModalCommentTitle>
            {data.comments ? data.comments : ''}
          </ModalCommentText>
          <ModalCardBtnWrapper>
            {/* <ContactBtn {...(data.owner && { href: `tel:${data.owner.phone}` })}>
              Contact
            </ContactBtn> */}
            {data.owner && (
              <ContactBtn {...(data.owner && { href: `tel:${data.owner.phone}` })}>
                Contact
              </ContactBtn>
            )}

            <AddToFavBtn>
              Add to
              <AiFillHeart size={'16px'} />
            </AddToFavBtn>
          </ModalCardBtnWrapper>
        </ModalCard>
      )}
    </>
  );
};
