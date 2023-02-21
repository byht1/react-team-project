import React from 'react';
import { FormContext } from 'components/global/FormContext';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { schemaAddMyPetForm } from '../validationSchema';
import { FirstPage } from '../FormPages/FirstPage';
import { SecondPage } from '../FormPages/SecondPage';
import { ModalOverlay } from '../ModalOverlay/ModalOverlay';
import { server } from '../../../../api/index';
import { FormWrapper, FormTitle, CloseBtn, GrCloseIcon } from './AddMyPetForm.styled';

export const AddMyPetForm = ({ onClose }) => {
  const [page, setPage] = useState(1);

  // const { mutateAsync, isLoading } = useMutation({
  //   mutationKey: [ALBUM, TRACK],
  //   mutationFn: TrackPush,
  //   onSuccess: () => {
  //     reset();
  //     navigate('/new');
  //   },
  // });

  const methods = useForm({
    // defaultValues: {
    //   // owner: '63f397ebf7f968c7a15349d6',
    //   name: 'petName',
    //   birth: '01.01.2010',
    //   breed: 'breed',
    //   image: 'object',
    //   comments: 'comments',
    // },
    resolver: yupResolver(schemaAddMyPetForm),
    mode: 'onBlur',
  });

  const { reset, getValues } = methods;

  const postPet = async newPet => {
    // const UrlPostPet = Object.freeze({ add: '/pets' });
    try {
      const { data } = await server.post('/pets', newPet);

      console.log(data);
      return data;
    } catch (error) {
      console.error(error);

      throw error;
    }
  };

  const {
    mutateAsync: create,
    // isLoading,
  } = useMutation({
    mutationKey: ['newPet'],
    mutationFn: postPet,
    onSuccess: () => {
      // reset();
      // navigate('/new');
    },
  });

  // const handleChange = e => {
  //   // if (e.target.files && e.target.files[0]) {
  //   //   setPhoto(URL.createObjectURL(e.target.files[0]));
  //   // }
  //   const file = e.currentTarget.files[0];
  //   console.log(file);
  //   const reader = new FileReader();
  //   reader.onload = function (e) {
  //     setPhoto(e.target.result);
  //   };
  //   reader.readAsDataURL(file);
  // };

  // код для файла UserPage

  // const [isOpen, setIsOpen] = useState(false);

  // const openModal = () => {
  //   setIsOpen(true);
  // };

  // const onCloseModal = () => {
  //   setIsOpen(false);
  //   console.log('Close');
  // };

  const nextStep = () => {
    console.log('Go');
    setPage(2);
  };

  const prevStep = () => {
    console.log('go back');
    setPage(1);
  };

  const onSubmit = data => {
    console.log(data);
    console.log('done');

    // const formData = new FormData();
    // console.log(formData);

    // for (const key in data) {
    //   formData.append(key, data[key]);
    // }

    // dayjs('2019-01-25').format('DD/MM/YYYY');

    // create(data);
    const values = getValues();
    const newData = JSON.stringify(values);
    console.log(newData);

    // postPet(newData);

    // console.log(formData);

    // await mutateAsync(formData);

    // POST запрос (отправляем объект formData)

    reset();
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
