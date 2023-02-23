import React from 'react';
import { FormContext } from 'components/global/FormContext';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Alert } from '@mui/material';
import { addPet } from '../../../../api';
import { schemaAddMyPetForm } from '../validationSchema';
import { FirstPage } from '../FormPages/FirstPage';
import { SecondPage } from '../FormPages/SecondPage';
import { ModalOverlay } from '../ModalOverlay/ModalOverlay';
import { Loader } from '../../../global/Loader';

import { FormWrapper, FormTitle, CloseBtn, GrCloseIcon } from './AddMyPetForm.styled';

export const AddMyPetForm = ({ onClose }) => {
  // Не удалять, стилизованы падинги!

  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);

  const methods = useForm({
    resolver: yupResolver(schemaAddMyPetForm),
    mode: 'onBlur',
  });

  const { reset } = methods;

  const client = useQueryClient();
  const { mutateAsync: addNewPet, isLoading } = useMutation({
    mutationKey: ['myPet'],
    mutationFn: addPet,
    onSuccess: updateDate => {
      client.invalidateQueries(['myPet'], updateDate);
      setError(null);
      reset();
    },
    onError: error => {
      setError(error);
    },
    retry: 1,
  });

  const nextStep = () => {
    setPage(2);
  };

  const prevStep = () => {
    setPage(1);
  };

  const onSubmit = async data => {
    // console.log(data);

    const formInfo = new FormData();

    formInfo.append('name', data.petName);
    formInfo.append('birth', data.petBirth);
    formInfo.append('breed', data.petBreed);
    formInfo.append('image', data.myPetURL[0]);
    formInfo.append('comments', data.comments);

    if (data.myPetURL.length === 0) {
      // console.log('File not added ');
      return;
    }

    await addNewPet(formInfo);
    onClose();
  };

  const closeAlert = () => {
    setError(null);
    onClose();
  };

  return (
    <>
      <ModalOverlay onClose={onClose}>
        <FormWrapper page={page}>
          <FormContext methods={methods} submit={onSubmit}>
            <FormTitle>Add pet</FormTitle>
            <CloseBtn type="button" onClick={onClose}>
              <GrCloseIcon />
            </CloseBtn>
            {page === 1 && <FirstPage nextStep={nextStep} onClose={onClose} />}
            {page === 2 && <SecondPage prevStep={prevStep} />}
            {isLoading && <Loader />}
            {error && (
              <Alert style={{ marginTop: 16 }} severity="error" onClose={closeAlert}>
                {error.message}
              </Alert>
            )}
          </FormContext>
        </FormWrapper>
      </ModalOverlay>
    </>
  );
};
