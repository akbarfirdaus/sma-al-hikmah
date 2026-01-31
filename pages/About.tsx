import React from 'react';
import { TEACHERS } from '../constants';
import { Quote, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-surface min-h-screen">
      <div className="container mx-auto px-6 space-y-24">
        
        {/* Header Block - Bento */}
        <div className="bg-white p-12 rounded-[2.5rem] shadow-sm text-center border border-gray-100">
             <h1 className="font-serif text-5xl md:text-6xl text-gray-900 mb-6">Tentang Kami</h1>
             <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Bento Grid: History, Motto, Headmaster */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* 1. History (Large) */}
            <div className="md:col-span-2 bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
                <h3 className="font-sans text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">Sejarah & Profil Singkat</h3>
                <p className="font-serif text-xl leading-relaxed text-gray-800 mb-6">
                    SMA Swasta Al-Hikmah Medan merupakan sekolah yang didirikan oleh Yayasan untuk menyediakan pilihan pendidikan yang beragam di Marelan.
                </p>
                <div className="font-sans text-gray-600 leading-relaxed space-y-4 text-sm md:text-base">
                    <p>
                        SMA Swasta Al-Hikmah Medan Mendapatkan SK Pendirian dan Izin Operasional pada 3 Maret 2016, sekolah ini menawarkan konsep unik: <strong>"SMA serasa (SMK-MA-SMA Umum)"</strong>. Siswa dapat merasakan pendidikan umum, keahlian kejuruan (komputer), dan pendalaman agama sekaligus.
                    </p>
                    <p>
                        Berlokasi di Jl. Marelan I Pasar IV, Rengas Pulau, sekolah kami telah terakreditasi 'A' (Unggul) dan aktif dalam berbagai kegiatan sosial keagamaan serta ekstrakurikuler.
                    </p>
                </div>
            </div>

            {/* 2. Motto (Distinct Block) */}
            <div className="bg-secondary text-white p-10 rounded-[2.5rem] shadow-lg shadow-secondary/20 flex flex-col justify-center relative overflow-hidden">
                <Quote size={64} className="absolute top-4 right-4 text-white/20" />
                <span className="text-xs font-bold uppercase tracking-widest text-white/80 mb-4 block">Slogan Sekolah</span>
                <h2 className="font-serif text-3xl md:text-4xl leading-tight">
                    "Si Manis Cerdas"
                </h2>
                <div className="mt-8 pt-6 border-t border-white/20">
                    <p className="text-sm text-white/90">
                        Mewujudkan siswa yang <strong>manis imannya</strong> dan juga <strong>cerdas secara intelektual</strong> agar dapat bersaing di era globalisasi.
                    </p>
                </div>
            </div>

            {/* 3. Headmaster Image */}
            <div className="relative rounded-[2.5rem] overflow-hidden min-h-[400px]">
                <img 
                    src="https://picsum.photos/600/700?random=50" 
                    alt="Kepala Sekolah" 
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                    <p className="font-serif text-lg italic">"Pendidikan berkualitas untuk masa depan cerah."</p>
                </div>
            </div>

             {/* 4. Headmaster Text */}
             <div className="md:col-span-2 bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col justify-center">
                 <div className="flex items-center gap-4 mb-6">
                     <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                         N
                     </div>
                     <div>
                        <h2 className="font-serif text-3xl text-gray-900">Nuriadi, S. Pd. I</h2>
                        <span className="text-primary font-bold tracking-widest text-xs uppercase block">Kepala Sekolah</span>
                     </div>
                 </div>
                <p className="text-gray-600 leading-relaxed">
                    Di bawah kepemimpinan Bapak Nuriadi, SMA Swasta Al-Hikmah terus berkomitmen memadukan rasa SMK, Madrasah Aliyah, dan SMA Umum dalam satu atap pendidikan yang harmonis dan berprestasi.
                </p>
            </div>

        </section>

        {/* Teachers Bento Grid */}
        <section>
          <div className="flex items-center justify-between mb-8 px-2">
               <h3 className="font-serif text-3xl text-gray-900">Struktur Organisasi</h3>
               <Link to="/struktur-organisasi" className="group flex items-center gap-2 text-primary font-bold text-sm hover:underline">
                  Lihat Lengkap <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
               </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEACHERS.map((teacher) => (
                <div key={teacher.id} className="group bg-white p-5 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 flex items-center h-full hover:-translate-y-1">
                    <div className="w-16 h-16 flex-shrink-0 rounded-full overflow-hidden border-2 border-gray-50 bg-gray-100 shadow-inner">
                        <img 
                            src={teacher.image} 
                            alt={teacher.name} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>
                    <div className="ml-4 min-w-0">
                        <h4 className="font-serif font-bold text-gray-900 text-sm leading-tight mb-1 group-hover:text-primary transition-colors line-clamp-2">
                            {teacher.name}
                        </h4>
                        <p className="font-sans text-[10px] text-primary font-bold uppercase tracking-wider truncate mb-0.5">
                            {teacher.role}
                        </p>
                        <p className="font-sans text-xs text-gray-400 truncate">
                            {teacher.expertise}
                        </p>
                    </div>
                </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;