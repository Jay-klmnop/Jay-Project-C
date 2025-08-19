import { Header, Footer } from '@/components/layout';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className='flex min-h-screen flex-col'>
      <Header />
      <main className='flex-grow'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
