import data from '../data.json';
import { TitleH2 } from 'components/global/text';
import { Text } from 'components/global/text';
import {
  ImgPost,
  ContentBlock,
  ImgBlock,
  PostIcon,
  LikeBlock,
  PostInfo,
  BoxCard,
} from './PostCard.styled';
export const PostCard = () => {
  return (
    <BoxCard>
      <ImgBlock>
        <ImgPost src={data.image} alt="" />
        <Text weight={600}>Author: {data.author}</Text>
        <Text weight={600}>Category: {data.category}</Text>
      </ImgBlock>
      <ContentBlock>
        <TitleH2 size={32}>{data.title}</TitleH2>
        <Text weight={'400'} lh="big">
          {data.text}
        </Text>
        <PostInfo>
          <LikeBlock>
            <PostIcon />
            {data.likes.length}
          </LikeBlock>
          <Text>Date of publication: {data.date}</Text>
        </PostInfo>
      </ContentBlock>
    </BoxCard>
  );
};
