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
        <CategoryBtn>lost/found</CategoryBtn>
        <CategoryBtn>in good hands</CategoryBtn>
        <CategoryBtn>sell</CategoryBtn>
        <CategoryBtn>favorite ads</CategoryBtn>
        <CategoryBtn>my ads</CategoryBtn>
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
