import React, { lazy } from 'react';

import { Lazy } from 'components/global/Lazy';

const LazyRegisterPage = lazy(() => import('./RegisterPage'));

const RegisterPage = props => (
  <Lazy>
    <LazyRegisterPage {...props} />
  </Lazy>
);

export default RegisterPage;
