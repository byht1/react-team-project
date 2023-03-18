import React, { useState, useEffect } from 'react';

import { TitleH2 } from 'components/global/text';
import { Text } from 'components/global/text';
import { convertCreationDateToDateAndTime } from '../../helpers';
import { ImgPost, ContentBlock, ImgBlock, PostInfo, BoxCard } from './PostCard.styled';

import { switchLikePost } from 'api/posts';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import { getUserId } from 'redux/auth';
import { LikeButton } from '../../common/LikeButton/LikeButton';

export const PostCard = ({ post }) => {
  const { title, text, category, image, likes, author, createdAt, _id: postId } = post;
  const userId = useSelector(getUserId);

  const client = useQueryClient();

  const { mutate: switchLike } = useMutation({
    mutationKey: ['posts', postId],
    mutationFn: () => switchLikePost(postId),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['posts', postId] });
      client.invalidateQueries({ queryKey: ['posts'] });
    },
  });

  const handleLike = () => {
    switchLike(postId);
  };

  return (
    <BoxCard>
      <ImgBlock>
        <ImgPost src={image} alt="title" />
        <Text weight={'600'}>Author: {author ? author.name : 'Incognito'}</Text>
        <Text weight={'600'}>Category: {category}</Text>
      </ImgBlock>
      <ContentBlock>
        <TitleH2 size={'32'}>{title}</TitleH2>
        <Text weight={'400'} lh="big">
          {text}
        </Text>
        <PostInfo>
          <LikeButton
            postId={postId}
            likedPost={likes.includes(userId)}
            likeCount={likes.length}
            handleLike={handleLike}
          />
          <Text>Date of publication: {convertCreationDateToDateAndTime(createdAt)}</Text>
        </PostInfo>
      </ContentBlock>
    </BoxCard>
  );
};
