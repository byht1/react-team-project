import React, { lazy } from 'react';

import { Lazy } from 'components/global/Lazy';

const LazyLoginPage = lazy(() => import('./LoginPage'));

const LoginPage = props => (
  <Lazy>
    <LazyLoginPage {...props} />
  </Lazy>
);

export default LoginPage;
