'use client';

import { Provider } from 'react-redux';
import { store } from '@/RTK/store';

export function RTKProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
