import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SiteNavbar from './components/Navbar';
import Home from './pages/Home';
import Resume from './pages/Resume';

export default function App() {
  return (
    <BrowserRouter>
      <SiteNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
}
