
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';

import { Home } from './pages';
import { Layout } from './layout';
import Projects from './pages/projects';
import ProjectSingle from './pages/projects/single';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/projects/:id" element={<ProjectSingle/>}/>
      </Routes>
    </Layout>
  </BrowserRouter>
);
