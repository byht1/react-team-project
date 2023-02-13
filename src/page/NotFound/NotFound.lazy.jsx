import React, { lazy } from 'react';

import { Lazy } from 'components/global/Lazy';

const LazyNotFound = lazy(() => import('./NotFound'));

const NotFound = props => (
  <Lazy>
    <LazyNotFound {...props} />
  </Lazy>
);

export default NotFound;
