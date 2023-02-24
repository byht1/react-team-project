import styled from 'styled-components';
import { Box } from 'components/global/Box';
import {
  ThumbWrapper,
  ThumbImage,
  CardInfoWrapper,
  CardDescriptionTable,
  CardTitle,
  CardDescriptionKey,
  CardDescriptionValue,
  ViewMoreBtn,
} from '../NoticesCategoryItem/NoticesCategoryItem.styled';

export const ModalCard = styled(Box)``;

export const ModalCardInfoWrapper = styled(Box)`
  @media (min-width: 768px) {
    display: flex;
  }
`;

export const ModalThumbWrapper = styled(ThumbWrapper)``;

export const ModalThumbImage = styled(ThumbImage)`
  border-radius: ${p => p.theme.radii.modalThumbRadius};

  @media (min-width: 768px) {
    min-width: 288px;
    max-width: 380px;
  }
`;

export const ModalCardTextWrapper = styled(CardInfoWrapper)`
  padding-left: 0px;
  padding-right: 0px;

  @media (min-width: 768px) {
    margin-left: 20px;
  }
`;

export const ModalCardDescriptionTable = styled(CardDescriptionTable)`
  font-size: ${p => p.theme.fontSizes.s};

  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.m};
  }
`;

export const ModalCardTitle = styled(CardTitle)`
  font-size: ${p => p.theme.fontSizes.xxl};

  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.xxxl};
  }
`;

export const ModalCardDescriptionKey = styled(CardDescriptionKey)`
  font-weight: ${p => p.theme.fontWeights.semiBold};
`;

export const ModalCardDescriptionValue = styled(CardDescriptionValue)`
  padding-left: 75px;

  @media (min-width: 768px) {
    padding-left: 70px;
  }
`;

export const ModalCommentTitle = styled('span')`
  font-weight: ${p => p.theme.fontWeights.semiBold};
  font-size: ${p => p.theme.fontSizes.s};

  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.m};
  }
`;

export const ModalCommentText = styled('p')`
  margin-top: 28px;
  font-size: ${p => p.theme.fontSizes.s};

  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.m};
  }
`;

export const ModalCardBtnWrapper = styled(Box)`
  margin-top: 20px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-start;

    margin-top: 32px;
  }
`;

export const ContactBtn = styled('a')`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${p => p.theme.size.max};
  height: 40px;

  padding-top: 8px;
  padding-bottom: 8px;

  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.heading};
  font-family: ${p => p.theme.fonts.manrope};
  font-weight: ${p => p.theme.fontWeights.average};

  background-color: ${p => p.theme.colors.a};
  color: ${p => p.theme.colors.wt};

  outline: none;

  border: 2px solid ${p => p.theme.colors.a};
  border-radius: ${p => p.theme.radii.buttonRadius};

  transition: var(--transition-bg), var(--transition-color), var(--transition-border-color);

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.w};
    color: ${p => p.theme.colors.a};
    cursor: pointer;
  }

  @media (min-width: 768px) {
    width: 160px;
  }
`;

export const AddToFavBtn = styled(ViewMoreBtn)`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    margin-top: 12px;
  }

  & > svg {
    margin-left: 8px;
  }

  @media (min-width: 768px) {
    width: 160px;
    height: 40px;

    margin-top: 0px;
    margin-right: 12px;
  }
`;

export const RemoveFromFavBtn = styled(AddToFavBtn)``;
