import React, { lazy } from 'react';

import { Lazy } from 'components/global/Lazy';

const LazyNewsPage = lazy(() => import('./NewsPage'));

const NewsPage = props => (
  <Lazy>
    <LazyNewsPage {...props} />
  </Lazy>
);

export default NewsPage;
