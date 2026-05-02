import { Link } from 'react-router-dom'
import '../styles/profil.css'

export default function Profil() {
  const timeline = [
    { year: '2004', title: 'Pesantren Berdiri', desc: 'Didirikan oleh Kyai Agus Kamaludin Ismail Al-Hafidz dengan belasan santri perdana di Wonoayu, Jombang.' },
    { year: '2007', title: 'SMP Nur Muhammad Dibuka', desc: 'Unit pendidikan formal pertama resmi beroperasi dengan akreditasi dari Kemendikbud.' },
    { year: '2011', title: 'MA Nur Muhammad Berdiri', desc: 'Jenjang madrasah aliyah hadir untuk melanjutkan pembinaan santri lulusan SMP.' },
    { year: '2016', title: 'Program Tahfidz Murni', desc: "Program intensif hafalan Al-Qur'an 30 juz khusus pasca SMA/MA resmi dibuka." },
    { year: '2020', title: 'Gedung & Asrama Baru', desc: 'Pembangunan asrama putra-putri dan ruang kelas modern untuk menampung santri yang terus bertambah.' },
  ]

  const misi = [
    'Menyelenggarakan pendidikan Islam terpadu yang memadukan kurikulum nasional dan kurikulum pesantren.',
    'Membina akhlak mulia, kedisiplinan, dan karakter islami pada setiap santri secara konsisten.',
    'Mengembangkan potensi akademik, tahfidz, dan kepemimpinan santri secara menyeluruh.',
    'Menciptakan lingkungan belajar yang kondusif, aman, dan bernuansa islami.',
    'Membangun kerja sama dengan berbagai pihak untuk meningkatkan kualitas pendidikan.',
  ]

  const nilai = [
    { icon: '📖', title: 'Ilmu', desc: 'Menuntut ilmu adalah kewajiban. Kami mendorong setiap santri untuk terus belajar dengan sungguh-sungguh.' },
    { icon: '🤲', title: 'Iman', desc: 'Keimanan yang kuat adalah pondasi utama. Setiap kegiatan diorientasikan untuk mempertebal keyakinan.' },
    { icon: '🌿', title: 'Akhlak', desc: 'Akhlak mulia adalah mahkota santri. Pembinaan karakter islami dilakukan setiap hari tanpa henti.' },
    { icon: '🤝', title: 'Khidmah', desc: 'Ilmu tanpa pengabdian tidaklah sempurna. Santri dididik untuk siap melayani umat dan masyarakat.' },
  ]

  const fasilitas = [
    { icon: '🕌', title: 'Masjid Pesantren', desc: 'Masjid utama pesantren yang bersih dan nyaman, digunakan untuk sholat berjamaah, pengajian, dan kegiatan keagamaan.' },
    { icon: '🏠', title: 'Asrama Putra & Putri', desc: 'Asrama terpisah yang bersih, aman, dan nyaman. Dilengkapi kamar tidur, kamar mandi, dan ruang belajar bersama.' },
    { icon: '📚', title: 'Perpustakaan', desc: 'Koleksi ribuan buku referensi ilmu agama dan akademik. Tersedia area baca yang tenang dan kondusif.' },
    { icon: '🔬', title: 'Laboratorium', desc: 'Lab IPA dan komputer yang mendukung pembelajaran sains dan teknologi sesuai kurikulum nasional.' },
    { icon: '🏃', title: 'Lapangan Olahraga', desc: 'Fasilitas olahraga untuk mendukung kesehatan fisik dan semangat sportivitas santri setiap hari.' },
    { icon: '🍽️', title: 'Dapur & Kantin', desc: 'Dapur pesantren menyajikan makanan bergizi tiga kali sehari. Kantin tersedia untuk kebutuhan tambahan santri.' },
  ]

  const budaya = [
    { icon: '🌙', title: 'Qiyamul Lail', desc: 'Sholat malam berjamaah setiap hari sebagai bentuk penguatan ruhiyah dan kedekatan dengan Allah SWT.' },
    { icon: '📖', title: 'Tilawah & Tahfidz', desc: "Setoran hafalan dan tilawah Al-Qur'an rutin setiap hari bersama musyrif/musyrifah yang berpengalaman." },
    { icon: '📝', title: 'Kajian Kitab', desc: "Pengajian kitab kuning klasik setiap ba'da shubuh dan ba'da maghrib dipimpin langsung pengasuh." },
    { icon: '🗣️', title: 'Muhadatsah Arabiyah', desc: "Percakapan bahasa Arab harian untuk membiasakan santri berkomunikasi dengan bahasa Al-Qur'an." },
    { icon: '🏅', title: 'Ekstrakurikuler', desc: 'Berbagai kegiatan ekskul: pramuka, hadrah, kaligrafi, olahraga, dan karya tulis ilmiah.' },
    { icon: '🤝', title: 'Piket & Tanggung Jawab', desc: 'Sistem piket harian melatih kemandirian, kebersihan, dan rasa tanggung jawab sejak dini.' },
  ]

  const pengasuhTags = ["Fiqih & Ushul Fiqih", "Tafsir Al-Qur'an", 'Bahasa Arab', 'Al-Azhar Kairo', '20+ Tahun Mengabdi']

  return (
    <>
      {/* ─── HERO ─── */}
      <div className="profil-hero">
        <div className="profil-hero-arabic">ن</div>
        <div className="profil-hero-inner">
          <div className="profil-breadcrumb">
            <Link to="/">Beranda</Link> / Profil Pesantren
          </div>
          <div className="profil-hero-eyebrow">Profil Pesantren</div>
          <h1>Pesantren<br /><em>Nur Muhammad</em></h1>
          <p className="profil-hero-desc">
            Mengenal lebih dalam perjalanan, visi, dan nilai-nilai yang menjadi fondasi
            Pesantren Nur Muhammad dalam mendidik generasi Islam yang unggul.
          </p>
          <div className="profil-hero-stats">
            <div className="profil-stat">
              <div className="profil-stat-num">20+</div>
              <div className="profil-stat-label">Tahun berdiri</div>
            </div>
            <div className="profil-stat">
              <div className="profil-stat-num">500+</div>
              <div className="profil-stat-label">Alumni aktif</div>
            </div>
            <div className="profil-stat">
              <div className="profil-stat-num">3</div>
              <div className="profil-stat-label">Unit pendidikan</div>
            </div>
          </div>
        </div>
      </div>

      <div className="profil-body">

        {/* ─── SEJARAH ─── */}
        <div className="sejarah-section">
          <div className="sejarah-grid">
            <div>
              <div className="sec-eyebrow">Sejarah Singkat</div>
              <h2 className="sec-title">Perjalanan Panjang<br />Mendidik Umat</h2>
              <div style={{ marginTop: '1.5rem' }}>
                <p className="sejarah-text" style={{ color: 'var(--text-mid)', fontSize: '0.925rem', lineHeight: '1.85', marginBottom: '1rem' }}>
                  Pesantren Nur Muhammad berdiri pada tahun 2004 di Wonoayu, Mojoagung, Kabupaten Jombang —
                  sebuah daerah yang sejak lama dikenal sebagai "Kota Santri". Didirikan oleh KH. Muhammad Nur
                  Hasyim, Lc., seorang ulama alumni Al-Azhar Kairo, pesantren ini hadir dengan tekad kuat untuk
                  mencetak generasi muslim yang tidak hanya cerdas secara akademik, tetapi juga kokoh dalam
                  keimanan dan akhlak.
                </p>
                <p style={{ color: 'var(--text-mid)', fontSize: '0.925rem', lineHeight: '1.85', marginBottom: '1rem' }}>
                  Bermula dari sebuah langgar kecil dengan belasan santri, Nur Muhammad terus berkembang pesat.
                  Kepercayaan masyarakat yang semakin besar mendorong pesantren untuk membuka unit pendidikan
                  formal — dimulai dengan SMP, kemudian MA, hingga program Tahfidz Murni untuk lulusan SMA/MA.
                </p>
                <p style={{ color: 'var(--text-mid)', fontSize: '0.925rem', lineHeight: '1.85' }}>
                  Hari ini, Pesantren Nur Muhammad telah menjadi salah satu lembaga pendidikan Islam terpercaya
                  di Jombang, dengan ratusan santri aktif dan ribuan alumni yang tersebar di berbagai penjuru Indonesia.
                </p>
              </div>
            </div>
            <div className="timeline">
              {timeline.map((item, i) => (
                <div key={i} className="timeline-item">
                  <div className="tl-left">
                    <div className="tl-dot">{item.year}</div>
                    {i < timeline.length - 1 && <div className="tl-line" />}
                  </div>
                  <div className="tl-content">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── VISI MISI ─── */}
        <div className="visimisi-section">
          <div className="sec-eyebrow">Visi & Misi</div>
          <h2 className="sec-title">Landasan Perjuangan Kami</h2>
          <p className="sec-sub">Setiap langkah kami dituntun oleh visi yang jelas dan misi yang terarah demi melahirkan generasi terbaik umat.</p>
          <div className="visimisi-grid">
            <div className="visimisi-card">
              <div className="visimisi-header visi">
                <span className="visimisi-icon">🌟</span>
                <h3>Visi</h3>
              </div>
              <div className="visimisi-body">
                <p className="visi-text">
                  Menjadi lembaga pendidikan Islam unggulan yang melahirkan generasi berilmu, berakhlak mulia,
                  hafal Al-Qur'an, dan bermanfaat bagi bangsa serta agama di tingkat nasional maupun internasional.
                </p>
              </div>
            </div>
            <div className="visimisi-card">
              <div className="visimisi-header misi">
                <span className="visimisi-icon">🎯</span>
                <h3>Misi</h3>
              </div>
              <div className="visimisi-body">
                <ol className="misi-list">
                  {misi.map((m, i) => (
                    <li key={i}>
                      <span className="misi-num">{i + 1}</span>
                      <span>{m}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>

        {/* ─── NILAI-NILAI ─── */}
        <div className="nilai-section">
          <div className="sec-eyebrow">Nilai-Nilai Pesantren</div>
          <h2 className="sec-title">Empat Pilar Utama</h2>
          <p className="sec-sub">Nilai-nilai ini menjadi nafas dalam setiap kegiatan dan pembinaan di Pesantren Nur Muhammad.</p>
          <div className="nilai-grid">
            {nilai.map(n => (
              <div key={n.title} className="nilai-card">
                <div className="nilai-icon">{n.icon}</div>
                <h3>{n.title}</h3>
                <p>{n.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ─── PENGASUH ─── */}
<div className="pengasuh-section">
  <div className="sec-eyebrow">Ketua Yayasan</div>
  <h2 className="sec-title" style={{ marginBottom: '1.5rem' }}>Amanat Ketua Yayasan</h2>
  <div className="pengasuh-card">
    <div className="pengasuh-inner">
      <div className="pengasuh-left" style={{
  backgroundImage: 'url(https://res.cloudinary.com/dmh5q3yef/image/upload/v1777692825/MuchaTseBle_tzgai6.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius: '16px',
  minHeight: '400px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2rem',
  position: 'relative',
  overflow: 'hidden',
  textAlign: 'center',
}}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)',
          borderRadius: '16px'
        }} />
        <img
  src="https://res.cloudinary.com/dmh5q3yef/image/upload/WhatsApp_Image_2026-05-01_at_23.40.33_clp74h.jpg"
  alt="Kyai Agus Kamaludin Ismail Al-Hafidz"
  style={{
    width: '160px', height: '200px', borderRadius: '12px',
    objectFit: 'cover', border: '4px solid #c8a951',
    position: 'relative', zIndex: 1, marginBottom: '1rem'
  }}
/>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ color: '#fff', fontWeight: 700, fontSize: '1rem' }}>Kyai Agus Kamaludin Ismail Al-Hafidz</div>
          <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.82rem', marginTop: '3px' }}>Ketua Yayasan & Pengasuh Pesantren</div>
        </div>
      </div>
      <div className="pengasuh-right">
        <div className="pengasuh-eyebrow">Amanat Ketua Yayasan</div>
        <h3 className="pengasuh-heading">Pesan untuk Para Santri dan Wali Santri</h3>
        <p className="pengasuh-bio">
          Mendirikan Pesantren Nur Muhammad pada tahun 2004 dengan tekad
          mencetak generasi muslim yang unggul. Selama lebih dari 20 tahun, beliau telah membimbing
          ribuan santri dan menjadi panutan bagi masyarakat Jombang dan sekitarnya.
        </p>
        <span className="pengasuh-quote-mark">"</span>
        <p className="pengasuh-quote">
          Pesantren bukan sekadar tempat belajar ilmu — ia adalah{' '}
          <strong>rumah kedua yang membentuk jiwa</strong>. Kami hadir bukan hanya untuk mencerdaskan
          akal, tetapi juga untuk menempa hati agar kelak para santri menjadi manusia yang berilmu,
          berakhlak mulia, dan bermanfaat bagi agama serta bangsa.
          <br /><br />
          Setiap santri yang masuk ke sini membawa amanah dari orang tuanya. Amanah itu kami emban
          dengan sepenuh hati, dengan harapan kelak mereka pulang membawa kebanggaan — bukan hanya
          bagi keluarga, tapi bagi <strong>umat Islam seluruhnya</strong>.
        </p>
        <div className="pengasuh-attr">
          <div className="pengasuh-attr-line" />
          <div>
            <div className="pengasuh-attr-name">Kyai Agus Kamaludin Ismail Al-Hafidz</div>
            <div className="pengasuh-attr-role">Ketua Yayasan Nur Muhammad</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        {/* ─── FASILITAS ─── */}
        <div className="fasilitas-section">
          <div className="sec-eyebrow">Fasilitas</div>
          <h2 className="sec-title">Sarana & Prasarana</h2>
          <p className="sec-sub">Kami menyediakan fasilitas lengkap untuk mendukung proses belajar dan kehidupan santri sehari-hari.</p>
          <div className="fasilitas-grid">
            {fasilitas.map(f => (
              <div key={f.title} className="fasilitas-card">
                <div className="fasilitas-icon">{f.icon}</div>
                <div>
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── BUDAYA ─── */}
        <div className="budaya-section">
          <div className="sec-eyebrow">Budaya Pesantren</div>
          <h2 className="sec-title">Kegiatan & Pembiasaan Harian</h2>
          <p className="sec-sub">Ritme kehidupan di pesantren dirancang untuk membentuk karakter santri secara menyeluruh — jasmani, rohani, dan akal.</p>
          <div className="budaya-grid">
            {budaya.map(b => (
              <div key={b.title} className="budaya-card">
                <div className="budaya-icon">{b.icon}</div>
                <h4>{b.title}</h4>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ─── CTA ─── */}
        <div className="profil-cta">
          <h2>Tertarik Bergabung Bersama Kami?</h2>
          <p>Daftarkan putra-putri Anda ke Pesantren Nur Muhammad. Kami siap membimbing mereka menjadi generasi yang berilmu dan berakhlak mulia.</p>
          <div className="profil-cta-btns">
            <Link to="/ppdb" className="btn-cta-gold">Daftar PPDB Online</Link>
            <Link to="/kontak" className="btn-cta-white">Hubungi Kami</Link>
          </div>
          <div className="profil-cta-units">
            <Link to="/unit/smp" className="profil-cta-unit">🏫 SMP Nur Muhammad</Link>
            <Link to="/unit/ma" className="profil-cta-unit">📚 MA Nur Muhammad</Link>
            <Link to="/unit/tahfidz-murni" className="profil-cta-unit">📖 Tahfidz Murni</Link>
          </div>
        </div>

      </div>
    </>
  )
}
