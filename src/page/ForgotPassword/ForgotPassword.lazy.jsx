import React, { lazy } from 'react';

import { Lazy } from 'components/global/Lazy';

const LazyForgotPassword = lazy(() => import('./ForgotPassword'));

const ForgotPassword = props => (
  <Lazy>
    <LazyForgotPassword {...props} />
  </Lazy>
);

export default ForgotPassword;
