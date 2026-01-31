import { Book, NewsItem, Teacher, Stat } from './types';

export const SCHOOL_STATS: Stat[] = [
  { label: 'Tahun Berdiri', value: '2016' },
  { label: 'Akreditasi', value: 'A' },
  { label: 'Konsep', value: '3in1' }, // SMA, SMK, MA
  { label: 'Status', value: 'Swasta' },
];

export const ORG_STRUCTURE = {
  yayasan: { name: 'Ateng, SE', role: 'Yayasan', image: 'https://ui-avatars.com/api/?name=Ateng+SE&background=1a1a1a&color=fff' },
  kepsek: { name: 'Nuriadi, S.Pd. I', role: 'Kepala Sekolah', image: 'https://picsum.photos/300/400?random=101' },
  wakepsek: { name: 'Teguh Setiawan, S.T', role: 'Wakil Kepala Sekolah', image: 'https://picsum.photos/300/400?random=102' },
  wakaKurikulum: { name: 'M. Dwi Syawal S, S.Kom', role: 'Waka Kurikulum', image: 'https://picsum.photos/300/400?random=103' },
  wakaKesiswaan: { name: 'Emy Dwi Suryanti, S.Pd', role: 'Waka Kesiswaan', image: 'https://picsum.photos/300/400?random=104' },
  tataUsaha: [
    { name: 'Diyah Pusvita Sari', role: 'Tata Usaha', image: 'https://ui-avatars.com/api/?name=Diyah+Pusvita&background=random' },
    { name: 'Koko Yeri Kustioro, S.Sos', role: 'Tata Usaha', image: 'https://ui-avatars.com/api/?name=Koko+Yeri&background=random' },
    { name: 'Sri Nurul Aulia', role: 'Tata Usaha', image: 'https://ui-avatars.com/api/?name=Sri+Nurul&background=random' }
  ],
  bendahara: [
    { name: 'Muhammad Rafsanjani, S.Pd', role: 'Bendahara', image: 'https://picsum.photos/300/400?random=106' },
    { name: 'Maulana Abdullah', role: 'Bendahara', image: 'https://ui-avatars.com/api/?name=Maulana+Abdullah&background=random' }
  ],
  staffBawah: [
    { name: 'Sutiawan, S. Kom', role: 'Kepala LAB', image: 'https://picsum.photos/300/400?random=105' },
    { name: 'Muhammad Arief\nRivai, M.Pd', role: 'Guru Piket', image: 'https://ui-avatars.com/api/?name=Muhammad+Arief&background=random' },
    { name: 'Lia Satriani R.F, S.Pd., M.Pd\nM.uhammad Azhari Hsb, M.Hum', role: 'Bimbingan Konseling', image: 'https://ui-avatars.com/api/?name=Lia+Satriani&background=random' },
    { name: 'Ghea Nurjanah, S.M', role: 'Pustakawan', image: 'https://ui-avatars.com/api/?name=Ghea+Nurjanah&background=random' }
  ]
};

export const TEACHERS: Teacher[] = [
  {
    id: '1',
    name: 'Nuriadi, S.Pd. I',
    role: 'Kepala Sekolah',
    expertise: 'Manajemen Pendidikan',
    image: 'https://picsum.photos/300/400?random=101'
  },
  {
    id: '2',
    name: 'Teguh Setiawan, S.T',
    role: 'Wakil Kepala Sekolah',
    expertise: 'Teknik & Manajemen',
    image: 'https://picsum.photos/300/400?random=102'
  },
  {
    id: '3',
    name: 'M. Dwi Syawal S, S.Kom',
    role: 'Waka Kurikulum',
    expertise: 'Teknologi Informasi',
    image: 'https://picsum.photos/300/400?random=103'
  },
  {
    id: '4',
    name: 'Emy Dwi Suryanti, S.Pd',
    role: 'Waka Kesiswaan',
    expertise: 'Kependidikan',
    image: 'https://picsum.photos/300/400?random=104'
  },
  {
    id: '5',
    name: 'Sutiawan, S. Kom',
    role: 'Kepala LAB',
    expertise: 'Komputer & Jaringan',
    image: 'https://picsum.photos/300/400?random=105'
  },
  {
    id: '6',
    name: 'Muhammad Rafsanjani, S.Pd',
    role: 'Bendahara',
    expertise: 'Keuangan',
    image: 'https://picsum.photos/300/400?random=106'
  }
];

export const BOOKS: Book[] = [
  {
    id: 'new-1',
    title: 'Cara Instan Jago Hacking',
    author: 'Arya Dipanegara',
    isbn: '978-602-001-123-1',
    category: 'Sains',
    gradeLevel: 'Umum',
    status: 'Tersedia',
    summary: 'Panduan praktis memahami keamanan siber dan ethical hacking.',
    synopsis: 'Buku ini membahas konsep dasar keamanan jaringan, teknik penetrasi sistem untuk tujuan edukasi, serta cara melindungi diri dari serangan siber. Cocok untuk pemula yang ingin terjun ke dunia keamanan informasi.',
    shelfLocation: 'Rak T-01',
    coverImage: 'https://placehold.co/300x450/000000/FFF?text=Hacking' // Placeholder for uploaded image 1
  },
  {
    id: 'new-2',
    title: 'EYD: Ejaan Bahasa Indonesia Yang Disempurnakan',
    author: 'Kesuma Nagara',
    isbn: '978-602-002-123-2',
    category: 'Bahasa',
    gradeLevel: 'Umum',
    status: 'Tersedia',
    summary: 'Pedoman lengkap EYD edisi terbaru sesuai Permendiknas.',
    synopsis: 'Referensi wajib untuk penulisan bahasa Indonesia yang baku. Mencakup pemakaian huruf, penulisan kata, tanda baca, dan unsur serapan. Sangat berguna untuk siswa dan guru.',
    shelfLocation: 'Rak B-02',
    coverImage: 'https://placehold.co/300x450/FFD700/000?text=EYD' // Placeholder for uploaded image 2
  },
  {
    id: 'new-3',
    title: 'Langsung Bisa Menguasai GRAMMAR',
    author: 'Joanna Adia',
    isbn: '978-602-003-123-3',
    category: 'Bahasa',
    gradeLevel: 'Umum',
    status: 'Dipinjam',
    summary: 'Panduan cepat menguasai tata bahasa Inggris (Parts of Speech).',
    synopsis: 'Membahas Noun, Pronoun, Adjective, Verb, Adverb, Preposition, Conjunction, dan Interjection dengan metode yang mudah dipahami dan langsung bisa dipraktikkan.',
    shelfLocation: 'Rak B-03',
    coverImage: 'https://placehold.co/300x450/FFFFFF/000?text=Grammar' // Placeholder for uploaded image 3
  },
  {
    id: 'new-4',
    title: 'Langsung Bisa Menguasai Tenses',
    author: 'Joanna Adia',
    isbn: '978-602-004-123-4',
    category: 'Bahasa',
    gradeLevel: 'Umum',
    status: 'Tersedia',
    summary: 'Kunci menguasai 16 Tenses bahasa Inggris dengan mudah.',
    synopsis: 'Dilengkapi dengan Active & Passive Voice, Question Tag, Degrees of Comparison, dan Regular/Irregular Verbs. Buku ini membantu siswa memahami struktur waktu dalam bahasa Inggris.',
    shelfLocation: 'Rak B-04',
    coverImage: 'https://placehold.co/300x450/FFFFFF/000?text=Tenses' // Placeholder for uploaded image 4
  },
  {
    id: 'new-5',
    title: 'Peribahasa Majas Pantun',
    author: 'Tim Redaksi Agogos',
    isbn: '978-602-005-123-5',
    category: 'Bahasa',
    gradeLevel: 'Umum',
    status: 'Tersedia',
    summary: 'Kumpulan peribahasa, majas, dan pantun populer.',
    synopsis: 'Buku ini merangkum kekayaan sastra lisan Indonesia yang sering digunakan di sekolah maupun kehidupan sehari-hari. Referensi tepat untuk pelajaran Bahasa Indonesia.',
    shelfLocation: 'Rak B-05',
    coverImage: 'https://placehold.co/300x450/1a1a1a/FFF?text=Peribahasa' // Placeholder for uploaded image 5
  },
  {
    id: 'new-6',
    title: 'Tebak-Tebakan Gokil Dosis Tinggi',
    author: 'Kole11',
    isbn: '978-602-006-123-6',
    category: 'Sastra',
    gradeLevel: 'Umum',
    status: 'Tersedia',
    summary: 'Kumpulan tebakan lucu untuk hiburan.',
    synopsis: 'Buku ringan untuk melepas penat. Berisi ratusan tebak-tebakan humor yang segar dan menghibur, cocok untuk bacaan santai di waktu luang.',
    shelfLocation: 'Rak H-01',
    coverImage: 'https://placehold.co/300x450/ddd/000?text=Tebak+Tebakan' // Placeholder for uploaded image 6
  },
  {
    id: '1',
    title: 'Sejarah Peradaban Islam',
    author: 'Prof. Dr. Hamka',
    isbn: '978-602-250-123-4',
    category: 'Sejarah',
    gradeLevel: 'Umum',
    status: 'Tersedia',
    summary: 'Sebuah tinjauan mendalam mengenai perkembangan peradaban Islam dari masa klasik hingga modern.',
    synopsis: 'Buku ini mengupas tuntas sejarah peradaban Islam dengan bahasa yang mengalir dan analisis yang tajam. Cocok untuk siswa yang ingin mendalami akar budaya dan sejarah agama Islam dalam konteks global.',
    shelfLocation: 'Rak S-04',
    coverImage: 'https://picsum.photos/300/450?random=201'
  },
  {
    id: '2',
    title: 'Matematika Diskrit Lanjut',
    author: 'Rinaldi Munir',
    isbn: '978-602-123-456-7',
    category: 'Sains',
    gradeLevel: 'Kelas XII',
    status: 'Dipinjam',
    summary: 'Panduan komprehensif matematika diskrit untuk tingkat lanjut.',
    synopsis: 'Membahas logika, himpunan, relasi, fungsi, induksi matematik, algoritma, teori graf, pohon, dan kompleksitas algoritma. Sangat berguna untuk siswa yang berminat di bidang ilmu komputer.',
    shelfLocation: 'Rak M-02',
    coverImage: 'https://picsum.photos/300/450?random=202'
  },
  {
    id: '3',
    title: 'Fisika Kuantum Dasar',
    author: 'Arthur Beiser',
    isbn: '978-979-741-999-9',
    category: 'Sains',
    gradeLevel: 'Kelas XII',
    status: 'Tersedia',
    summary: 'Pengantar konsep fisika modern dan mekanika kuantum.',
    synopsis: 'Buku teks klasik yang memperkenalkan konsep-konsep fisika modern dengan pendekatan yang jelas. Dilengkapi dengan contoh soal dan pembahasan.',
    shelfLocation: 'Rak F-11',
    coverImage: 'https://picsum.photos/300/450?random=203'
  },
  {
    id: '4',
    title: 'Laskar Pelangi',
    author: 'Andrea Hirata',
    isbn: '978-979-306-252-5',
    category: 'Sastra',
    gradeLevel: 'Umum',
    status: 'Tersedia',
    summary: 'Novel inspiratif tentang perjuangan anak-anak Belitong.',
    synopsis: 'Kisah 10 anak Laskar Pelangi yang berjuang menuntut ilmu di tengah keterbatasan. Novel ini mengajarkan tentang semangat, persahabatan, dan cinta tanah air.',
    shelfLocation: 'Rak N-01',
    coverImage: 'https://picsum.photos/300/450?random=204'
  },
  {
    id: '5',
    title: 'Biologi Sel & Molekuler',
    author: 'Gerald Karp',
    isbn: '978-047-004-913-2',
    category: 'Sains',
    gradeLevel: 'Kelas XI',
    status: 'Tersedia',
    summary: 'Eksplorasi mendalam tentang struktur dan fungsi sel.',
    synopsis: 'Buku referensi lengkap untuk biologi sel. Dilengkapi ilustrasi mikroskopis yang detail dan penjelasan mekanisme molekuler.',
    shelfLocation: 'Rak B-05',
    coverImage: 'https://picsum.photos/300/450?random=205'
  },
  {
    id: '6',
    title: 'Bahasa Indonesia: Tata Bahasa Baku',
    author: 'Hasan Alwi',
    isbn: '978-979-407-177-9',
    category: 'Bahasa',
    gradeLevel: 'Kelas X',
    status: 'Dipinjam',
    summary: 'Acuan standar tata bahasa Indonesia yang baik dan benar.',
    synopsis: 'Buku rujukan utama tata bahasa Indonesia yang diterbitkan oleh Badan Bahasa. Wajib dibaca oleh siswa untuk memahami struktur kalimat yang baku.',
    shelfLocation: 'Rak B-01',
    coverImage: 'https://picsum.photos/300/450?random=206'
  }
];

export const NEWS: NewsItem[] = [
  {
    id: '1',
    title: 'Al-Hikmah Raih Juara Umum Olimpiade Sains Kota Medan',
    date: '14 Oktober 2023',
    category: 'Prestasi',
    excerpt: 'Tim olimpiade sekolah berhasil membawa pulang 5 medali emas dan 3 perak dalam ajang tahunan bergengsi.',
    content: '...',
    image: 'https://picsum.photos/800/400?random=301',
    featured: true
  },
  {
    id: '2',
    title: 'Jadwal Penilaian Tengah Semester Ganjil 2023/2024',
    date: '28 September 2023',
    category: 'Pengumuman',
    excerpt: 'Informasi lengkap mengenai jadwal dan tata tertib pelaksanaan PTS Ganjil mendatang.',
    content: '...',
    image: 'https://picsum.photos/400/300?random=302'
  },
  {
    id: '3',
    title: 'Kunjungan Edukatif ke Museum Negeri Sumatera Utara',
    date: '20 September 2023',
    category: 'Kegiatan',
    excerpt: 'Siswa kelas X melakukan studi lapangan untuk mempelajari sejarah lokal secara langsung.',
    content: '...',
    image: 'https://picsum.photos/400/300?random=303'
  },
  {
    id: '4',
    title: 'Workshop Literasi Digital untuk Guru dan Staf',
    date: '15 September 2023',
    category: 'Kegiatan',
    excerpt: 'Peningkatan kompetensi tenaga pengajar dalam memanfaatkan teknologi pembelajaran modern.',
    content: '...',
    image: 'https://picsum.photos/400/300?random=304'
  }
];

export const BOOK_CATEGORIES = ['Semua', 'Sains', 'Sejarah', 'Sastra', 'Bahasa', 'Agama'];
export const BOOK_GRADES = ['Semua', 'Kelas X', 'Kelas XI', 'Kelas XII', 'Umum'];