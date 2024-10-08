import { createRoot } from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import App from './Pages/App.jsx';
import ServicePage from './Pages/ServicePage';
import ServicesPage from './Pages/ServicesPage';
import Layout from './Layout/Layout.jsx';
import SpecificPhotoPage from './Pages/SpecificPhotoPage.jsx';
import GalleryPage from './Pages/GalleryPage.jsx';
import BookingPage from './Pages/BookingPage.jsx';
import ScrollToTop from './helpers/ScrollToTop.jsx';
import LocationPage from './Pages/LocationPage.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <>
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<App />} />
          <Route path='/services' element={<ServicesPage />} />
          <Route path='/services/:serviceName' element={<ServicePage />} />
          <Route path='/gallery' element={<GalleryPage />} />
          <Route path='/gallery/:photoName' element={<SpecificPhotoPage />} />
          <Route path='/book' element={<BookingPage />} />
          <Route path='/map' element={<LocationPage />} />
        </Route>
      </Routes>
    </HashRouter>
  </>,
);
