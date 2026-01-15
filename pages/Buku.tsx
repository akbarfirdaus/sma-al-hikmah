import React, { useState, useMemo } from 'react';
import { Search, X, CheckCircle, Clock, BookOpen, MapPin, Star } from 'lucide-react';
import { BOOKS, BOOK_CATEGORIES, BOOK_GRADES } from '../constants';
import { Book } from '../types';

const Buku: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [selectedGrade, setSelectedGrade] = useState('Semua');
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const filteredBooks = useMemo(() => {
    return BOOKS.filter((book) => {
      const matchesSearch =
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.isbn.includes(searchQuery);
      
      const matchesCategory = selectedCategory === 'Semua' || book.category === selectedCategory;
      const matchesGrade = selectedGrade === 'Semua' || book.gradeLevel === selectedGrade;

      return matchesSearch && matchesCategory && matchesGrade;
    });
  }, [searchQuery, selectedCategory, selectedGrade]);

  return (
    <div className="min-h-screen pt-32 pb-24 bg-surface">
      <div className="container mx-auto px-6">
        
        {/* Header Bento */}
        <div className="bg-institutional text-white p-10 rounded-[2.5rem] shadow-lg mb-12 flex flex-col md:flex-row items-end justify-between gap-6">
           <div className="max-w-2xl">
                <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">Katalog Digital</span>
                <h1 className="font-serif text-4xl text-white mb-4">Perpustakaan Sekolah</h1>
                <p className="text-gray-400 font-sans">
                    Akses koleksi buku referensi, sastra, dan modul pembelajaran untuk menunjang kegiatan akademik siswa.
                </p>
           </div>
           <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-2xl">
               <span className="text-2xl font-serif font-bold text-white block">{BOOKS.length}</span>
               <span className="text-xs text-gray-300 uppercase tracking-wider">Total Koleksi</span>
           </div>
        </div>

        {/* Controls Bento - Sticky Updated */}
        <div className="bg-white/95 backdrop-blur-md p-4 rounded-[2rem] shadow-md border border-gray-100 mb-12 sticky top-20 md:top-24 z-40 transition-all duration-300">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                
                {/* Search */}
                <div className="md:col-span-6 lg:col-span-5 relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Search size={18} className="text-gray-400" />
                    </div>
                    <input
                        type="text"
                        className="block w-full pl-11 pr-4 py-3 border-none rounded-[1.5rem] bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-primary/5 focus:ring-2 focus:ring-primary/50 transition-colors text-sm font-sans"
                        placeholder="Cari judul, penulis, atau ISBN..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                {/* Filters */}
                <div className="md:col-span-3 lg:col-span-3">
                     <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="block w-full py-3 px-4 border-none bg-gray-50 rounded-[1.5rem] focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm font-sans text-gray-600 cursor-pointer hover:bg-gray-100 transition-colors"
                     >
                        {BOOK_CATEGORIES.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
                     </select>
                </div>
                <div className="md:col-span-3 lg:col-span-2">
                     <select
                        value={selectedGrade}
                        onChange={(e) => setSelectedGrade(e.target.value)}
                        className="block w-full py-3 px-4 border-none bg-gray-50 rounded-[1.5rem] focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm font-sans text-gray-600 cursor-pointer hover:bg-gray-100 transition-colors"
                     >
                        {BOOK_GRADES.map((grade) => <option key={grade} value={grade}>{grade}</option>)}
                     </select>
                </div>
            </div>
        </div>

        {/* Results Grid Bento */}
        {filteredBooks.length > 0 ? (
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredBooks.map((book) => (
                    <div 
                        key={book.id} 
                        onClick={() => setSelectedBook(book)}
                        className="bg-white p-4 rounded-[2.5rem] border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 flex flex-col cursor-pointer group hover:-translate-y-2"
                    >
                        {/* Image */}
                        <div className="relative aspect-[2/3] overflow-hidden bg-gray-100 rounded-[2rem] mb-4 shadow-inner">
                            <img 
                                src={book.coverImage} 
                                alt={book.title} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            {/* Status Badge */}
                            <div className="absolute top-3 right-3">
                                <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide shadow-sm ${
                                    book.status === 'Tersedia' 
                                    ? 'bg-white text-primary' 
                                    : 'bg-white text-secondary'
                                }`}>
                                    {book.status}
                                </span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="px-2 flex flex-col flex-grow">
                            <div className="mb-2">
                                <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                                    {book.category}
                                </span>
                            </div>
                            <h3 className="font-serif text-lg text-gray-900 leading-snug mb-1 group-hover:text-primary transition-colors line-clamp-2">
                                {book.title}
                            </h3>
                            <p className="font-sans text-sm text-gray-500 mb-4">{book.author}</p>
                            
                            <div className="mt-auto pt-4 border-t border-gray-50">
                                <span className="w-full block py-2 rounded-xl text-center text-xs font-bold uppercase tracking-wide bg-gray-50 text-gray-400 group-hover:bg-primary group-hover:text-white transition-colors">
                                    Lihat Detail
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        ) : (
            <div className="text-center py-24 bg-white rounded-[2.5rem] border border-gray-100">
                <p className="font-serif text-2xl text-gray-400">Tidak ada buku yang ditemukan.</p>
                <p className="text-gray-500 mt-2">Coba ubah kata kunci atau filter pencarian Anda.</p>
            </div>
        )}

      </div>

      {/* Modal Details - Refined */}
      {selectedBook && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <div 
                className="absolute inset-0 bg-institutional/60 backdrop-blur-sm transition-opacity" 
                onClick={() => setSelectedBook(null)}
            ></div>
            
            <div className="bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto relative rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row custom-scrollbar">
                <button 
                    onClick={() => setSelectedBook(null)}
                    className="absolute top-6 right-6 z-10 p-2 bg-white/50 backdrop-blur rounded-full hover:bg-red-50 hover:text-red-500 transition-colors"
                >
                    <X size={24} />
                </button>

                {/* Modal Image Section */}
                <div className="w-full md:w-5/12 bg-gray-50 p-10 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${selectedBook.coverImage})`, backgroundSize: 'cover', filter: 'blur(20px)' }}></div>
                    <img 
                        src={selectedBook.coverImage} 
                        alt={selectedBook.title} 
                        className="w-3/4 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] object-cover rounded-lg relative z-10 transform transition-transform hover:scale-105 duration-500"
                    />
                </div>

                {/* Modal Content Section */}
                <div className="w-full md:w-7/12 p-10 md:p-14">
                    <div className="flex flex-wrap gap-2 mb-6">
                        <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wide">
                            {selectedBook.category}
                        </span>
                        <span className="px-4 py-1.5 bg-gray-100 text-gray-600 rounded-full text-xs font-bold uppercase tracking-wide">
                            {selectedBook.gradeLevel}
                        </span>
                    </div>
                    
                    <h2 className="font-serif text-3xl md:text-5xl text-gray-900 mb-4 leading-tight">
                        {selectedBook.title}
                    </h2>
                    <p className="text-xl text-gray-500 font-serif italic mb-10 pb-10 border-b border-gray-100">
                        karya {selectedBook.author}
                    </p>

                    <div className="space-y-8 mb-10">
                        <div>
                            <h4 className="font-sans font-bold text-sm uppercase tracking-wider text-gray-400 mb-3">Sinopsis</h4>
                            <p className="text-gray-700 leading-relaxed text-base font-sans">
                                {selectedBook.synopsis}
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6 bg-gray-50 p-6 rounded-3xl">
                        <div className="flex items-start gap-3">
                            <BookOpen size={20} className="text-gray-400 mt-1" />
                            <div>
                                <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">ISBN</p>
                                <p className="text-sm font-mono font-medium text-gray-700">{selectedBook.isbn}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <MapPin size={20} className="text-gray-400 mt-1" />
                            <div>
                                <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Lokasi Rak</p>
                                <p className="text-sm font-medium text-gray-700">{selectedBook.shelfLocation}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 col-span-2 pt-4 border-t border-gray-200">
                             <div className={`w-3 h-3 rounded-full ${selectedBook.status === 'Tersedia' ? 'bg-primary' : 'bg-secondary'}`}></div>
                             <p className={`text-base font-bold ${selectedBook.status === 'Tersedia' ? 'text-primary' : 'text-secondary'}`}>
                                {selectedBook.status === 'Tersedia' ? 'Buku Tersedia untuk Dipinjam' : 'Buku Sedang Dipinjam'}
                             </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default Buku;