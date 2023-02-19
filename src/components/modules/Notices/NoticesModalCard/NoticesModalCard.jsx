import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import {
  ThumbWrapper,
  ThumbTag,
  TableBody,
  CardDescriptionRow,
} from '../NoticesCategoryItem/NoticesCategoryItem.styled';
import {
  ModalCard,
  ModalCardInfoWrapper,
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

export const NoticesModalCard = () => {
  return (
    <ModalCard>
      <ModalCardInfoWrapper>
        <ThumbWrapper>
          <ModalThumbImage src="https://mkantwerpen.be/wp-content/uploads/2020/01/placeholder.png"></ModalThumbImage>
          <ThumbTag>in good hands</ThumbTag>
        </ThumbWrapper>
        <ModalCardTextWrapper>
          <ModalCardTitle>Сute dog looking for a home</ModalCardTitle>
          <ModalCardDescriptionTable>
            <TableBody>
              <CardDescriptionRow>
                <ModalCardDescriptionKey>Name:</ModalCardDescriptionKey>
                <ModalCardDescriptionValue>Rich</ModalCardDescriptionValue>
              </CardDescriptionRow>
              <CardDescriptionRow>
                <ModalCardDescriptionKey>Birthday:</ModalCardDescriptionKey>
                <ModalCardDescriptionValue>21.09.2020</ModalCardDescriptionValue>
              </CardDescriptionRow>
              <CardDescriptionRow>
                <ModalCardDescriptionKey>Breed:</ModalCardDescriptionKey>
                <ModalCardDescriptionValue>Pomeranian</ModalCardDescriptionValue>
              </CardDescriptionRow>
              <CardDescriptionRow>
                <ModalCardDescriptionKey>Place:</ModalCardDescriptionKey>
                <ModalCardDescriptionValue>Lviv</ModalCardDescriptionValue>
              </CardDescriptionRow>
              <CardDescriptionRow>
                <ModalCardDescriptionKey>Sex:</ModalCardDescriptionKey>
                <ModalCardDescriptionValue>male</ModalCardDescriptionValue>
              </CardDescriptionRow>
              <CardDescriptionRow>
                <ModalCardDescriptionKey>Email:</ModalCardDescriptionKey>
                <ModalCardDescriptionValue>user@mail.com</ModalCardDescriptionValue>
              </CardDescriptionRow>
              <CardDescriptionRow>
                <ModalCardDescriptionKey>Phone:</ModalCardDescriptionKey>
                <ModalCardDescriptionValue>+380971234567</ModalCardDescriptionValue>
              </CardDescriptionRow>
              <CardDescriptionRow>
                <ModalCardDescriptionKey>Price:</ModalCardDescriptionKey>
                <ModalCardDescriptionValue>$150</ModalCardDescriptionValue>
              </CardDescriptionRow>
            </TableBody>
          </ModalCardDescriptionTable>
        </ModalCardTextWrapper>
      </ModalCardInfoWrapper>
      <ModalCommentText>
        <ModalCommentTitle>Comments: </ModalCommentTitle>
        Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum
        dolor sit amet, consectetur Lorem
      </ModalCommentText>
      <ModalCardBtnWrapper>
        <ContactBtn>Contact</ContactBtn>
        <AddToFavBtn>
          Add to
          <AiFillHeart size={'16px'} />
        </AddToFavBtn>
      </ModalCardBtnWrapper>
    </ModalCard>
  );
};
