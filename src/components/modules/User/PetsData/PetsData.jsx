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
import { useDispatch, useSelector } from 'react-redux';
import { deletePetFromList, getUserPetList, updateUserPetList } from 'redux/user';

export const PetsData = () => {
  const petList = useSelector(getUserPetList);

  const dispatch = useDispatch();

  const deletePet = _id => {
    dispatch(updateUserPetList(_id));
    dispatch(deletePetFromList(_id));
  };
  return (
    <Container>
      <TitleBlock>
        <Title>My pets:</Title>
        <AddPetBlock>
          <TitleSpan>Add pet</TitleSpan> <AddPetIc />
        </AddPetBlock>
      </TitleBlock>

      <PetBlcok>
        {petList[0]
          ? petList.map(el => {
              const { _id, name, birth, breed, image, comments } = el;
              return (
                <PetCard key={_id}>
                  <PhotoBlock>
                    <Img src={image} />
                    <Icon>
                      <TrashBinIc
                        onClick={() => {
                          deletePet(_id);
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
        {!petList[0] ? (
          <>
            <PandaImg src={require('../../../../img/User/panda.jpg')} />
            <PandaText>You have not added any pets to favorite list yet</PandaText>
          </>
        ) : null}
      </PetBlcok>
    </Container>
  );
};
