import { StyledMetaButton, LikeIcon } from './LikeButton.styled';

export const LikeButton = props => {
  const { postId, isLoading, likedPost, likeCount, handleLike } = props;

  return (
    <StyledMetaButton onClick={() => handleLike(postId)} disabled={isLoading}>
      <LikeIcon checked={likedPost} />
      {likeCount}
    </StyledMetaButton>
  );
};
