export interface Book {
  id: string;
  title: string;
  author: string;
  isbn: string;
  category: string;
  gradeLevel: string; // Kelas X, XI, XII, Umum
  status: 'Tersedia' | 'Dipinjam';
  summary: string;
  synopsis: string;
  shelfLocation: string;
  coverImage: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: 'Pengumuman' | 'Kegiatan' | 'Prestasi';
  excerpt: string;
  content: string;
  image: string;
  featured?: boolean;
}

export interface Teacher {
  id: string;
  name: string;
  role: string;
  expertise: string;
  image: string;
}

export interface Stat {
  label: string;
  value: string;
  description?: string;
}