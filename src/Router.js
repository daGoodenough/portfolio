import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import AboutPage from './components/AboutPage';

const Router = () => (
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/about" element={<AboutPage />} />
  </Routes>
);

export default Router;
