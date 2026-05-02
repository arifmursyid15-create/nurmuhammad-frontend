import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import '../styles/home.css'


export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      tag: 'Pesantren Modern Berbasis Salaf',
      title: <>'Membentuk Generasi<br /><em>Berakhlak & Berprestasi</em></>,
      desc: 'Pesantren Nur Muhammad hadir dengan tiga program unggulan — membina santri yang berilmu, beriman, dan bermanfaat bagi umat.',
      cta1: { label: 'Pelajari Lebih Lanjut', to: '/profil' },
      cta2: { label: 'Daftar PPDB', to: '/ppdb' },
    },
    {
      tag: "Program Tahfidz Al-Qur'an",
      title: <>Hafal 30 Juz dengan<br /><em>Bimbingan Terbaik</em></>,
      desc: "Program Tahfidz Murni kami dirancang intensif untuk santri pasca SMA/MA yang ingin mengabdikan diri menghafal Al-Qur'an.",
      cta1: { label: 'Lihat Program Tahfidz', to: '/unit/tahfidz-murni' },
      cta2: { label: 'Daftar Sekarang', to: '/ppdb' },
    },
    {
      tag: 'PPDB 2026/2027 Dibuka',
      title: <>Daftarkan Putra-Putri<br /><em>Anda Sekarang</em></>,
      desc: 'Pendaftaran online mudah dan cepat. Pilih program SMP, MA, atau Tahfidz Murni — putra maupun putri.',
      cta1: { label: 'Daftar Online', to: '/ppdb' },
      cta2: { label: 'Cek Pendaftaran', to: '/ppdb/cek' },
    },
  ]


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length)
    }, 5500)
    return () => clearInterval(timer)
  }, [slides.length])

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
      desc: 'Program intensif menghafal Al-Qur\'an 30 juz pasca SMA/MA, dibimbing langsung oleh pengasuh berpengalaman.',
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

  const galeri = [
    { icon: '📸', label: 'Kegiatan Pembelajaran' },
    { icon: '🎓', label: 'Upacara & Haflah' },
    { icon: '📖', label: 'Kelas Tahfidz' },
    { icon: '⚽', label: 'Ekstrakurikuler' },
    { icon: '🏠', label: 'Asrama Santri' },
  ]

  const berita = [
    { cat: 'Kegiatan', icon: '📸', title: 'Haflah Akhirussanah 2024/2025 Berlangsung Meriah dan Penuh Syukur', date: '15 Jan 2025', slug: 'haflah-akhirussanah-2024' },
    { cat: 'Pengumuman', icon: '📢', title: 'PPDB 2025/2026 Resmi Dibuka — Pendaftaran Online Sudah Tersedia', date: '2 Jan 2025', slug: 'ppdb-2025-2026-dibuka' },
    { cat: 'Artikel Islami', icon: '🌙', title: "Keutamaan Menghafal Al-Qur'an Sejak Usia Dini bagi Generasi Muslim", date: '28 Des 2024', slug: 'keutamaan-tahfidz' },
  ]

 

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="hero">
        <div className="hero-bg-pattern" />
        <div className="hero-arabic">ن</div>
        <div className="hero-slider">
          {slides.map((slide, i) => (
            <div key={i} className={`slide ${i === currentSlide ? 'active' : ''}`}>
              <div className="slide-tag">{slide.tag}</div>
              <h1>{slide.title}</h1>
              <p>{slide.desc}</p>
              <div className="slide-cta">
                <Link to={slide.cta1.to} className="btn-hero-primary">{slide.cta1.label}</Link>
                <Link to={slide.cta2.to} className="btn-hero-outline">{slide.cta2.label}</Link>
              </div>
            </div>
          ))}
        </div>
        <div className="hero-controls">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`hero-dot ${i === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(i)}
            />
          ))}
          <button className="hero-nav-btn" onClick={() => setCurrentSlide(p => (p - 1 + slides.length) % slides.length)}>‹</button>
          <button className="hero-nav-btn" onClick={() => setCurrentSlide(p => (p + 1) % slides.length)}>›</button>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <div className="stats-bar">
        <div className="stats-inner">
          {stats.map(s => (
            <div key={s.label} className="stat-item">
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── KETUA YAYASAN ─── */}
      <section className="section kyayasan-section">
        <div className="kyayasan-inner">
          <div className="ky-profile-card">
  <img 
    src="https://res.cloudinary.com/dmh5q3yef/image/upload/WhatsApp_Image_2026-05-01_at_23.40.33_clp74h.jpg"
    alt="KH. Muhammad Nur Hasyim, Lc."
    style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover', marginBottom: '1rem', border: '4px solid #40916c' }}
  />
  <div className="ky-name">Kyai Agus Kamaludin Ismail Al-Hafidz.</div>
  <div className="ky-title">Ketua Yayasan & Pengasuh</div>
</div>

          <div className="ky-amanat">
            <div className="ky-eyebrow">Amanat Ketua Yayasan</div>
            <h2 className="ky-heading">
              Pesan untuk Para Santri<br />dan Keluarga Besar Pesantren
            </h2>
            <span className="ky-quote-mark">"</span>
            <p className="ky-quote-text">
              Pesantren bukan sekadar tempat belajar ilmu — ia adalah{' '}
              <strong>rumah kedua yang membentuk jiwa</strong>. Kami hadir bukan hanya
              untuk mencerdaskan akal, tetapi juga untuk menempa hati agar kelak para
              santri menjadi manusia yang berilmu, berakhlak mulia, dan bermanfaat bagi
              agama serta bangsa.
              <br /><br />
              Setiap santri yang masuk ke sini membawa amanah dari orang tuanya. Amanah
              itu kami emban dengan sepenuh hati, dengan harapan kelak mereka pulang
              membawa kebanggaan — bukan hanya bagi keluarga, tapi bagi{' '}
              <strong>umat Islam seluruhnya</strong>.
            </p>
            <div className="ky-attribution">
              <div className="ky-attr-line" />
              <div>
                <div className="ky-attr-name">Kyai Agus Kamaludin Ismail Al-Hafidz</div>
                <div className="ky-attr-role">Ketua Yayasan & Pengasuh Nur Muhammad</div>
              </div>
            </div>
            <Link to="/profil" className="ky-link">Lihat Profil Pesantren →</Link>
          </div>
        </div>
      </section>

      {/* ─── UNIT PENDIDIKAN ─── */}
      <section className="section">
        <div className="section-inner">
          <div className="section-header-row">
            <div>
              <div className="section-eyebrow">Unit Pendidikan</div>
              <h2 className="section-title">Tiga Program Unggulan</h2>
              <p className="section-sub">Setiap unit dirancang untuk membentuk santri yang unggul akademik sekaligus kokoh keimanannya.</p>
            </div>
            <Link to="/berita" className="link-all">Lihat semua →</Link>
          </div>
          <div className="units-grid">
            {units.map(unit => (
              <div key={unit.name} className="unit-card">
                <div className="unit-card-top">
                  <div className="unit-badge">{unit.badge}</div>
                  <h3>{unit.icon} {unit.name}</h3>
                </div>
                <div className="unit-card-body">
                  <p>{unit.desc}</p>
                  <div className="unit-chips">
                    {unit.chips.map(c => <span key={c} className="chip">{c}</span>)}
                  </div>
                  <Link to={unit.to} className="unit-link">Selengkapnya →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── KEUNGGULAN ─── */}
      <section className="section keunggulan-section">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-eyebrow">Keunggulan Kami</div>
            <h2 className="section-title">Mengapa Nur Muhammad?</h2>
          </div>
          <div className="keunggulan-grid">
            {keunggulan.map(k => (
              <div key={k.title} className="keunggulan-card">
                <div className="keunggulan-icon">{k.icon}</div>
                <h4>{k.title}</h4>
                <p>{k.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GALERI ─── */}
      <section className="section galeri-section">
        <div className="section-inner">
          <div className="section-header-row">
            <div>
              <div className="section-eyebrow">Galeri</div>
              <h2 className="section-title">Kehidupan di Pesantren</h2>
            </div>
            <a href="#" className="link-all">Lihat semua foto →</a>
          </div>
          <div className="galeri-grid">
            {galeri.map(g => (
              <div key={g.label} className="galeri-item">
                <div className="galeri-thumb">{g.icon}</div>
                <div className="galeri-label">{g.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BERITA ─── */}
      <section className="section">
        <div className="section-inner">
          <div className="section-header-row">
            <div>
              <div className="section-eyebrow">Berita & Artikel</div>
              <h2 className="section-title">Kabar Terbaru</h2>
            </div>
            <Link to="/berita" className="link-all">Lihat semua →</Link>
          </div>
          <div className="berita-grid">
            {berita.map(b => (
              <div key={b.slug} className="berita-card">
                <div className="berita-thumb">{b.icon}</div>
                <div className="berita-body">
                  <span className="berita-cat">{b.cat}</span>
                  <h3>{b.title}</h3>
                  <div className="berita-meta">
                    <span className="berita-date">{b.date}</span>
                    <Link to={`/berita/${b.slug}`} className="berita-link">Baca →</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA PPDB ─── */}
      <section className="section cta-section">
        <div className="cta-inner">
          <div>
            <div className="cta-eyebrow">PPDB 2026/2027 Masih Dibuka</div>
            <h2 className="cta-title">Daftarkan Putra-Putri<br />Anda Sekarang</h2>
            <p className="cta-desc">
              Proses pendaftaran online mudah, cepat, dan bisa dipantau kapan saja.
              Bergabunglah bersama ratusan santri Pesantren Nur Muhammad.
            </p>
            <div className="cta-btns">
              <Link to="/ppdb" className="btn-cta-primary">Daftar Online Sekarang</Link>
              <Link to="/ppdb/cek" className="btn-cta-outline">Cek Data Pendaftaran</Link>
            </div>
          </div>
          <div className="cta-status">
            <div className="cta-status-title">Status PPDB</div>
            {['SMP Nur Muhammad', 'MA Nur Muhammad', 'Tahfidz Murni'].map(p => (
              <div key={p} className="cta-status-item">
                <span className="dot-open" /> {p} — Buka
              </div>
            ))}
            <div className="cta-status-note">Putra & Putri · T.A. 2026/2027</div>
          </div>
        </div>
      </section>
    </>
  )
}
