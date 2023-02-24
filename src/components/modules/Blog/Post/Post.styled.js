import styled from 'styled-components';

export const StyledPost = styled.div`
  display: flex;
  flex-direction: ${({ isImageOnRight }) => (isImageOnRight ? 'row-reverse' : 'row')};
  align-items: center;
  margin: 20px 0;
  border-radius: 10px;
  overflow: hidden;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const StyledImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
  margin-right: ${({ isImageOnRight }) => (isImageOnRight ? 0 : '1rem')};
  margin-left: ${({ isImageOnRight }) => (isImageOnRight ? '1rem' : 0)};
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  @media only screen and (min-width: 480px) {
    width: 50%;
    margin-right: ${({ isImageOnRight }) => (isImageOnRight ? 0 : '2rem')};
    margin-left: ${({ isImageOnRight }) => (isImageOnRight ? '2rem' : 0)};
  }

  @media only screen and (min-width: 768px) {
    width: 40%;
  }

  @media only screen and (min-width: 1280px) {
    width: 30%;
  }

  &:hover {
    transform: translateY(-2px);
  }
`;

export const StyledContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: ${({ isImageOnRight }) => (isImageOnRight ? '0' : '1rem')};
  margin-right: ${({ isImageOnRight }) => (isImageOnRight ? '1rem' : '0')};

  @media only screen and (max-width: 480px) {
    margin: 0;
  }
`;

export const StyledAuthor = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #424242;
  margin-right: 8px;
`;

export const StyledDate = styled.span`
  font-size: 14px;
  color: #757575;
  margin-right: 8px;
`;

export const StyledCategory = styled.span`
  font-size: 14px;
  color: #757575;
`;

export const StyledText = styled.p`
  font-size: 16px;
  line-height: 24px;
  margin: 0;
  padding: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
`;

export const StyledComments = styled.span`
  font-size: 14px;
  margin-right: 12px;
  color: #999;
`;

export const StyledLikes = styled.span`
  font-size: 14px;
  margin-right: 12px;
  color: #999;
`;

export const StyledButton = styled.button`
  font-size: 14px;
  padding: 8px 16px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  &:hover {
    background-color: #f2f2f2;
  }

  &:active {
    background-color: #e6e6e6;
    border: 1px solid #999;
  }
`;
