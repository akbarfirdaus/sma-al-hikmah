import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import VisiMisi from './pages/VisiMisi';
import StrukturOrganisasi from './pages/StrukturOrganisasi';
import Buku from './pages/Buku';
import Berita from './pages/Berita';
import NewsDetail from './pages/NewsDetail';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-surface">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/visi-misi" element={<VisiMisi />} />
            <Route path="/struktur-organisasi" element={<StrukturOrganisasi />} />
            <Route path="/buku" element={<Buku />} />
            <Route path="/berita" element={<Berita />} />
            <Route path="/berita/:id" element={<NewsDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;