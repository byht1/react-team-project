import React, { lazy } from 'react';

import { Lazy } from 'components/global/Lazy';

const LazyUserPage = lazy(() => import('./UserPage'));

const UserPage = props => (
  <Lazy>
    <LazyUserPage {...props} />
  </Lazy>
);

export default UserPage;
