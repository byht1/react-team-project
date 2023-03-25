import styled from 'styled-components';
import { AiOutlineLike } from 'react-icons/ai';
import { TitleH3 } from 'components/global/text';

export const BoxCard = styled.div`
  padding: 32px;
  background: #ffffff;
  border-radius: ${p => p.theme.radii.inputRadius};

  @media (max-width: 767.98px) {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  @media (min-width: 768px) {
    padding-bottom: 24px;
    & > div:first-of-type {
      float: left;
      margin-right: 16px;
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 30px;
  }
`;

export const ImgWrap = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: ${p => p.theme.space[7]}px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media screen and (min-width: 768px) {
    height: 240px;
    width: 240px;
    margin-bottom: 8px;
  }

  @media screen and (min-width: 1280px) {
    height: 320px;
    width: 320px;
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

export const ContentBlock = styled.div`
  width: 100%;
  @media screen and (max-width: 480px) {
    margin: 0;
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

export const LikeBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const PostInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  width: 100%;
  @media screen and (min-width: 768px) {
    justify-content: flex-end;
    margin: 0;
  }
`;

export const Date = styled.p`
  display: block;
  font-size: ${p => p.theme.fontSizes.s};
  text-align: right;
`;

export const PostIcon = styled(AiOutlineLike)`
  fill: ${p => p.theme.colors.a};
  width: 25px;
  height: 25px;
`;
