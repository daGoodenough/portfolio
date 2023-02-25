import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import ResumePage from './components/ResumePage';
import ProjectsPage from './components/ProjectsPage';

const Router = () => (
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/resume" element={<ResumePage />} />
    <Route exact path="/projects" element={<ProjectsPage />} />
  </Routes>
);

export default Router;
