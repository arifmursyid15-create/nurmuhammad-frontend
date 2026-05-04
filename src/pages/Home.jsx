import { Link } from 'react-router-dom'
import { useState, useEffect, useMemo } from 'react'
import '../styles/home.css'
import { getLatestArticles } from '../api/articles'
import { getGallery } from '../api/gallery'
import { getPublicSettings } from '../api/settings'

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [berita, setBerita] = useState([])
  const [galeri, setGaleri] = useState([])
  const [settings, setSettings] = useState({})

  // ✅ FIX: slides dibuat stabil dengan useMemo
  const slides = useMemo(() => [
    {
      tag: 'Pesantren Modern Berbasis Salaf',
      title: <>'Membentuk Generasi<br /><em>Berakhlak & Berprestasi</em></>,
      desc: 'Pesantren Nur Muhammad hadir dengan tiga program unggulan — membina santri yang berilmu, beriman, dan bermanfaat bagi umat.',
      cta1: { label: 'Pelajari Lebih Lanjut', to: '/profil' },
      cta2: { label: 'Daftar PPDB', to: '/ppdb' },
      bg: settings.slide_1_bg || '',
      img: settings.slide_1_img || '',
    },
    {
      tag: "Program Tahfidz Al-Qur'an",
      title: <>Hafal 30 Juz dengan<br /><em>Bimbingan Terbaik</em></>,
      desc: "Program Tahfidz Murni kami dirancang intensif untuk santri pasca SMA/MA yang ingin mengabdikan diri menghafal Al-Qur'an.",
      cta1: { label: 'Lihat Program Tahfidz', to: '/unit/tahfidz-murni' },
      cta2: { label: 'Daftar Sekarang', to: '/ppdb' },
      bg: settings.slide_2_bg || '',
      img: settings.slide_2_img || '',
    },
    {
      tag: 'PPDB 2026/2027 Dibuka',
      title: <>Daftarkan Putra-Putri<br /><em>Anda Sekarang</em></>,
      desc: 'Pendaftaran online mudah dan cepat. Pilih program SMP, MA, atau Tahfidz Murni — putra maupun putri.',
      cta1: { label: 'Daftar Online', to: '/ppdb' },
      cta2: { label: 'Cek Pendaftaran', to: '/ppdb/cek' },
      bg: settings.slide_3_bg || '',
      img: settings.slide_3_img || '',
    },
  ], [settings])

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
    { icon: '🕌', title: 'Lingkungan Islami', desc: 'Suasana pesantren yang kental dengan nilai-nilai Islam di setiap aspek kehidupan santri.' },
    { icon: '👨‍🏫', title: 'Pengajar Berkualitas', desc: 'Ustadz dan ustadzah berpengalaman dengan sanad keilmuan yang jelas dan terpercaya.' },
    { icon: '🏠', title: 'Asrama Nyaman', desc: 'Fasilitas asrama terpisah putra-putri yang bersih, aman, dan nyaman untuk belajar.' },
    { icon: '📜', title: 'Kurikulum Terpadu', desc: 'Mengintegrasikan kurikulum nasional dengan kurikulum pesantren secara seimbang.' },
    { icon: '🤝', title: 'Pembinaan Karakter', desc: 'Program pembiasaan akhlak mulia, disiplin, dan kemandirian yang diterapkan sehari-hari.' },
    { icon: '🏆', title: 'Prestasi Akademik', desc: 'Santri berprestasi di berbagai kompetisi tingkat kabupaten hingga nasional.' },
  ]

  // FETCH DATA
  useEffect(() => {
    Promise.all([
      getLatestArticles().catch(() => ({ data: [] })),
      getGallery().catch(() => ({ data: [] })),
      getPublicSettings().catch(() => ({ data: {} })),
    ]).then(([artikelRes, galeriRes, settingsRes]) => {
      setBerita(artikelRes.data || [])
      setGaleri(galeriRes.data || [])
      setSettings(settingsRes.data || {})
    })
  }, [])

  // ✅ FIX: pakai slides.length (bukan SLIDES)
  useEffect(() => {
    if (!slides.length) return

    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length)
    }, 5500)

    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <>
      <section className="hero" style={slides[currentSlide]?.bg ? {
        backgroundImage: `url(${slides[currentSlide].bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      } : {}}>
        <div className="hero-bg-pattern" />
        <div className="hero-arabic">ن</div>

        <div className="hero-slider" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          {slides.map((slide, i) => (
            <div key={i} className={`slide ${i === currentSlide ? 'active' : ''}`} style={{ display: 'flex', alignItems: 'center', gap: '2rem', width: '100%' }}>
              <div style={{ flex: 1 }}>
                <div className="slide-tag">{slide.tag}</div>
                <h1>{slide.title}</h1>
                <p>{slide.desc}</p>
                <div className="slide-cta">
                  <Link to={slide.cta1.to} className="btn-hero-primary">{slide.cta1.label}</Link>
                  <Link to={slide.cta2.to} className="btn-hero-outline">{slide.cta2.label}</Link>
                </div>
              </div>

              {slide.img && (
                <div style={{ flex: '0 0 320px' }}>
                  <img src={slide.img} alt={slide.tag} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hero-controls">
          {slides.map((_, i) => (
            <button key={i} className={`hero-dot ${i === currentSlide ? 'active' : ''}`} onClick={() => setCurrentSlide(i)} />
          ))}
          <button className="hero-nav-btn" onClick={() => setCurrentSlide(p => (p - 1 + slides.length) % slides.length)}>‹</button>
          <button className="hero-nav-btn" onClick={() => setCurrentSlide(p => (p + 1) % slides.length)}>›</button>
        </div>
      </section>

      {/* sisanya TIDAK DIUBAH SAMA SEKALI */}
    </>
  )
}