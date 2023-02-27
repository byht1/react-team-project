import { TitleH2 } from 'components/global/text';
import { Text } from 'components/global/text';
import { convertCreationDateToDateAndTime } from '../../helpers';
import {
  ImgPost,
  ContentBlock,
  ImgBlock,
  PostIcon,
  LikeBlock,
  PostInfo,
  BoxCard,
} from './PostCard.styled';
export const PostCard = ({ post }) => {
  const { title, text, category, image, likes, author, createdAt } = post;
  return (
    <BoxCard>
      <ImgBlock>
        <ImgPost src={image} alt="title" />
        <Text weight={600}>Author: {author}</Text>
        <Text weight={600}>Category: {category}</Text>
      </ImgBlock>
      <ContentBlock>
        <TitleH2 size={32}>{title}</TitleH2>
        <Text weight={'400'} lh="big">
          {text}
        </Text>
        <PostInfo>
          <LikeBlock>
            <PostIcon />
            {likes.length}
          </LikeBlock>
          <Text>Date of publication: {convertCreationDateToDateAndTime(createdAt)}</Text>
        </PostInfo>
      </ContentBlock>
    </BoxCard>
  );
};
