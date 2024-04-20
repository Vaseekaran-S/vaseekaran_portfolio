
import ReactDOM from 'react-dom/client';
import './index.css';
import { Home } from './pages';
import { Layout } from './layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </Layout>
  </BrowserRouter>
);
