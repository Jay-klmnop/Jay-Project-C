import { Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout';
import '@/index.css';

import {
  HomePage,
  ProductsPage,
  AboutPage,
  ContactPage,
  LikedPage,
  CartPage,
  ProfilePage,
} from '@/pages';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/liked' element={<LikedPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/profile' element={<ProfilePage />} />
      </Route>
    </Routes>
  );
}

export default App;
