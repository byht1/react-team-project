import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

// const createAd = title => {
//   axios
//     .post('/api/posts', {
//       title: 'My post title',
//       content: 'This is the content of my post',
//       author: 'John Doe',
//     })
//     .then(response => {
//       console.log('Server response:', response.data);
//     })
//     .catch(error => {
//       console.error('Error sending POST request:', error);
//     });
// };

export const Form = ({ methods }) => {
  const navigate = useNavigate();

  // const { mutate } = useMutation({ mutationFn: createAd });

  const onSubmit = data => {
    console.log(data);
    navigate('/');
  };

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      <Outlet />
    </form>
  );
};
