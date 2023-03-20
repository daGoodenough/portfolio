import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import ResumePage from './components/ResumePage';
import ProjectsPage from './components/ProjectsPage';
import LiPostsPage from './components/LiPostsPage';

const Router = () => (
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/resume" element={<ResumePage />} />
    <Route exact path="/projects" element={<ProjectsPage />} />
    <Route exact path="/li-posts" element={<LiPostsPage />} />
  </Routes>
);

export default Router;
