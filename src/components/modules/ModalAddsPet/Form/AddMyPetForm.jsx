import React from 'react';
import { FormContext } from 'components/global/FormContext';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import server, { token } from '../../../../api/basic';
import { useMutation } from '@tanstack/react-query';
import { schemaAddMyPetForm } from '../validationSchema';
import { FirstPage } from '../FormPages/FirstPage';
import { SecondPage } from '../FormPages/SecondPage';
import { ModalOverlay } from '../ModalOverlay/ModalOverlay';

import { FormWrapper, FormTitle, CloseBtn, GrCloseIcon } from './AddMyPetForm.styled';

export const AddMyPetForm = ({ onClose }) => {
  const [page, setPage] = useState(1);

  const methods = useForm({
    resolver: yupResolver(schemaAddMyPetForm),
    mode: 'onBlur',
  });

  const { reset } = methods;
  // console.log(token);

  const addPet = async petInfo => {
    try {
      const { data } = await server.post('/pets', petInfo, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const { mutateAsync: addNewPet, isLoading } = useMutation({
    mutationKey: ['myPet'],
    mutationFn: addPet, // функция post запрос
    onSuccess: () => {
      reset();
    },
    onError: err => console.log(err),
  });

  const nextStep = () => {
    setPage(2);
  };

  const prevStep = () => {
    setPage(1);
  };

  const onSubmit = async data => {
    console.log(data);

    const formInfo = new FormData();

    formInfo.append('name', data.petName);
    // formInfo.append('birth', toDateFormat(data.petBirth, '/', '.'));
    formInfo.append('birth', data.petBirth);
    formInfo.append('breed', data.petBreed);
    formInfo.append('image', data.myPetImageURL);
    formInfo.append('comments', data.comments);

    for (const pair of formInfo.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    }

    await addNewPet(formInfo);

    onClose();
  };

  return (
    <>
      {/* {isLoading && <p>Loading....</p>} */}

      <ModalOverlay onClose={onClose}>
        <FormWrapper>
          <FormContext methods={methods} submit={onSubmit}>
            <FormTitle>Add pet</FormTitle>
            <CloseBtn type="button" onClick={onClose}>
              <GrCloseIcon />
            </CloseBtn>

            {page === 1 && <FirstPage nextStep={nextStep} onClose={onClose} />}
            {page === 2 && <SecondPage prevStep={prevStep} />}
          </FormContext>
        </FormWrapper>
      </ModalOverlay>
    </>
  );
};
