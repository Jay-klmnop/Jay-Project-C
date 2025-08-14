import Header from './header/Header';
import Footer from './footer/Footer';
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
