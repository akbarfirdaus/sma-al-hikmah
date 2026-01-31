import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Calendar, ChevronRight, Star, Award, Globe, Users, TrendingUp, CheckCircle, ChevronLeft } from 'lucide-react';
import { SCHOOL_STATS, BOOKS, NEWS } from '../constants';

const Home: React.FC = () => {
  // Get data slices for previews
  const topBooks = BOOKS.slice(0, 6);
  const latestNews = NEWS.slice(0, 3);

  // --- SLIDER BANNER FUNCTIONALITY ---
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Daftar Gambar Banner (3 Image)
  const bannerImages = [
    "https://res.cloudinary.com/devdvgvsu/image/upload/v1769052414/banner1_co6fhh.png", // Banner 1 (User Provided)
    "https://res.cloudinary.com/devdvgvsu/image/upload/v1769052411/banner2_koh3y9.png", // Ilustrasi Sekolah 1
    "https://res.cloudinary.com/devdvgvsu/image/upload/v1769052409/banner3_axvqhl.png"  // Ilustrasi Siswa 2
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === bannerImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? bannerImages.length - 1 : prev - 1));
  };

  // Auto-slide effect (5 detik)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  // -----------------------------------

  return (
    <div className="w-full bg-surface">
      
      {/* Spacer agar konten tidak tertutup Navbar Fixed */}
      <div className="h-24 bg-white"></div>

      {/* --- BANNER SLIDER SECTION --- */}
      <section className="relative w-full h-[200px] sm:h-[300px] md:h-[450px] lg:h-[600px] overflow-hidden group bg-gray-200">
        
        {/* Slides Wrapper */}
        <div 
          className="w-full h-full flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {bannerImages.map((img, index) => (
            <div key={index} className="w-full h-full flex-shrink-0 relative">
              <img 
                src={img} 
                alt={`Banner Sekolah ${index + 1}`} 
                className="w-full h-full object-cover object-center"
              />
              {/* Optional: Overlay gradient tipis agar navbar tetap terlihat jelas jika transparan */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Tombol Panah Kiri */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/80 text-white hover:text-gray-900 p-2 md:p-3 rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 z-10"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Tombol Panah Kanan */}
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/80 text-white hover:text-gray-900 p-2 md:p-3 rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 z-10"
        >
          <ChevronRight size={24} />
        </button>

        {/* Indikator Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {bannerImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === idx ? 'bg-primary w-8' : 'bg-white/60 w-2 hover:bg-white'
              }`}
            />
          ))}
        </div>
      </section>

      {/* --- KONTEN UTAMA --- */}
      <div className="container mx-auto px-6 space-y-24 py-16">
        
        {/* Redesigned Bento Hero Section - Solid & Institutional */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* 1. Main Title Block (Large, Solid) */}
            <div className="lg:col-span-8 bg-institutional text-white rounded-[2.5rem] p-8 md:p-14 flex flex-col justify-between relative overflow-hidden min-h-[500px] border border-gray-900 shadow-xl">
                {/* Subtle Background Pattern */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                
                <div className="relative z-10 flex flex-col justify-center h-full">
                    <div className="mb-8">
                         <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-bold tracking-widest uppercase text-primary mb-6 backdrop-blur-sm">
                            <Star size={14} className="fill-current" />
                            <span>Terakreditasi A Unggul</span>
                        </span>
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] mb-8 tracking-tight">
                            Si Manis <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">Cerdas</span>
                        </h1>
                        <p className="text-gray-300 text-lg md:text-xl max-w-xl leading-relaxed font-normal">
                            Mewujudkan siswa yang manis imannya dan cerdas secara intelektual untuk bersaing di era globalisasi.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4 mt-4">
                        <Link to="/about" className="px-8 py-4 bg-primary text-institutional font-bold rounded-full transition-transform hover:scale-105 hover:bg-white flex items-center gap-2">
                            Profil Sekolah <ArrowRight size={18} />
                        </Link>
                         <Link to="/visi-misi" className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-full transition-colors hover:bg-white/10">
                            Visi & Misi
                        </Link>
                    </div>
                </div>
            </div>

            {/* 2. Visual Column (Right) */}
            <div className="lg:col-span-4 flex flex-col gap-6">
                
                {/* Top Image Card */}
                <div className="flex-grow bg-gray-100 rounded-[2.5rem] overflow-hidden relative min-h-[300px] group">
                     <img 
                        src="https://picsum.photos/600/800?random=10" 
                        alt="Suasana Belajar" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                     <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex items-center gap-2 text-white/90 mb-2">
                             <Users size={16} />
                             <span className="text-xs font-bold uppercase tracking-wider">Komunitas</span>
                        </div>
                        <p className="text-white font-serif text-xl italic leading-snug">"Paduan SMA, SMK, dan MA dalam satu atap."</p>
                     </div>
                </div>
                
                {/* Bottom Stat Card */}
                <div className="bg-white border border-gray-100 rounded-[2.5rem] p-8 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
                     <div>
                        <div className="flex items-baseline gap-1">
                             <span className="text-4xl font-serif font-bold text-gray-900">A</span>
                             <TrendingUp size={20} className="text-primary" />
                        </div>
                        <span className="text-sm text-gray-500 font-bold uppercase tracking-wide mt-1 block">Akreditasi</span>
                     </div>
                     <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center text-gray-400">
                        <Award size={24} />
                     </div>
                </div>

            </div>
        </section>

        {/* Bento Section: About & Stats */}
        <section>
             <div className="flex items-end justify-between mb-8 px-2">
                <div>
                    <h2 className="font-serif text-3xl md:text-4xl text-gray-900 font-bold">Tentang Kami</h2>
                    <p className="text-gray-500 font-sans mt-2">Profil dan pencapaian SMA Al-Hikmah.</p>
                </div>
                <Link to="/about" className="text-primary font-bold text-sm flex items-center hover:underline group">
                    Profil Lengkap <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1"/>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Main About Card (2x2) */}
                <div className="col-span-1 md:col-span-2 md:row-span-2 bg-white p-8 md:p-10 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-center">
                     <span className="text-xs font-bold tracking-widest text-primary uppercase mb-4 block">Konsep Unik</span>
                     <h3 className="font-serif text-2xl md:text-3xl text-gray-900 mb-6 leading-tight font-bold">
                        Konsep SMA serasa (SMK-MA-SMA Umum).
                     </h3>
                     <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                        Didirikan oleh Yayasan Perguruan Al-Hikmah, kami menyediakan pilihan pendidikan beragam. Siswa merasakan pendidikan umum, keterampilan komputer (SMK), dan pendalaman agama (MA).
                     </p>
                     <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                            <span className="font-serif font-bold text-gray-600">SK</span>
                        </div>
                        <span className="text-sm text-gray-500 font-bold">Izin Operasional 3 Maret 2016</span>
                     </div>
                </div>

                {/* Stats Cards */}
                {SCHOOL_STATS.map((stat, i) => (
                    <div key={i} className={`p-6 rounded-[2rem] flex flex-col justify-between h-48 transition-transform duration-300 hover:-translate-y-1 ${
                        i === 0 ? 'bg-primary text-institutional shadow-lg shadow-primary/20' : 
                        i === 3 ? 'bg-secondary text-white shadow-lg shadow-secondary/20' : 
                        'bg-white border border-gray-100 shadow-sm'
                    }`}>
                        <div className="flex justify-between items-start">
                             <span className={`font-sans text-xs font-bold uppercase tracking-wider ${i === 0 ? 'text-institutional/80' : i === 3 ? 'text-white/80' : 'text-gray-400'}`}>{stat.label}</span>
                        </div>
                        {/* Conditional font size: If the label is 'Status', use smaller font */}
                        <span className={`font-serif font-bold ${stat.label === 'Status' ? 'text-2xl md:text-3xl' : 'text-4xl md:text-5xl'} ${i === 0 ? 'text-institutional' : i === 3 ? 'text-white' : 'text-gray-900'}`}>
                            {stat.value}
                        </span>
                    </div>
                ))}
            </div>
        </section>

        {/* Bento Section: Library (Books) */}
        <section>
            <div className="flex items-end justify-between mb-8 px-2">
                <div>
                    <h2 className="font-serif text-3xl md:text-4xl text-gray-900 font-bold">Pustaka Digital</h2>
                    <p className="text-gray-500 font-sans mt-2">Buku-buku populer dan referensi akademik terbaru.</p>
                </div>
                <Link to="/buku" className="text-primary font-bold text-sm flex items-center hover:underline group">
                    Lihat Katalog <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1"/>
                </Link>
            </div>

            {/* Updated Grid: 3 cols on Large, 2 cols on Tablet, 1 col on Mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {topBooks.map((book, index) => (
                    <Link 
                        key={book.id} 
                        to="/buku" 
                        // Hide 5th and 6th items (index 4 and 5) on Mobile and Tablet (< lg)
                        // This ensures: Mobile = 4 items, Tablet = 4 items, Desktop = 6 items
                        className={`bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 flex h-44 group cursor-pointer hover:-translate-y-1 ${index > 3 ? 'hidden lg:flex' : 'flex'}`}
                    >
                        {/* Image Section - Left Side */}
                        <div className="w-32 h-full relative flex-shrink-0 bg-gray-100">
                            <img 
                                src={book.coverImage} 
                                alt={book.title} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                             {/* Category Label */}
                            <span className="absolute top-2 left-2 px-2 py-1 bg-white/95 backdrop-blur rounded-md text-[9px] font-bold uppercase tracking-wider text-gray-800 shadow-sm">
                                {book.category}
                            </span>
                        </div>

                        {/* Content Section - Right Side */}
                        <div className="p-4 flex flex-col flex-grow min-w-0 justify-between">
                            <div>
                                <div className="flex justify-between items-start mb-1">
                                    <h4 className="font-serif font-bold text-gray-900 leading-tight line-clamp-2 text-base group-hover:text-primary transition-colors">
                                        {book.title}
                                    </h4>
                                    {/* Status Badge Top Right */}
                                    {book.status === 'Tersedia' ? (
                                        <span className="flex-shrink-0 text-[9px] font-bold text-white bg-primary px-1.5 py-0.5 rounded-full ml-1">Ada</span>
                                    ) : (
                                        <span className="flex-shrink-0 text-[9px] font-bold text-white bg-secondary px-1.5 py-0.5 rounded-full ml-1">Pinjam</span>
                                    )}
                                </div>
                                <p className="text-[10px] font-bold text-gray-400 mb-2 uppercase tracking-wide">SMA Al-Hikmah</p>
                                
                                <div className="space-y-0.5 text-xs text-gray-500">
                                    <p className="truncate text-[11px]"><span className="font-semibold text-gray-700">Penulis:</span> {book.author}</p>
                                </div>
                            </div>

                            <div className="pt-2 border-t border-gray-100 flex items-center justify-between mt-1">
                                <span className="text-[10px] font-bold text-primary flex items-center gap-1">
                                    <CheckCircle size={10} /> Versi Digital
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>

        {/* Bento Section: News */}
        <section>
             <div className="flex items-end justify-between mb-8 px-2">
                <div>
                    <h2 className="font-serif text-3xl md:text-4xl text-gray-900 font-bold">Warta Sekolah</h2>
                    <p className="text-gray-500 font-sans mt-2">Berita terkini, prestasi, dan pengumuman.</p>
                </div>
                <Link to="/berita" className="text-primary font-bold text-sm flex items-center hover:underline group">
                    Semua Berita <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1"/>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
                {/* Large Featured News */}
                {latestNews.length > 0 && (
                    <Link to={`/berita/${latestNews[0].id}`} className="md:col-span-2 md:row-span-2 group relative rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:ring-4 ring-primary/10">
                        <img 
                            src={latestNews[0].image} 
                            alt={latestNews[0].title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                             <span className="inline-block px-4 py-1 bg-primary text-institutional text-xs font-bold uppercase tracking-wider rounded-full mb-4 shadow-lg">
                                {latestNews[0].category}
                             </span>
                             <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-white mb-4 leading-tight font-bold group-hover:text-primary transition-colors">
                                {latestNews[0].title}
                             </h3>
                             <p className="text-white/80 line-clamp-2 max-w-xl text-sm md:text-base mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                {latestNews[0].excerpt}
                             </p>
                             <div className="flex items-center gap-4 text-white/70 text-xs font-medium border-t border-white/10 pt-4">
                                <div className="flex items-center gap-2">
                                    <Calendar size={14} />
                                    <span>{latestNews[0].date}</span>
                                </div>
                                <div className="flex items-center gap-1 text-primary font-bold">
                                    <span>Baca Selengkapnya</span>
                                    <ArrowRight size={14} />
                                </div>
                             </div>
                        </div>
                    </Link>
                )}

                {/* Side News Items */}
                {latestNews.slice(1).map((item) => (
                    <Link key={item.id} to={`/berita/${item.id}`} className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col relative overflow-hidden group hover:-translate-y-2">
                         <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-full -mr-8 -mt-8 transition-transform duration-500 group-hover:scale-125 group-hover:bg-primary/5"></div>
                         
                         <div className="relative z-10 flex flex-col h-full">
                            <div className="mb-4">
                                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-[10px] font-bold uppercase tracking-wide mb-4 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                    {item.category}
                                </span>
                                <h4 className="font-serif text-xl text-gray-900 leading-snug font-bold group-hover:text-primary transition-colors line-clamp-3">
                                    {item.title}
                                </h4>
                            </div>
                            
                            <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                                <span className="text-xs text-gray-400">{item.date}</span>
                                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-gray-400 group-hover:text-primary transition-colors px-3 py-1 rounded-full group-hover:bg-primary/5">
                                    Baca <ChevronRight size={14} />
                                </div>
                            </div>
                         </div>
                    </Link>
                ))}
            </div>
        </section>

        {/* Footer Quote */}
        <section className="py-12 flex justify-center">
             <blockquote className="font-serif text-2xl text-center max-w-3xl leading-relaxed text-gray-400 font-medium">
                  "Pendidikan bukan hanya tentang mengisi wadah, melainkan menyalakan api keingintahuan."
             </blockquote>
        </section>

      </div>
    </div>
  );
};

export default Home;