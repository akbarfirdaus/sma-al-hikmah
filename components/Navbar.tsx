import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when route changes
  useEffect(() => {
    setIsProfileDropdownOpen(false);
    setIsMobileMenuOpen(false);
  }, [location]);

  const navClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors duration-300 hover:text-primary ${
      isActive ? 'text-primary' : 'text-institutional'
    }`;

  const mobileNavClass = ({ isActive }: { isActive: boolean }) =>
    `block text-lg font-medium py-2 transition-colors duration-300 hover:text-primary ${
      isActive ? 'text-primary' : 'text-institutional'
    }`;

  const isProfileActive = ['/about', '/visi-misi', '/struktur-organisasi'].includes(location.pathname);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled || isMobileMenuOpen
          ? 'bg-white/95 backdrop-blur-md border-gray-100 shadow-sm py-3'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-sm flex items-center justify-center text-primary font-serif font-bold text-xl">
                A
            </div>
          <div className="flex flex-col">
            <span className={`font-serif font-bold text-lg leading-tight ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`}>
              Al-Hikmah
            </span>
            <span className="text-[10px] uppercase tracking-widest text-muted">
              Medan
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={navClass}>Home</NavLink>
          
          {/* Dropdown Profil */}
          <div className="relative group">
            <button 
                className={`flex items-center gap-1 text-sm font-medium transition-colors duration-300 hover:text-primary ${isProfileActive ? 'text-primary' : 'text-institutional'}`}
            >
                Profil <ChevronDown size={14} />
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left">
                <div className="py-2">
                    <NavLink to="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary">Tentang Kami</NavLink>
                    <NavLink to="/visi-misi" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary">Visi & Misi</NavLink>
                    <NavLink to="/struktur-organisasi" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary">Struktur Organisasi</NavLink>
                </div>
            </div>
          </div>

          <NavLink to="/buku" className={navClass}>Buku</NavLink>
          <NavLink to="/berita" className={navClass}>Berita</NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg md:hidden h-screen overflow-y-auto pb-24">
          <div className="flex flex-col px-6 py-6 gap-2">
            <NavLink to="/" className={mobileNavClass}>Home</NavLink>
            
            {/* Mobile Profil Submenu */}
            <div className="py-2">
                <button 
                    onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                    className="flex items-center justify-between w-full text-lg font-medium text-institutional py-2"
                >
                    Profil <ChevronDown size={20} className={`transform transition-transform ${isProfileDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {isProfileDropdownOpen && (
                    <div className="pl-4 border-l-2 border-gray-100 mt-2 space-y-2">
                        <NavLink to="/about" className="block text-base text-gray-600 py-2">Tentang Kami</NavLink>
                        <NavLink to="/visi-misi" className="block text-base text-gray-600 py-2">Visi & Misi</NavLink>
                        <NavLink to="/struktur-organisasi" className="block text-base text-gray-600 py-2">Struktur Organisasi</NavLink>
                    </div>
                )}
            </div>

            <NavLink to="/buku" className={mobileNavClass}>Buku</NavLink>
            <NavLink to="/berita" className={mobileNavClass}>Berita</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;