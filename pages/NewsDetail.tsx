import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { NEWS } from '../constants';
import { Calendar, Tag, ArrowLeft, Share2 } from 'lucide-react';

const NewsDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const newsItem = NEWS.find((item) => item.id === id);

  if (!newsItem) {
    return (
      <div className="min-h-screen pt-32 pb-24 container mx-auto px-6 text-center">
        <h2 className="text-2xl font-serif text-gray-900">Berita tidak ditemukan</h2>
        <Link to="/berita" className="text-primary mt-4 inline-block hover:underline">
          Kembali ke Daftar Berita
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        {/* Navigation */}
        <div className="flex justify-between items-center mb-8">
            <Link to="/berita" className="flex items-center text-gray-500 hover:text-primary transition-colors text-sm font-medium">
                <ArrowLeft size={18} className="mr-2" /> Kembali
            </Link>
            <button className="flex items-center text-gray-500 hover:text-primary transition-colors text-sm font-medium">
                <Share2 size={18} className="mr-2" /> Bagikan
            </button>
        </div>

        {/* Article Header */}
        <div className="bg-white p-8 md:p-12 lg:p-16 rounded-[2.5rem] border border-gray-100 shadow-sm mb-8">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10">
                <div className="max-w-4xl">
                    <div className="flex flex-wrap gap-4 mb-6 text-sm">
                        <span className="flex items-center gap-2 text-primary font-bold bg-primary/10 px-4 py-1.5 rounded-full uppercase tracking-wider text-xs">
                            <Tag size={14} /> {newsItem.category}
                        </span>
                        <span className="flex items-center gap-2 text-gray-500 font-medium">
                            <Calendar size={16} /> {newsItem.date}
                        </span>
                    </div>
                    <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-gray-900 leading-[1.1] font-bold">
                        {newsItem.title}
                    </h1>
                </div>
            </div>

            <div className="relative aspect-video w-full rounded-[2rem] overflow-hidden mb-12 shadow-md">
                <img 
                    src={newsItem.image} 
                    alt={newsItem.title} 
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="max-w-5xl mx-auto">
                <div className="prose prose-lg md:prose-xl max-w-none prose-headings:font-serif prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-loose prose-a:text-primary prose-a:font-bold font-sans">
                    <p className="lead text-2xl text-gray-800 italic border-l-4 border-primary pl-6 mb-10 font-serif">
                        {newsItem.excerpt}
                    </p>
                    {/* Simulated Content for Demo */}
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                    <h3>Dampak Positif bagi Siswa</h3>
                    <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;