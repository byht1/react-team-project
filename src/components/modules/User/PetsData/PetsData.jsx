import { Container } from 'components/global/Container';
import React from 'react';
import {
  TitleBlock,
  Title,
  TitleSpan,
  PetBlcok,
  PetCard,
  InfoList,
  ListItem,
  Img,
  ListItemInfo,
  Icon,
  PhotoBlock,
  AddPetBlock,
  AddPetIc,
  TrashBinIc,
} from './PetsData.styled';
import { useSelector } from 'react-redux';
import { getUserPetList } from 'redux/user';

export const PetsData = () => {
  const petList = useSelector(getUserPetList);

  return (
    <Container>
      <TitleBlock>
        <Title>My pets:</Title>
        <AddPetBlock>
          <TitleSpan>Add pet</TitleSpan> <AddPetIc />
        </AddPetBlock>
      </TitleBlock>
      <PetBlcok>
        {petList
          ? petList.map(el => {
              const { _id, name, birth, breed, image, comments } = el;
              return (
                <>
                  <PetCard key={_id}>
                    <PhotoBlock>
                      <Img src={image} />
                      <Icon>
                        <TrashBinIc />
                      </Icon>
                    </PhotoBlock>
                    <InfoList>
                      <ListItem>
                        <ListItemInfo>{`Name: ${name}`}</ListItemInfo>
                      </ListItem>
                      <ListItem>
                        <ListItemInfo>{`Date of birth: ${birth}`}</ListItemInfo>
                      </ListItem>
                      <ListItem>
                        <ListItemInfo>{`Breed: ${breed}`}</ListItemInfo>
                      </ListItem>
                      <ListItem>
                        <ListItemInfo>{`Comments: ${comments}`}</ListItemInfo>
                      </ListItem>
                    </InfoList>
                  </PetCard>
                </>
              );
            })
          : null}
      </PetBlcok>
    </Container>
  );
};
