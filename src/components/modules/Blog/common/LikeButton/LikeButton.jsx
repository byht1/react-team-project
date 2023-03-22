import PropTypes from 'prop-types';
import { StyledMetaButton, LikeIcon } from './LikeButton.styled';

export const LikeButton = ({ postId, isLoading, likedPost, likeCount, handleLike }) => {
  return (
    <StyledMetaButton onClick={() => handleLike(postId)} disabled={isLoading} checked={likedPost}>
      <LikeIcon />
      {likeCount}
    </StyledMetaButton>
  );
};

LikeButton.propTypes = {
  handleLike: PropTypes.func,
  isLoading: PropTypes.bool,
  likeCount: PropTypes.number,
  likedPost: PropTypes.bool,
  postId: PropTypes.string,
};
