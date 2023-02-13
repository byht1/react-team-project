import React, { lazy } from 'react';

import { Lazy } from 'components/global/Lazy';

const LazyNoticesPage = lazy(() => import('./NoticesPage'));

const NoticesPage = props => (
  <Lazy>
    <LazyNoticesPage {...props} />
  </Lazy>
);

export default NoticesPage;
