'use client';

import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import type { FC, ReactNode } from 'react';
import { ClientEnvProvider } from '@/context';
import { clientEnv } from '@/env/client-env';

export const ClientSideProviders: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ChakraProvider value={defaultSystem}>
      <ClientEnvProvider value={clientEnv}>{children}</ClientEnvProvider>
    </ChakraProvider>
  );
};
