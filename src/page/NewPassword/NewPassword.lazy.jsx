import React, { lazy } from 'react';

import { Lazy } from 'components/global/Lazy';

const LazyNewPassword = lazy(() => import('./NewPassword'));

const NewPassword = props => (
  <Lazy>
    <LazyNewPassword {...props} />
  </Lazy>
);

export default NewPassword;
