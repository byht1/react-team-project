import styled from 'styled-components';
import { TitleH3 } from 'components/global/text';

export const StyledPost = styled.li`
  display: flex;
  flex-direction: ${({ isImageOnRight }) => (isImageOnRight ? 'row-reverse' : 'row')};
  gap: ${p => p.theme.space[7]}px;
  align-items: flex-start;
  margin: 20px 0;
  border-radius: 10px;
  overflow: hidden;
  padding: ${p => p.theme.space[9]}px;
  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 40px;

  @media (max-width: 767.98px) {
    flex-direction: column;
    margin-bottom: ${p => p.theme.space[7]}px;
  }
`;

export const StyledImage = styled.img`
  flex-grow: 0;
  width: 100%;
  height: auto;
  border-radius: ${p => p.theme.space[10]}px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  object-fit: cover;

  @media (max-width: 767.98px) {
    margin-bottom: ${p => p.theme.space[7]}px;
  }

  @media only screen and (min-width: 768px) {
    height: 160px;
    width: 240px;
    /* width: 40%; */
  }

  @media only screen and (min-width: 1280px) {
    height: 320px;
    width: 480px;
    /* width: 40%; */
    /* width: 30%; */
  }

  &:hover {
    transform: translateY(-2px);
  }
`;

export const StyledContent = styled.div`
  display: flex;
  min-height: 100%;
  flex-direction: column;
  align-self: stretch;

  @media only screen and (max-width: 480px) {
    margin: 0;
  }
`;

export const StyledTitle = styled(TitleH3)``;

export const StyledAuthor = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #424242;
  margin-right: 8px;
`;

export const StyledDate = styled.span`
  display: block;
  font-size: 14px;
  color: #757575;
  margin-right: 8px;
  text-align: right;
`;

export const StyledCategory = styled.span`
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  color: #757575;
`;

export const StyledText = styled.p`
  font-size: 16px;
  line-height: 24px;
  margin: 0;
  padding: 0;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledMetaIcon = styled.span`
  display: flex;
  gap: ${p => p.theme.space[3]}px;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  color: #999;

  &:hover {
    color: red;
  }
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
