import React, { lazy } from 'react';

import { Lazy } from 'components/global/Lazy';

const LazyTemplateName = lazy(() => import('./TemplateName'));

const TemplateName = props => (
  <Lazy>
    <LazyTemplateName {...props} />
  </Lazy>
);

export default TemplateName;
