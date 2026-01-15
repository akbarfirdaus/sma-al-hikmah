import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="container mx-auto px-6">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
            
            {/* Brand Section */}
            <div className="md:col-span-4 lg:col-span-4 space-y-8">
                <div>
                     <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-serif font-bold text-2xl mb-4">
                        A
                    </div>
                    <h3 className="font-serif font-bold text-2xl text-gray-900">SMA Al-Hikmah</h3>
                    <p className="text-sm text-gray-500 mt-2">Si Manis Cerdas - Manis Imannya, Cerdas Intelektualnya.</p>
                </div>
                <div className="flex gap-4">
                    <a href="#" className="w-12 h-12 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                        <Instagram size={20} />
                    </a>
                    <a href="#" className="w-12 h-12 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                        <Facebook size={20} />
                    </a>
                    <a href="#" className="w-12 h-12 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                        <Youtube size={20} />
                    </a>
                </div>
            </div>

            {/* Links Section */}
            <div className="md:col-span-8 lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-12">
                 {/* Contact Us - Distinct Section */}
                 <div>
                    <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-primary mb-6">Hubungi Kami</h4>
                    <ul className="space-y-4">
                         <li className="flex items-start gap-3 text-sm text-gray-600">
                            <MapPin size={18} className="text-gray-400 shrink-0 mt-0.5" />
                            <span>
                                Jl. Marelan I Pasar IV<br />
                                Kel. Rengas Pulau, Kec. Medan Marelan<br />
                                Kota Medan, 20255
                            </span>
                        </li>
                        <li className="flex items-center gap-3 text-sm text-gray-600 group cursor-pointer hover:text-primary transition-colors">
                            <Phone size={18} className="text-gray-400 group-hover:text-primary transition-colors" />
                            <span>(061) 821-xxxx</span>
                        </li>
                        <li className="flex items-center gap-3 text-sm text-gray-600 group cursor-pointer hover:text-primary transition-colors">
                            <Mail size={18} className="text-gray-400 group-hover:text-primary transition-colors" />
                            <span>info@alhikmah.sch.id</span>
                        </li>
                    </ul>
                </div>

                {/* Jelajahi */}
                <div>
                    <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-gray-400 mb-6">Jelajahi</h4>
                    <ul className="space-y-3 text-sm text-gray-600">
                        <li><Link to="/about" className="hover:text-primary transition-colors">Tentang Kami</Link></li>
                        <li><Link to="/visi-misi" className="hover:text-primary transition-colors">Visi & Misi</Link></li>
                        <li><Link to="/buku" className="hover:text-primary transition-colors">Perpustakaan</Link></li>
                        <li><Link to="/berita" className="hover:text-primary transition-colors">Berita</Link></li>
                    </ul>
                </div>

                {/* Akademik */}
                <div>
                    <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-gray-400 mb-6">Akademik</h4>
                    <ul className="space-y-3 text-sm text-gray-600">
                        <li><span className="opacity-50 cursor-not-allowed">Kalender</span></li>
                        <li><span className="opacity-50 cursor-not-allowed">E-Learning</span></li>
                        <li><span className="opacity-50 cursor-not-allowed">Portal Guru</span></li>
                        <li><span className="opacity-50 cursor-not-allowed">Alumni</span></li>
                    </ul>
                </div>
            </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-400">
                &copy; {new Date().getFullYear()} SMA Swasta Al-Hikmah Medan.
            </p>
            <div className="flex gap-6 text-xs text-gray-400">
                <span className="cursor-pointer hover:text-gray-900 transition-colors">Privasi</span>
                <span className="cursor-pointer hover:text-gray-900 transition-colors">Syarat & Ketentuan</span>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;