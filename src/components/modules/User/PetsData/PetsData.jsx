import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { deletePetFromUserPetList, getPetList } from 'api';

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

import { useNavigate } from 'react-router';

export const PetsData = () => {
  const client = useQueryClient();
  // eslint-disable-next-line
  const { data, isLoading, isSuccess } = useQuery({
    queryFn: () => getPetList(),
    queryKey: ['myPet'],
    onSuccess: data => {},
  });

  const { mutate } = useMutation({
    mutationKey: ['myPetData'],
    mutationFn: id => deletePetFromUserPetList(id),
    onSuccess: updateDate => {
      client.invalidateQueries(['myPet'], updateDate);
    },
  });
  const deletePet = id => {
    mutate(id);
  };

  // модалка
  const navigate = useNavigate();

  const openModal = () => {
    navigate('addmypet/page1');
  };
  return (
    <div>
      <TitleBlock>
        <Title>My pets:</Title>
        <AddPetBlock>
          <TitleSpan>Add pet</TitleSpan> <AddPetIc onClick={openModal} />
        </AddPetBlock>
      </TitleBlock>

      <PetBlcok>
        {isSuccess
          ? data.map(el => {
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
        {!data?.length && (
          <>
            <PandaImg src={require('../../../../img/User/panda.png')} />
            <PandaText>You have not added pets to favorite list yet</PandaText>
          </>
        )}
      </PetBlcok>
    </div>
  );
};
