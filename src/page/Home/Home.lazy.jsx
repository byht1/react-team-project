import React, { lazy } from 'react';

import { Lazy } from 'components/global/Lazy';

const LazyHome = lazy(() => import('./Home'));

const Home = props => (
  <Lazy>
    <LazyHome {...props} />
  </Lazy>
);

export default Home;
