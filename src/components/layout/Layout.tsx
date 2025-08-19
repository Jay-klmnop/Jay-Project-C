import Header from '@/components/layout/header/Header';
import Footer from '@/components/layout/footer/Footer';
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
