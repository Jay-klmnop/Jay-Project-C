'use client';

import { ThemeProvider } from 'next-themes';
import { CartProvider } from './CartProvider';
import { QueryProvider } from './QueryProvider';
import { RTKProvider } from './RTKProvider';

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <QueryProvider>
      <ThemeProvider defaultTheme='system' attribute='class' enableSystem>
        <RTKProvider>
          <CartProvider>{children}</CartProvider>
        </RTKProvider>
      </ThemeProvider>
    </QueryProvider>
  );
}
