import React from 'react';
import { getIsLogin } from 'redux/auth';
import { useSelector } from 'react-redux';
import { showLoginWarning } from 'helpers/showLoginWarning';
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
  const isLoggedIn = useSelector(getIsLogin);

  const handleAddPet = () => {
    if (!isLoggedIn) showLoginWarning();
    return;
    // ----------------- Функцію для виклику додавання тваринки додавай знизу
    return;
  };

  return (
    <CategoriesBox>
      <CategoryBtnWrapper>
        <CategoryBtn to="lost-found">lost/found</CategoryBtn>
        <CategoryBtn to="for-free">in good hands</CategoryBtn>
        <CategoryBtn to="sell">sell</CategoryBtn>
        {isLoggedIn && (
          <>
            <CategoryBtn to="favorite">favorite ads</CategoryBtn>
            <CategoryBtn to="own">my ads</CategoryBtn>
          </>
        )}
      </CategoryBtnWrapper>
      <FixedBtnWrapper>
        <FixedAddPetText>Add pet</FixedAddPetText>
        {/* */}
        <FixedAddPetBtn onClick={handleAddPet}>
          <AiOutlinePlus size={'24px'} color={'inherit'} />
        </FixedAddPetBtn>
      </FixedBtnWrapper>
      <FloatingAddPetBtn onClick={handleAddPet} type="button">
        Add pet
        <AiOutlinePlus size={'32px'} color={'inherit'} />
      </FloatingAddPetBtn>
    </CategoriesBox>
  );
};
