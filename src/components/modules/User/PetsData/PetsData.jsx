import { Container } from 'components/global/Container';
import React from 'react';
import { useState } from 'react';
import { AddMyPetForm } from 'components/modules/ModalAddsPet';
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
import Chloe from '../../../../img/User/chloe grace moretz.webp';

export const PetsData = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const onCloseModal = () => {
    setIsOpen(false);
    console.log('Close');
  };

  return (
    <Container>
      <TitleBlock>
        <Title>My pets:</Title>
        <AddPetBlock>
          <TitleSpan>Add pet</TitleSpan> <AddPetIc onClick={openModal} />
        </AddPetBlock>
      </TitleBlock>
      {isOpen && <AddMyPetForm onClose={onCloseModal} />}

      <PetBlcok>
        <PetCard>
          <PhotoBlock>
            <Img src={Chloe} />
            <Icon>
              <TrashBinIc />
            </Icon>
          </PhotoBlock>
          <InfoList>
            <ListItem>
              <ListItemInfo>Name:Chloe Grace Moretz</ListItemInfo>
            </ListItem>
            <ListItem>
              <ListItemInfo>Date of birth: 10.02.1997</ListItemInfo>
            </ListItem>
            <ListItem>
              <ListItemInfo>Breed: Human ;)</ListItemInfo>
            </ListItem>
            <ListItem>
              <ListItemInfo>
                Comments: Chloë Grace Moretz is an American actress. She is the recipient of various
                accolades, including four MTV Movie & TV Awards, two People's Choice Awards, two
                Saturn Awards, and two Young Artist Awards.
              </ListItemInfo>
            </ListItem>
          </InfoList>
        </PetCard>
        <PetCard>
          <PhotoBlock>
            <Img src={Chloe} />
            <Icon>
              <TrashBinIc />
            </Icon>
          </PhotoBlock>
          <InfoList>
            <ListItem>
              <ListItemInfo>Name:Chloe Grace Moretz</ListItemInfo>
            </ListItem>
            <ListItem>
              <ListItemInfo>Date of birth: 10.02.1997</ListItemInfo>
            </ListItem>
            <ListItem>
              <ListItemInfo>Breed: Human ;)</ListItemInfo>
            </ListItem>
            <ListItem>
              <ListItemInfo>
                Comments: Chloë Grace Moretz is an American actress. She is the recipient of various
                accolades, including four MTV Movie & TV Awards, two People's Choice Awards, two
                Saturn Awards, and two Young Artist Awards.
              </ListItemInfo>
            </ListItem>
          </InfoList>
        </PetCard>
      </PetBlcok>
    </Container>
  );
};
