import React from 'react';
import { Target, Compass, BookOpen, Users, Globe, Award, Laptop } from 'lucide-react';

const VisiMisi: React.FC = () => {
  const missions = [
    {
      icon: <Users size={24} />,
      text: "Membentuk siswa paham dengan ajaran agama dan dapat mengamalkannya dalam kehidupan sehari-hari."
    },
    {
      icon: <Award size={24} />,
      text: "Menyajikan program pembelajaran yang bermutu untuk mempersiapkan siswa agar dapat bersaing masuk ke perguruan tinggi negeri."
    },
    {
      icon: <BookOpen size={24} />,
      text: "Menyiapkan sarana dan prasarana pembelajaran yang memadai sesuai dengan tuntutan perkembangan zaman."
    },
    {
      icon: <Laptop size={24} />,
      text: "Menjadikan siswa yang memiliki keterampilan dalam bidang komputer."
    },
    {
      icon: <Target size={24} />,
      text: "Membimbing siswa untuk mengembangkan bakat dan minat dalam bidang seni, olahraga dan organisasi."
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 bg-surface">
      <div className="container mx-auto px-6 space-y-12">
        
        {/* Visi Bento Card */}
        <section className="bg-white p-12 rounded-[2.5rem] border border-gray-100 shadow-sm text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-secondary"></div>
            <div className="inline-block p-4 rounded-full bg-primary/10 text-primary mb-6">
                <Target size={32} />
            </div>
            <h1 className="font-sans font-bold text-sm tracking-[0.2em] text-gray-400 uppercase mb-8">Visi Sekolah</h1>
            <p className="font-serif text-3xl md:text-5xl lg:text-5xl text-gray-900 leading-tight max-w-5xl mx-auto">
                "Religius, berilmu pengetahuan, menguasai teknologi dan berkarakter sesuai dengan ajaran agama islam."
            </p>
        </section>

        {/* Misi Header */}
        <div className="flex items-center gap-4">
             <h2 className="font-serif text-4xl text-gray-900">Misi Kami</h2>
             <div className="h-px bg-gray-200 flex-grow"></div>
        </div>

        {/* Misi Bento Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {missions.map((mission, index) => (
                <div key={index} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
                    <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-gray-50 text-gray-400 group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300 mb-6">
                        {mission.icon}
                    </div>
                    <p className="font-sans text-lg text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">
                        {mission.text}
                    </p>
                </div>
            ))}
        </section>

      </div>
    </div>
  );
};

export default VisiMisi;