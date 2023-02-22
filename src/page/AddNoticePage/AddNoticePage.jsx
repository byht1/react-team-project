import React from 'react';
import { FormAddNotice } from 'components/modules/FormAddNotice';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const FormAddNoticePage = () => {
  return (
    <FormAddNotice>
      {' '}
      <Suspense>
        <Outlet />
      </Suspense>
      /
    </FormAddNotice>
  );
};
export default FormAddNoticePage;
