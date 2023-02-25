import { useQuery } from '@tanstack/react-query';
import { getPetList } from 'api';
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
  PandaImg,
  PandaText,
} from './PetsData.styled';

export const PetsData = () => {
  const { data, isLoading, isSuccess } = useQuery({
    queryFn: () => getPetList(),
    queryKey: ['myPetData'],
    onSuccess: data => {
      console.log(data);
    },
  });
  console.log(data);
  const deletePet = id => {};

  return (
    <Container>
      <TitleBlock>
        <Title>My pets:</Title>
        <AddPetBlock>
          <TitleSpan>Add pet</TitleSpan> <AddPetIc />
        </AddPetBlock>
      </TitleBlock>

      <PetBlcok>
        {isSuccess
          ? data.map(el => {
              const { id, name, birth, breed, image, comments } = el;
              return (
                <PetCard key={id}>
                  <PhotoBlock>
                    <Img src={image} />
                    <Icon>
                      <TrashBinIc
                        onClick={() => {
                          deletePet(id);
                        }}
                      />
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
              );
            })
          : null}
        {!isSuccess ? (
          <>
            <PandaImg src={require('../../../../img/User/panda.jpg')} />
            <PandaText>You have not added any pets to favorite list yet</PandaText>
          </>
        ) : null}
      </PetBlcok>
    </Container>
  );
};
