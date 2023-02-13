import React from 'react';
import { Suspense } from 'react';

export const Lazy = ({ children }) => {
  return <Suspense fallback={'Loader...'}>{children}</Suspense>;
};
