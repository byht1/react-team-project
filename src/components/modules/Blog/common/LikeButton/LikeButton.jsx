import { StyledMetaButton, LikeIcon } from './LikeButton.styled';

export const LikeButton = props => {
  const { postId, isLoading, likedPost, likeCount, handleLike } = props;

  return (
    <StyledMetaButton onClick={() => handleLike(postId)} disabled={isLoading} checked={likedPost}>
      <LikeIcon />
      {likeCount}
    </StyledMetaButton>
  );
};
