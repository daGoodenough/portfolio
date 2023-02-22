import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';

const Router = () => (
  <Routes>
    <Route exact path="/" element={<Home />} />
  </Routes>
);

export default Router;
