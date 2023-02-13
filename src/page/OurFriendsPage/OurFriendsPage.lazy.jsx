import React, { lazy } from 'react';

import { Lazy } from 'components/global/Lazy';

const LazyOurFriendsPage = lazy(() => import('./OurFriendsPage'));

const OurFriendsPage = props => (
  <Lazy>
    <LazyOurFriendsPage {...props} />
  </Lazy>
);

export default OurFriendsPage;
