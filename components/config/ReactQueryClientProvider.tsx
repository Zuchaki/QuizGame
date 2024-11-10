'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { FC, PropsWithChildren } from 'react';

const ReactQueryClientProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      {children}
    </QueryClientProvider>
  );
};
export default ReactQueryClientProvider;
