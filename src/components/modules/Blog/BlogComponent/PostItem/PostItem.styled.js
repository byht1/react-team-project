import styled from 'styled-components';
import { TitleH3 } from 'components/global/text';
import { Box } from 'components/global/Box';
import { Link } from 'react-router-dom';
import { AiOutlineLike } from 'react-icons/ai';

export const PostContainer = styled.li`
  /* display: flex;
  align-items: flex-start; */
  gap: 16px;
  
  padding: ${p => p.theme.space[9]}px;
  border-radius: 10px;
  overflow: hidden;
  
  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 40px;

  

  @media (max-width: 767.98px) {
    flex-direction: column;
  }

  @media (min-width: 768px) and (max-width: 1279.98px) {
    &:nth-child(2n) {
      & > div:first-of-type {
        float: right;
        margin-left: 16px;
      }
    }
    &:nth-child(2n + 1) {
      & > div:first-of-type {
        float: left;
        margin-right: 16px;
      }
    }
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    &:nth-child(2n) {
      flex-direction: row-reverse;
    }
  }
`;

export const ImageWrapper = styled(Box)`
  position: relative;
  height: 288px;
  width: 100%;
  margin-bottom: 8px;

  border-radius: ${p => p.theme.space[7]}px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s ease-in-out;

  @media screen and (min-width: 768px) {
    flex-shrink: 0;
    width: 336px;
  }

  &:hover {
    transform: translateY(-2px);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Category = styled.span`
  position: absolute;
  top: 20px;
  left: 0;

  width: 158px;
  padding-top: 7px;
  padding-bottom: 7px;

  text-align: center;
  background-color: ${p => p.theme.colors.tagBg};
  backdrop-filter: blur(2px);

  border-radius: ${p => p.theme.radii.tagRadius};

  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  color: #757575;
`;

export const ContentWrapper = styled.div`
  /* display: flex; */
  min-height: 100%;
  /* flex-direction: column; */
  /* align-self: stretch; */
  width: 100%;

  @media only screen and (max-width: 480px) {
    margin: 0;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    align-self: stretch;
  }
`;

export const Title = styled(TitleH3)`
  font-size: ${p => p.theme.fontSizes.xxxl};
  line-height: ${p => p.theme.lineHeights.heading};
  margin-bottom: 8px;
`;

export const Author = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: ${p => p.theme.colors.g};
  margin-bottom: ${p => p.theme.space[5]}px;
`;

export const PostFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  /* position: absolute;
    bottom: 32px;
    right: 32px; */
`;

export const Date = styled.p`
  display: block;
  font-size: ${p => p.theme.fontSizes.s};
  /* color: ${p => p.theme.colors.g}; */
  text-align: right;
  /* margin-top: ${p => p.theme.space[5]}px; */
`;

export const Text = styled.p`
  font-size: ${p => p.theme.fontSizes.s};

  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.m};
  }
`;

export const MetaButton = styled.div`
  display: flex;
  gap: ${p => p.theme.space[3]}px;
  align-items: flex-end;
  justify-content: space-between;
  padding: 8px;
  font-size: 14px;
  color: #999;
`;

export const LikeIcon = styled(AiOutlineLike)`
  width: 24px;
  height: 24px;
  color: ${p => p.checked && p.theme.colors.da};
`;

export const StyledButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px 28px;
  outline: none;

  border: 2px solid ${p => p.theme.colors.a};
  border-radius: ${p => p.theme.radii.buttonRadius};

  font-family: ${p => p.theme.fonts.manrope};
  font-weight: ${p => p.theme.fontWeights.average};
  font-size: 16px;
  line-height: ${p => p.theme.lineHeights.heading};

  transition: var(--transition-bg), var(--transition-color), var(--transition-border-color);

  background-color: ${p => p.theme.colors.w};
  color: ${p => p.theme.colors.bt};

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.a};
    color: ${p => p.theme.colors.wt};
  }

  background-color: ${p => p.theme.colors.w};
  color: ${p => p.theme.colors.bt};

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.a};
    color: ${p => p.theme.colors.wt};
  }

  padding-top: 8px;
  padding-bottom: 8px;

  color: ${p => p.theme.colors.a};

  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.heading};
`;
