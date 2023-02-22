import React, { useState, useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { Outlet, useNavigate } from 'react-router-dom';
// import { useQueryClient } from '@tanstack/react-query';
// import { addNewNotice } from 'services/notices';
// import { useMutation } from '@tanstack/react-query';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaAddPet } from './helpers/schemaAppPet';

// import {
//   FormWrap,
//   BackDrop,
//   MainText,
//   RadioTwo,
//   LabelText,
//   RadioWrap,
//   Label,
//   TextTittle,
// } from './FormAddNotice.styled';
import { FormWrap, BackDrop, RadioTwo, LabelText, RadioWrap, Label } from './FormAddNotice.styled';
import { FormHeader } from './FormHeader';
// import { Categories } from './Categories';
export const FormAddNotice = () => {
  const [selectedValue, setSelectedValue] = useState('lost/found');
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const location = useLocation();
  const navigate = useNavigate();

  const methods = useForm({
    defaultValues: {
      //  category: selectedValue,
      // category: 'sell',

      petType: 'dog',
      // breed: 'Bulldog',
      birthday: '12.12.12',
      title: 'Notice',
      price: '150',
      comments: 'The best dog ever',
      location: 'Odesa',
      name: 'Linsy',
      sex: 'female',
    },
    resolver: yupResolver(schemaAddPet),
    mode: 'onBlur',
  });

  const categoryName = methods.getValues().category;
  console.log('hkjhjkhnbkj');
  console.log(categoryName);

  // const client = useQueryClient();
  // const { data, isLoading } = useQuery({ queryFn: postNotice(value), queryKey: 'noticeі' });
  // const { mutate: create } = useMutation({
  //   mutationFn: addNewNotice,
  //   onSuccess: () => {
  //     client.invalidateQueries({ queryKey: ['notices', 'all', categoryName] });
  //   },
  // });

  const handleRadioInputChange = event => {
    setSelectedValue(event.target.value);
    methods.setValue('category', event.target.value);
    methods.reset();
  };

  const onSubmit = data => {
    console.log('first');
    // console.log(data);
    // create(data);
    navigate('/');
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const closeModal = e => {
    if (e.target.id === 'backdrop-notice' || e.key === 'Escape') {
      navigate('/');
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', closeModal);

    return () => {
      window.removeEventListener('keydown', closeModal);
    };
  }, [closeModal]);

  return (
    <FormProvider {...methods}>
      <BackDrop onClick={closeModal} id="backdrop-notice">
        <FormWrap>
          <FormHeader />
          {/* <Categories></Categories> */}
          <RadioWrap>
            <Label checked={selectedValue === 'lost/found'}>
              <RadioTwo
                type="radio"
                {...methods.register('category')}
                value="lost/found"
                onChange={handleRadioInputChange}
                checked={selectedValue === 'lost/found'}
              />
              <LabelText>lost/found</LabelText>
            </Label>
            <Label checked={selectedValue === 'in good hands'}>
              <RadioTwo
                type="radio"
                {...methods.register('category')}
                value="in good hands"
                onChange={handleRadioInputChange}
                checked={selectedValue === 'in good hands'}
              />
              <LabelText>in good hands</LabelText>
            </Label>
            <Label checked={selectedValue === 'sell'}>
              <RadioTwo
                type="radio"
                {...methods.register('category')}
                value="sell"
                onChange={handleRadioInputChange}
                checked={selectedValue === 'sell'}
              />
              <LabelText>sell</LabelText>
            </Label>
          </RadioWrap>
          <form onSubmit={methods.handleSubmit(onSubmit)}>{<Outlet />}</form>
        </FormWrap>
      </BackDrop>
    </FormProvider>
  );
};
