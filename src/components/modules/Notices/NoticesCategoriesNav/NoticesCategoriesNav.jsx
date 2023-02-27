import React from 'react';
import { getEmail, getIsLogin, getCity } from 'redux/auth';
import { useSelector } from 'react-redux';
import { showLoginWarning } from 'helpers/showLoginWarning';
import { AiOutlinePlus } from 'react-icons/ai';
import { useLocation, useNavigate } from 'react-router-dom';
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
  const email = useSelector(getEmail);
  const city = useSelector(getCity);
  const navigate = useNavigate();
  const location = useLocation().pathname.split('/').pop();

  const handleAddPet = () => {
    if (!isLoggedIn) {
      showLoginWarning();
      navigate('/login');
      return;
    }
    if (!email || !city) {
      showLoginWarning('Fill in your contact information please');
      return;
    }

    navigate(`${location}/addpet`);
  };

  return (
    <CategoriesBox>
      <CategoryBtnWrapper>
        <CategoryBtn to="sell">sell</CategoryBtn>
        <CategoryBtn to="lost-found">lost/found</CategoryBtn>
        <CategoryBtn to="for-free">in good hands</CategoryBtn>
        {isLoggedIn && (
          <>
            <CategoryBtn to="favorite">favorite ads</CategoryBtn>
            <CategoryBtn to="own">my ads</CategoryBtn>
          </>
        )}
      </CategoryBtnWrapper>
      <FixedBtnWrapper>
        <FixedAddPetText>Add pet</FixedAddPetText>
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
