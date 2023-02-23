import React from 'react';
import { Suspense } from 'react';
import { Loader } from '../Loader';

export const Lazy = ({ children }) => {
  return <Suspense fallback={<Loader />}>{children}</Suspense>;
};
