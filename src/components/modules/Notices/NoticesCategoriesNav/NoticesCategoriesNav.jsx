import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import {
  CategoriesBox,
  CategoryBtnWrapper,
  CategoryBtn,
  FloatingAddPetBtn,
  FixedBtnWrapper,
  FixedAddPetText,
  FixedAddPetBtn,
} from './NoticesCategoriesNav.styled';

export const NoticesCategoriesNav = () => {
  return (
    <CategoriesBox>
      <CategoryBtnWrapper>
        <CategoryBtn to="lost-found">lost/found</CategoryBtn>
        <CategoryBtn to="for-free">in good hands</CategoryBtn>
        <CategoryBtn to="sell">sell</CategoryBtn>
        <CategoryBtn to="favorite">favorite ads</CategoryBtn>
        <CategoryBtn to="own">my ads</CategoryBtn>
      </CategoryBtnWrapper>
      <FixedBtnWrapper>
        <FixedAddPetText>Add pet</FixedAddPetText>
        <FixedAddPetBtn>
          <AiOutlinePlus size={'24px'} color={'inherit'} />
        </FixedAddPetBtn>
      </FixedBtnWrapper>
      <FloatingAddPetBtn type="button">
        Add pet
        <AiOutlinePlus size={'32px'} color={'inherit'} />
      </FloatingAddPetBtn>
    </CategoriesBox>
  );
};
