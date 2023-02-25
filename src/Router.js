import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import ResumePage from './components/ResumePage';

const Router = () => (
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/resume" element={<ResumePage />} />
  </Routes>
);

export default Router;
