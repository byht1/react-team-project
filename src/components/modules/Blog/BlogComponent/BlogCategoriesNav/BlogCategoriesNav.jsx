import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import {
  CategoriesBox,
  // CategoryBtnWrapper,
  // CategoryBtn,
  FloatingAddPostBtn,
  FixedBtnWrapper,
  FixedAddPostText,
  FixedAddPostBtn,
} from './BlogCategoriesNav.styled';

export const BlogCategoriesNav = () => {
  return (
    <CategoriesBox>
      {/* <CategoryBtnWrapper>
        <CategoryBtn to="category-1">category-1</CategoryBtn>
        <CategoryBtn to="category-2">category-2</CategoryBtn>
        <CategoryBtn to="category-3">category-3</CategoryBtn>
      </CategoryBtnWrapper> */}
      <FixedBtnWrapper>
        <FixedAddPostText>Add Post</FixedAddPostText>
        <FixedAddPostBtn>
          <AiOutlinePlus size={'24px'} color={'inherit'} />
        </FixedAddPostBtn>
      </FixedBtnWrapper>
      <FloatingAddPostBtn type="button">
        Add Post
        <AiOutlinePlus size={'32px'} color={'inherit'} />
      </FloatingAddPostBtn>
    </CategoriesBox>
  );
};
