import React from 'react';
import { NEWS } from '../constants';
import { ArrowRight, Calendar, Tag, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Berita: React.FC = () => {
  const featuredNews = NEWS.find(n => n.featured) || NEWS[0];
  const otherNews = NEWS.filter(n => n.id !== featuredNews.id);

  return (
    <div className="min-h-screen pt-32 pb-24 bg-surface">
      <div className="container mx-auto px-6 space-y-16">
        
        <div className="text-center max-w-2xl mx-auto">
             <span className="font-sans font-bold text-xs tracking-widest text-primary uppercase mb-3 block">Warta Sekolah</span>
             <h1 className="font-serif text-5xl text-gray-900">Berita & Pengumuman</h1>
        </div>

        {/* Featured News - Large Bento Tile */}
        <Link to={`/berita/${featuredNews.id}`} className="group relative block w-full rounded-[3rem] overflow-hidden min-h-[500px] shadow-sm hover:shadow-2xl transition-all duration-500">
             <img 
                src={featuredNews.image} 
                alt={featuredNews.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full lg:w-3/4">
                <div className="flex items-center gap-3 mb-6">
                    <span className="px-4 py-1 bg-primary text-white text-xs font-bold uppercase tracking-wider rounded-full">
                        {featuredNews.category}
                    </span>
                    <span className="text-white/80 text-sm flex items-center gap-2">
                        <Calendar size={14} /> {featuredNews.date}
                    </span>
                </div>
                <h2 className="font-serif text-3xl md:text-5xl text-white leading-tight mb-6 group-hover:text-primary-50 transition-colors">
                    {featuredNews.title}
                </h2>
                <p className="font-sans text-lg text-white/80 leading-relaxed mb-8 line-clamp-2 md:line-clamp-none max-w-2xl">
                    {featuredNews.excerpt}
                </p>
                <span className="inline-flex items-center px-6 py-3 rounded-full bg-white/20 backdrop-blur border border-white/30 text-white text-sm font-bold hover:bg-white hover:text-institutional transition-all">
                    Baca Selengkapnya <ArrowRight size={16} className="ml-2" />
                </span>
            </div>
        </Link>

        {/* News Grid - Bento Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherNews.map((item) => (
                <Link key={item.id} to={`/berita/${item.id}`} className="bg-white p-6 rounded-[2.5rem] border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 flex flex-col group hover:-translate-y-2">
                    <div className="relative aspect-video overflow-hidden rounded-[2rem] mb-6 bg-gray-100">
                         <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                         <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur rounded-full text-[10px] font-bold uppercase tracking-wide text-gray-800">
                            {item.category}
                        </div>
                    </div>
                    
                    <div className="flex-grow px-2">
                        <div className="flex items-center gap-2 text-xs font-sans text-gray-400 mb-3">
                             <Calendar size={12} />
                             <span>{item.date}</span>
                        </div>
                        <h3 className="font-serif text-xl text-gray-900 leading-snug mb-3 group-hover:text-primary transition-colors line-clamp-2">
                            {item.title}
                        </h3>
                        <p className="font-sans text-sm text-gray-600 leading-relaxed line-clamp-3 mb-4">
                            {item.excerpt}
                        </p>
                    </div>

                    <div className="mt-4 px-2 pt-4 border-t border-gray-50 flex items-center justify-between text-gray-400 group-hover:text-primary transition-colors">
                        <span className="text-xs font-bold uppercase tracking-wide">Baca Artikel</span>
                        <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                            <ChevronRight size={14} />
                        </div>
                    </div>
                </Link>
            ))}
        </div>

        {/* Archive Button */}
        <div className="mt-20 text-center">
             <button className="inline-block px-8 py-4 rounded-full border border-gray-200 text-gray-500 font-medium hover:bg-gray-50 hover:text-gray-900 transition-colors">
                 Lihat Arsip Berita
             </button>
        </div>

      </div>
    </div>
  );
};

export default Berita;