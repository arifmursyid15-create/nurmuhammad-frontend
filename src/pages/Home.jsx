import { Link } from 'react-router-dom'
import { useState, useEffect, useMemo } from 'react'
import '../styles/home.css'
import { getLatestArticles } from '../api/articles'
import { getGallery } from '../api/gallery'
import { getPublicSettings } from '../api/settings'

// ✅ DATA STATIS DIPINDAH KE LUAR
const stats = [
  { num: '500+', label: 'Santri Aktif' },
  { num: '3', label: 'Program Unggulan' },
  { num: '20+', label: 'Tahun Berdiri' },
  { num: '98%', label: "Khatam Al-Qur'an" },
]

const units = [
  {
    badge: 'Jenjang SMP', icon: '🏫', name: 'SMP Nur Muhammad',
    desc: "Sekolah menengah pertama berbasis pesantren dengan program unggulan tahfidzul Qur'an dan kurikulum Kemendikbud.",
    chips: ['Putra & Putri', 'Tahfidz', '3 Tahun'],
    to: '/unit/smp',
  },
  {
    badge: 'Jenjang MA', icon: '📚', name: 'MA Nur Muhammad',
    desc: 'Madrasah Aliyah setara SMA dengan penekanan ilmu keislaman, bahasa Arab, dan persiapan perguruan tinggi.',
    chips: ['Putra & Putri', 'Kitab Kuning', '3 Tahun'],
    to: '/unit/ma',
  },
  {
    badge: 'Pasca SMA / MA', icon: '📖', name: 'Tahfidz Murni',
    desc: "Program intensif menghafal Al-Qur'an 30 juz pasca SMA/MA.",
    chips: ['Putra & Putri', '30 Juz', 'Intensif'],
    to: '/unit/tahfidz-murni',
  },
]

const keunggulan = [
  { icon: '🕌', title: 'Lingkungan Islami', desc: 'Suasana pesantren yang kental dengan nilai-nilai Islam.' },
  { icon: '👨‍🏫', title: 'Pengajar Berkualitas', desc: 'Ustadz dan ustadzah berpengalaman.' },
  { icon: '🏠', title: 'Asrama Nyaman', desc: 'Fasilitas bersih dan aman.' },
  { icon: '📜', title: 'Kurikulum Terpadu', desc: 'Kurikulum nasional + pesantren.' },
  { icon: '🤝', title: 'Pembinaan Karakter', desc: 'Disiplin dan akhlak.' },
  { icon: '🏆', title: 'Prestasi Akademik', desc: 'Berprestasi tingkat daerah hingga nasional.' },
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [berita, setBerita] = useState([])
  const [galeri, setGaleri] = useState([])
  const [settings, setSettings] = useState({})

  // ✅ SLIDES STABIL (pakai useMemo)
  const slides = useMemo(() => [
    {
      tag: 'Pesantren Modern Berbasis Salaf',
      title: <>Membentuk Generasi<br /><em>Berakhlak & Berprestasi</em></>,
      desc: 'Pesantren Nur Muhammad hadir dengan tiga program unggulan.',
      cta1: { label: 'Pelajari Lebih Lanjut', to: '/profil' },
      cta2: { label: 'Daftar PPDB', to: '/ppdb' },
      bg: settings.slide_1_bg || '',
      img: settings.slide_1_img || '',
    },
    {
      tag: "Program Tahfidz Al-Qur'an",
      title: <>Hafal 30 Juz dengan<br /><em>Bimbingan Terbaik</em></>,
      desc: "Program Tahfidz intensif.",
      cta1: { label: 'Lihat Program', to: '/unit/tahfidz-murni' },
      cta2: { label: 'Daftar', to: '/ppdb' },
      bg: settings.slide_2_bg || '',
      img: settings.slide_2_img || '',
    },
    {
      tag: 'PPDB Dibuka',
      title: <>Daftarkan Putra-Putri<br /><em>Anda Sekarang</em></>,
      desc: 'Pendaftaran online mudah.',
      cta1: { label: 'Daftar', to: '/ppdb' },
      cta2: { label: 'Cek', to: '/ppdb/cek' },
      bg: settings.slide_3_bg || '',
      img: settings.slide_3_img || '',
    },
  ], [settings])

  // ✅ FETCH DATA SEKALIGUS
  useEffect(() => {
    Promise.all([
      getLatestArticles().catch(() => ({ data: [] })),
      getGallery().catch(() => ({ data: [] })),
      getPublicSettings().catch(() => ({ data: {} })),
    ]).then(([a, g, s]) => {
      setBerita(a.data || [])
      setGaleri(g.data || [])
      setSettings(s.data || {})
    })
  }, [])

  // ✅ SLIDER AMAN
  useEffect(() => {
    if (!slides.length) return

    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length)
    }, 5500)

    return () => clearInterval(timer)
  }, [slides.length])

  const current = slides[currentSlide] || {}

  return (
    <>
      {/* HERO */}
      <section
        className="hero"
        style={current.bg ? {
          backgroundImage: `url(${current.bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        } : {}}
      >
        <div className="hero-slider">
          {slides.map((slide, i) => (
            <div key={i} className={`slide ${i === currentSlide ? 'active' : ''}`}>
              <div>
                <div className="slide-tag">{slide.tag}</div>
                <h1>{slide.title}</h1>
                <p>{slide.desc}</p>
                <Link to={slide.cta1.to}>{slide.cta1.label}</Link>
              </div>

              {slide.img && <img src={slide.img} alt="" />}
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <div className="stats-bar">
        {stats.map(s => (
          <div key={s.label}>
            <div>{s.num}</div>
            <div>{s.label}</div>
          </div>
        ))}
      </div>

      {/* UNIT */}
      <section>
        {units.map(u => (
          <div key={u.name}>
            <h3>{u.name}</h3>
            <p>{u.desc}</p>
            <Link to={u.to}>Detail</Link>
          </div>
        ))}
      </section>

      {/* GALERI */}
      <section>
        {galeri.length === 0 ? (
          <p>Kosong</p>
        ) : (
          galeri.slice(0, 5).map(p => (
            <img key={p.id} src={p.path} alt={p.title} />
          ))
        )}
      </section>

      {/* BERITA */}
      <section>
        {berita.length === 0 ? (
          <p>Belum ada</p>
        ) : (
          berita.map(b => (
            <div key={b.slug}>
              <h3>{b.title}</h3>
              <Link to={`/berita/${b.slug}`}>Baca</Link>
            </div>
          ))
        )}
      </section>
    </>
  )
}