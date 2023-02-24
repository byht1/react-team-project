import React, { lazy } from 'react';

import { Lazy } from 'components/global/Lazy';

const LazyPostDetails = lazy(() => import('./PostDetails'));

const PostDetails = props => (
  <Lazy>
    <LazyPostDetails {...props} />
  </Lazy>
);

export default PostDetails;
