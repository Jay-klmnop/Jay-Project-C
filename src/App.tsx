import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import "./index.css";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import LikedPage from "./pages/LikedPage";
import CartPage from "./pages/CartPage";
import ProfilePage from "./pages/ProfilePage";
import PhonesPage from "./pages/PhonesPage";
import ComputersPage from "./pages/ComputersPage";
import SmartWatchesPage from "./pages/SmartWatches";
import CameraPage from "./pages/CamerasPage";
import HeadphonesPage from "./pages/HeadphonesPage";
import GamingPage from "./pages/GamingPage";

function App() {
  const AppLayout = () => {
    return <Layout />;
  };
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/liked" element={<LikedPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/phones" element={<PhonesPage />} />
        <Route path="/computers" element={<ComputersPage />} />
        <Route path="/smartwatches" element={<SmartWatchesPage />} />
        <Route path="/cameras" element={<CameraPage />} />
        <Route path="/headphones" element={<HeadphonesPage />} />
        <Route path="/gaming" element={<GamingPage />} />
      </Route>
    </Routes>
  );
}

export default App;
