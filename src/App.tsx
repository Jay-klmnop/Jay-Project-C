import { Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout';
import '@/index.css';

import {
  HomePage,
  AboutPage,
  ContactPage,
  BlogPage,
  LikedPage,
  CartPage,
  ProfilePage,
  PhonesPage,
  ComputersPage,
  SmartWatchesPage,
  CamerasPage,
  HeadphonesPage,
  GamingPage,
} from '@/pages';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/liked' element={<LikedPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/phones' element={<PhonesPage />} />
        <Route path='/computers' element={<ComputersPage />} />
        <Route path='/smartwatches' element={<SmartWatchesPage />} />
        <Route path='/cameras' element={<CamerasPage />} />
        <Route path='/headphones' element={<HeadphonesPage />} />
        <Route path='/gaming' element={<GamingPage />} />
      </Route>
    </Routes>
  );
}

export default App;
