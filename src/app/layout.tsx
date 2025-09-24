import './globals.css';
import { Pretendard } from '@/assets';
import { CartSidebar } from '@/components/cart';
import { Footer, Header } from '@/components/layout';
import { AppProviders } from '@/components/providers';
import { SearchModal } from '@/components/search';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${Pretendard.variable} font-sans`}>
        <AppProviders>
          <Header />
          <SearchModal />
          <CartSidebar />
          <main>{children}</main>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
