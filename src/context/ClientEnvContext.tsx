'use client';

import { type FC, type ReactNode, createContext, useContext } from 'react';
import type { clientEnv } from '../env/client-env';

type ClientEnv = typeof clientEnv;

const ClientEnvContext = createContext<ClientEnv | null>(null);

export const useClientEnv = (): ClientEnv => {
  const context = useContext(ClientEnvContext);
  if (!context) throw new Error('useClientEnv は ClientEnvProvider の内側で使ってください。');
  return context;
};

export const ClientEnvProvider: FC<{
  readonly children: ReactNode;
  readonly value: ClientEnv;
}> = ({ children, value }) => {
  return <ClientEnvContext.Provider value={value}>{children}</ClientEnvContext.Provider>;
};
