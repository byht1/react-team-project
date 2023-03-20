import React from 'react';
import { FormContext } from 'components/global/FormContext';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Alert } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { addPet } from '../../../../api';
import { schemaAddMyPetForm } from '../validationSchema';
import { dateConverter } from '../../FormAddNotice/helpers/dateConverter';
import { FirstPage } from '../FormPages/FirstPage';
import { SecondPage } from '../FormPages/SecondPage';
import { ModalOverlay } from '../ModalOverlay/ModalOverlay';
import { Loader } from '../../../global/Loader';

import { FormWrapper, FormTitle, CloseBtn, GrCloseIcon } from './AddMyPetForm.styled';

export const AddMyPetForm = () => {
  const location = useLocation();

  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [inputDate, setInputDate] = useState(new Date());
  const [inputBreed, setInputBreed] = useState('');

  const navigate = useNavigate();

  const client = useQueryClient();

  const { mutateAsync: addNewPet, isLoading } = useMutation({
    mutationKey: ['myPetData'],
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

  const methods = useForm({
    resolver: yupResolver(schemaAddMyPetForm),
    mode: 'onBlur',
  });

  const { reset } = methods;

  const nextStep = () => {
    setPage(2);
    navigate('/user/addmypet/page2');
  };

  const prevStep = () => {
    setPage(1);
    navigate('/user/addmypet/page1');
  };

  const onCloseModal = () => {
    navigate('/user');
  };

  const onSubmit = async data => {
    data.birthday = dateConverter(data.birthday);

    const formInfo = new FormData();
    formInfo.append('name', data.petName);
    formInfo.append('birth', data.birthday);
    formInfo.append('breed', data.petBreed);
    formInfo.append('image', data.myPetURL[0]);
    formInfo.append('comments', data.comments);

    if (data.myPetURL.length === 0) {
      return;
    }

    await addNewPet(formInfo);
    navigate('/user');
  };

  const closeAlert = () => {
    setError(null);
    onCloseModal();
  };

  return (
    <>
      <ModalOverlay onClose={onCloseModal}>
        <FormWrapper page={page}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <FormContext methods={methods} submit={onSubmit}>
              <FormTitle>Add pet</FormTitle>
              <CloseBtn type="button" onClick={onCloseModal}>
                <GrCloseIcon />
              </CloseBtn>

              {location.pathname === '/user/addmypet/page1' && (
                <FirstPage
                  nextStep={nextStep}
                  onClose={onCloseModal}
                  inputDate={inputDate}
                  setInputDate={setInputDate}
                  inputBreed={inputBreed}
                  setInputBreed={setInputBreed}
                />
              )}

              {location.pathname === '/user/addmypet/page2' && <SecondPage prevStep={prevStep} />}

              {isLoading && <Loader />}
              {error && (
                <Alert style={{ marginTop: 16 }} severity="error" onClose={closeAlert}>
                  {error.message}
                </Alert>
              )}
            </FormContext>
          </LocalizationProvider>
        </FormWrapper>
      </ModalOverlay>
    </>
  );
};
