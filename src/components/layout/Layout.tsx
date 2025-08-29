import { Header, Footer } from '@/components/layout';
import { Outlet } from 'react-router-dom';
import { CartSidebar } from '../cart/CartSidebar';

export default function Layout() {
  return (
    <div className='flex min-h-screen flex-col bg-neutral-400 font-sans font-semibold'>
      <Header />
      <CartSidebar />
      <main className='flex-grow'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
