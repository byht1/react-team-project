import React, { useRef, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { PostModal } from '../../PostModal';
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
  const [showModal, setShowModal] = useState(false);
  const addBtnRef = useRef();

  const toggleModal = () => {
    setShowModal(!showModal);
    addBtnRef.current.blur();
  };

  return (
    <CategoriesBox>
      {/* <CategoryBtnWrapper>
        <CategoryBtn to="category-1">category-1</CategoryBtn>
        <CategoryBtn to="category-2">category-2</CategoryBtn>
        <CategoryBtn to="category-3">category-3</CategoryBtn>
      </CategoryBtnWrapper> */}
      <FixedBtnWrapper>
        <FixedAddPostText>Add Post</FixedAddPostText>
        <FixedAddPostBtn type="button" onClick={toggleModal} ref={addBtnRef}>
          <AiOutlinePlus size={'24px'} color={'inherit'} />
        </FixedAddPostBtn>
      </FixedBtnWrapper>
      <FloatingAddPostBtn type="button" onClick={toggleModal}>
        Add Post
        <AiOutlinePlus size={'32px'} color={'inherit'} />
      </FloatingAddPostBtn>
      {showModal && (
        <PostModal onClose={toggleModal}></PostModal>
      )}
    </CategoriesBox>
  );
};
