import React, { lazy } from 'react';

import { Lazy } from 'components/global/Lazy';

const LazyBlog = lazy(() => import('./Blog'));

const Blog = props => (
  <Lazy>
    <LazyBlog {...props} />
  </Lazy>
);

export default Blog;
