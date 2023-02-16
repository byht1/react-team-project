import { Box } from 'components/global/Box';
import { Container } from 'components/global/Container';
import { TitleH2 } from 'components/global/text';
import React from 'react';
import { ProfileImage, Div, ImgCover, EditPhoto, SpanEditPhoto } from './UserData.styled';
import Chloe from '../../../img/chloe grace moretz.webp';

export const UserData = () => {
  return (
    <Container pt="0" pb="0">
      <Box>
        <TitleH2 size="20" weight="500" lh="heading" letter-spacing="0.04em">
          My information:
        </TitleH2>
        <Div>
          <ImgCover>
            <ProfileImage src={Chloe} />
          </ImgCover>
          <EditPhoto>
            <SpanEditPhoto>Edit photo</SpanEditPhoto>
          </EditPhoto>
        </Div>
      </Box>
    </Container>
  );
};
