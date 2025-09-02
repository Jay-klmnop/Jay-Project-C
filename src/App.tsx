import { Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from './RTK/store';
import { useEffect } from 'react';
import { fetchProducts } from './RTK';

import {
  HomePage,
  ProductsPage,
  AboutPage,
  ContactPage,
  LikedPage,
  CartPage,
  ProfilePage,
  ProductDetailPage,
} from '@/pages';
import '@/index.css';

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const status = useSelector((state: RootState) => state.products.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

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
        <Route path='/products/:id' element={<ProductDetailPage />} />
      </Route>
    </Routes>
  );
}

export default App;
