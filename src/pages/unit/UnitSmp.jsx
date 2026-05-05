import { Link } from 'react-router-dom'
import '../../styles/unit.css'
import { useState, useEffect } from 'react'
import { getGallery } from '../../api/gallery'
import useSettings from '../../hooks/useSettings'

export default function UnitSmp() {
  const settings = useSettings()
  const [galeri, setGaleri] = useState([])

      useEffect(() => {
        getGallery({ category: 'SMP' })
          .then(res => setGaleri(res.data || []))
          .catch(() => {})
      }, [])

const waNumber = settings.site_wa || '6282177832648'
const tahunAjaran = settings.ppdb_tahun_ajaran || '2025/2026'
const kuotaSmp = settings.ppdb_kuota_smp || '60'
const statusSmp = settings.ppdb_status_smp || 'open'
const infoRows = [
    { icon: '🏫', label: 'Nama Unit', value: 'SMP Nur Muhammad' },
    { icon: '📍', label: 'Lokasi', value: 'Wonoayu, Mojoagung, Jombang' },
    { icon: '👥', label: 'Penerimaan', value: 'Putra & Putri' },
    { icon: '📅', label: 'Lama Studi', value: '3 Tahun (Kelas 7–9)' },
    { icon: '📜', label: 'Akreditasi', value: 'A — BAN-S/M' },
  ]

  const stats = [
    { num: '180+', label: 'Santri Aktif' },
    { num: '24', label: 'Guru & Ustadz' },
    { num: '5–10', label: 'Juz Target Hafalan' },
    { num: '50+', label: 'Penghargaan' },
  ]

  const keunggulan = [
    { icon: '📖', title: 'Tahfidz Terintegrasi', desc: 'Setoran hafalan rutin setiap hari. Target 5–10 juz selama 3 tahun dengan bimbingan musyrif hafidz bersanad.' },
    { icon: '🕌', title: 'Boarding Full-Time', desc: 'Santri tinggal di asrama terpisah putra-putri. Lingkungan islami 24 jam mendukung pembentukan karakter.' },
    { icon: '📚', title: 'Kurikulum Terpadu', desc: 'Kurikulum Kemendikbud plus materi pesantren: fiqih, tafsir, hadits, bahasa Arab, dan kitab kuning dasar.' },
    { icon: '🗣️', title: 'Bahasa Arab Aktif', desc: 'Muhadatsah arabiyah harian melatih santri berkomunikasi dalam bahasa Arab dengan percaya diri.' },
    { icon: '🏆', title: 'Prestasi Gemilang', desc: 'Santri aktif menorehkan prestasi di olimpiade sains, MTQ, dan kompetisi tingkat kabupaten hingga nasional.' },
  ]

  const mapelNasional = ['Matematika', 'Bahasa Indonesia', 'Bahasa Inggris', 'IPA (Fisika, Biologi, Kimia)', 'IPS (Sejarah, Geografi, Ekonomi)', 'PKn & Pendidikan Agama Islam', 'Seni Budaya & Prakarya', 'Pendidikan Jasmani']
  const mapelPesantren = ['Tahfidzul Qur\'an (target 5–10 juz)', 'Tilawah & Tajwid', 'Fiqih & Ushul Fiqih Dasar', 'Bahasa Arab Aktif & Pasif', 'Akidah & Akhlak', 'Hadits & Mustholah Hadits', 'Kitab Kuning Dasar', 'Muhadatsah Arabiyah']

  const kegiatan = [
    { icon: '📖', title: 'Setoran Tahfidz', desc: 'Hafalan harian kepada musyrif dengan target terukur per semester, 5–10 juz dalam 3 tahun.' },
    { icon: '🌙', title: 'Qiyamul Lail', desc: 'Sholat malam berjamaah setiap hari untuk memperkuat ruhiyah dan kedekatan santri dengan Allah SWT.' },
    { icon: '📝', title: 'Kajian Kitab', desc: "Pengajian kitab kuning ba'da Shubuh dan Maghrib bersama ustadz pesantren berpengalaman." },
    { icon: '🏅', title: 'Olimpiade & MTQ', desc: 'Pembinaan intensif santri untuk olimpiade sains dan Musabaqah Tilawatil Qur\'an tingkat kabupaten–nasional.' },
    { icon: '🗣️', title: 'Muhadatsah Arabiyah', desc: 'Percakapan bahasa Arab harian untuk membiasakan santri berkomunikasi aktif dalam bahasa Al-Qur\'an.' },
    { icon: '🏃', title: 'Olahraga & Ekskul', desc: 'Pramuka, hadrah, kaligrafi, futsal, dan karya tulis ilmiah untuk pengembangan minat dan bakat santri.' },
    { icon: '🤝', title: 'Piket & Tanggung Jawab', desc: 'Sistem piket harian melatih kemandirian, kebersihan, dan rasa tanggung jawab santri sejak dini.' },
    { icon: '☀️', title: 'Sholat Dhuha', desc: 'Pembiasaan sholat dhuha berjamaah setiap hari sebagai bentuk syukur dan pengisi energi spiritual.' },
  ]

  const jadwalPagi = [
    { time: '04.00', desc: <><strong>Qiyamul Lail & Shubuh</strong> — Berjamaah di masjid</> },
    { time: '04.45', desc: <><strong>Kajian Kitab Pagi</strong> — Bersama ustadz pesantren</> },
    { time: '05.30', desc: <><strong>Setoran Tahfidz</strong> — Kepada musyrif hafidz</> },
    { time: '06.30', desc: <><strong>Mandi & Sarapan</strong> — Persiapan KBM</> },
    { time: '07.00', desc: <><strong>KBM Formal</strong> — Kurikulum Kemendikbud</> },
    { time: '10.00', desc: <><strong>Istirahat & Dhuha</strong> — Sholat dhuha berjamaah</> },
    { time: '12.00', desc: <><strong>Sholat Dzuhur</strong> — Berjamaah di masjid</> },
  ]

  const jadwalMalam = [
    { time: '12.30', desc: <><strong>Makan Siang</strong> & Istirahat siang</> },
    { time: '13.30', desc: <><strong>KBM Pesantren</strong> — Fiqih, bahasa Arab, akhlak</> },
    { time: '15.30', desc: <><strong>Ashar & Muhadatsah</strong> — Percakapan bahasa Arab</> },
    { time: '17.00', desc: <><strong>Olahraga & Ekskul</strong> — Aktivitas fisik & pengembangan diri</> },
    { time: '18.00', desc: <><strong>Maghrib & Kajian Malam</strong> — Sholat + pengajian</> },
    { time: '19.30', desc: <><strong>Isya & Belajar Malam</strong> — Belajar mandiri terbimbing</> },
    { time: '21.30', desc: <><strong>Istirahat Malam</strong> — Pengawasan musyrif asrama</> },
  ]

  const galeri = [
    { icon: '📸', label: 'KBM di Kelas' },
    { icon: '📖', label: 'Setoran Tahfidz' },
    { icon: '📚', label: 'Kajian Kitab' },
    { icon: '⚽', label: 'Olahraga' },
    { icon: '🎓', label: 'Upacara' },
  ]

  const prestasi = [
    { icon: '🥇', title: 'Juara 1 MTQ Tahfidz Kabupaten', desc: 'Cabang Tahfidz 5 Juz putra dan putri tingkat Kabupaten Jombang.', year: 'Jombang, 2024' },
    { icon: '🏆', title: 'Juara 1 Olimpiade Matematika', desc: 'Tingkat SMP/MTs se-Kabupaten Jombang.', year: 'Jombang, 2024' },
    { icon: '🥈', title: 'Juara 2 Debat Bahasa Arab', desc: 'Tingkat SMP/MTs se-Provinsi Jawa Timur.', year: 'Surabaya, 2023' },
    { icon: '🎖️', title: 'Juara 1 Pramuka Kwarcab', desc: 'Lomba kemah tingkat Kwarcab Jombang.', year: 'Jombang, 2023' },
    { icon: '📝', title: 'Juara 2 Karya Tulis Ilmiah', desc: 'Kategori pelajar SMP tingkat Kabupaten Jombang.', year: 'Jombang, 2023' },
    { icon: '🌟', title: 'Santri Berprestasi Nasional', desc: 'Penghargaan Kemenag RI kategori tahfidz terbaik tingkat nasional.', year: 'Jakarta, 2022' },
  ]

  const syaratAdmin = ['Fotokopi Akta Kelahiran (2 lembar)', 'Fotokopi Kartu Keluarga (2 lembar)', 'Fotokopi Rapor SD/MI kelas 4–6', 'Fotokopi Ijazah / SKL SD/MI', 'Pas foto 3×4 terbaru (4 lembar)', 'Surat keterangan sehat dari dokter', 'Formulir pendaftaran yang sudah dicetak']
  const syaratSantri = ['Lulusan SD/MI atau sederajat', 'Usia maksimal 15 tahun saat mendaftar', 'Beragama Islam', 'Bersedia tinggal di asrama (boarding)', 'Mendapat izin dan restu orang tua/wali', 'Bersedia mengikuti seluruh peraturan pesantren', 'Memiliki kemampuan baca Al-Qur\'an dasar']

  const tabs = ['Tentang', 'Kurikulum', 'Jadwal Harian', 'Prestasi', 'PPDB & Syarat']

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <>
      {/* BREADCRUMB */}
      <div className="unit-breadcrumb">
        <Link to="/">Beranda</Link>
        <span> / </span><Link to="/">Unit Pendidikan</Link>
        <span> / SMP Nur Muhammad</span>
      </div>

      {/* HERO */}
      <div className="unit-hero">
        <div className="unit-hero-arabic">ن</div>
        <div className="unit-hero-inner">
          <div>
            <div className="unit-hero-ppdb-badge">
              <span className="dot" /> PPDB {tahunAjaran} {statusSmp === 'open' ? 'Dibuka' : 'Ditutup'}
            </div>
            <h1>
              <span className="unit-level">Sekolah Menengah Pertama · Berbasis Pesantren</span>
              SMP<br />Nur Muhammad
            </h1>
            <p>Sekolah menengah pertama berbasis pesantren yang memadukan kurikulum nasional Kemendikbud dengan program unggulan tahfidzul Qur'an dan pembinaan akhlak islami secara menyeluruh.</p>
            <div className="unit-hero-cta">
              <a href="#ppdb" className="btn-unit-primary">Daftar Sekarang</a>
              <a href="#ppdb" className="btn-unit-outline">Lihat Info PPDB</a>
            </div>
          </div>
          <div className="unit-info-card">
            <h4>Informasi Unit</h4>
            {infoRows.map(r => (
              <div key={r.label} className="unit-info-row">
                <span className="unit-info-icon">{r.icon}</span>
                <div>
                  <div className="unit-info-label">{r.label}</div>
                  <div className="unit-info-value">{r.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="unit-tab-nav">
          {tabs.map(t => (
            <button key={t} className="unit-tab" onClick={() => scrollTo(t.toLowerCase().replace(/ /g, '-'))}>{t}</button>
          ))}
        </div>
      </div>

      {/* BODY */}
      <div className="unit-body">

        {/* TENTANG */}
        <div id="tentang" style={{ scrollMarginTop: '80px' }}>
          <div className="about-grid">
            <div>
              <div className="about-eyebrow">Tentang Unit</div>
              <h2 className="about-title">SMP Nur Muhammad</h2>
              <p className="about-text">SMP Nur Muhammad adalah jenjang pendidikan menengah pertama di bawah naungan Yayasan Pesantren Nur Muhammad. Berdiri sejak 2007, unit ini menggabungkan kurikulum nasional Kemendikbud dengan kurikulum pesantren secara harmonis dan seimbang.</p>
              <p className="about-text">Santri tidak hanya memperoleh ilmu akademik yang mumpuni, tetapi juga dibentuk karakter islaminya melalui pembiasaan ibadah harian, setoran hafalan Al-Qur'an, kajian kitab, dan pembinaan akhlak yang berkelanjutan.</p>
              <p className="about-text">Dengan sistem boarding full-time, santri hidup dan belajar dalam lingkungan yang kondusif, aman, dan bernuansa islami selama 24 jam bersama teman-teman sebayanya di bawah pengawasan musyrif berpengalaman.</p>
              <div className="stats-mini">
                {stats.map(s => (
                  <div key={s.label} className="stat-mini-card">
                    <div className="stat-mini-num">{s.num}</div>
                    <div className="stat-mini-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="keunggulan-sidebar">
              {keunggulan.map(k => (
                <div key={k.title} className="keung-item">
                  <span className="keung-icon">{k.icon}</span>
                  <div><h4>{k.title}</h4><p>{k.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* KURIKULUM */}
        <div id="kurikulum" style={{ scrollMarginTop: '80px' }} className="kurikulum-section">
          <div className="sec-eyebrow">Kurikulum</div>
          <h2 className="sec-title">Mata Pelajaran</h2>
          <p className="sec-sub">Perpaduan dua kurikulum yang saling melengkapi untuk membentuk santri yang cerdas sekaligus berakhlak mulia.</p>
          <div className="kurikulum-grid">
            <div className="kurikulum-card">
              <div className="kurikulum-header nasional">
                <span className="kh-icon">📘</span>
                <h3>Kurikulum Kemendikbud</h3>
              </div>
              <div className="kurikulum-body">
                <ul className="mapel-list">
                  {mapelNasional.map(m => <li key={m}>{m}</li>)}
                </ul>
              </div>
            </div>
            <div className="kurikulum-card">
              <div className="kurikulum-header pesantren">
                <span className="kh-icon">📗</span>
                <h3>Kurikulum Pesantren</h3>
              </div>
              <div className="kurikulum-body">
                <ul className="mapel-list pesantren">
                  {mapelPesantren.map(m => <li key={m}>{m}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* KEGIATAN */}
        <div className="kegiatan-section">
          <div className="sec-eyebrow">Kegiatan Khas</div>
          <h2 className="sec-title">Program Unggulan Harian</h2>
          <p className="sec-sub">Rutinitas yang membentuk karakter santri secara holistik — akademik, ruhiyah, dan sosial.</p>
          <div className="kegiatan-grid">
            {kegiatan.map(k => (
              <div key={k.title} className="kegiatan-card">
                <div className="kegiatan-icon">{k.icon}</div>
                <h4>{k.title}</h4>
                <p>{k.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* JADWAL */}
        <div id="jadwal-harian" style={{ scrollMarginTop: '80px' }} className="jadwal-section">
          <div className="sec-eyebrow">Jadwal Harian</div>
          <h2 className="sec-title">Rutinitas Santri SMP</h2>
          <p className="sec-sub">Ritme harian yang seimbang antara ibadah, belajar formal, kajian kitab, dan istirahat.</p>
          <div className="jadwal-grid">
            <div className="jadwal-card">
              <div className="jadwal-header pagi">🌅 Pagi — Siang · 04.00 – 12.00</div>
              <div className="jadwal-body">
                {jadwalPagi.map((j, i) => (
                  <div key={i} className="jadwal-row">
                    <span className="jadwal-time">{j.time}</span>
                    <span className="jadwal-desc">{j.desc}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="jadwal-card">
              <div className="jadwal-header malam">🌆 Siang — Malam · 12.00 – 22.00</div>
              <div className="jadwal-body">
                {jadwalMalam.map((j, i) => (
                  <div key={i} className="jadwal-row">
                    <span className="jadwal-time">{j.time}</span>
                    <span className="jadwal-desc">{j.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

       {/* GALERI */}
        <div className="unit-galeri-section">
          <div className="galeri-header">
            <div>
              <div className="sec-eyebrow">Galeri</div>
              <h2 className="sec-title" style={{ marginBottom: 0 }}>Aktivitas Santri SMP</h2>
            </div>
            <Link to="/galeri" className="link-all">Lihat semua foto →</Link>
          </div>
          <div className="unit-galeri-grid">
            {galeri.length === 0 ? (
              [{ icon: '📸', label: 'KBM di Kelas' }, { icon: '📖', label: 'Setoran Tahfidz' }, { icon: '📚', label: 'Kajian Kitab' }, { icon: '⚽', label: 'Olahraga' }, { icon: '🎓', label: 'Upacara' }].map(g => (
                <div key={g.label} className="galeri-item">
                  <div className="galeri-thumb">{g.icon}</div>
                  <div className="galeri-label">{g.label}</div>
                </div>
              ))
            ) : (
              galeri.slice(0, 5).map(photo => (
                <div key={photo.id} className="galeri-item">
                  <div className="galeri-thumb" style={{ padding: 0, overflow: 'hidden' }}>
                    <img src={photo.path} alt={photo.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div className="galeri-label">{photo.title}</div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* PRESTASI */}
        <div id="prestasi" style={{ scrollMarginTop: '80px' }} className="prestasi-section">
          <div className="sec-eyebrow">Prestasi</div>
          <h2 className="sec-title">Pencapaian Santri SMP</h2>
          <p className="sec-sub">Santri SMP Nur Muhammad terus menorehkan prestasi membanggakan di berbagai bidang.</p>
          <div className="prestasi-grid">
            {prestasi.map(p => (
              <div key={p.title} className="prestasi-card">
                <div className="prestasi-icon">{p.icon}</div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
                <div className="prestasi-year">{p.year}</div>
              </div>
            ))}
          </div>
        </div>

        {/* PPDB */}
        <div id="ppdb" style={{ scrollMarginTop: '80px' }}>
          <div className="unit-ppdb-section">
            <div className="unit-ppdb-inner">
              <div>
                <div className="ppdb-eyebrow">Pendaftaran · PPDB 2025/2026</div>
                <h2 className="ppdb-title">Daftar ke SMP Nur Muhammad</h2>
                <p className="ppdb-desc">Bergabunglah bersama ratusan santri di SMP Nur Muhammad. Pendaftaran online mudah dan bisa dilakukan kapan saja.</p>
                <div className="syarat-grid">
                  <div className="syarat-card">
                    <h4>📋 Syarat Administrasi</h4>
                    <ul className="syarat-list">
                      {syaratAdmin.map(s => <li key={s}>{s}</li>)}
                    </ul>
                  </div>
                  <div className="syarat-card">
                    <h4>✅ Syarat Calon Santri</h4>
                    <ul className="syarat-list">
                      {syaratSantri.map(s => <li key={s}>{s}</li>)}
                    </ul>
                  </div>
                </div>
                <div className="ppdb-btns">
                  <Link to="/ppdb" className="btn-ppdb-gold">✏️ Daftar PPDB Online</Link>
                  <a href={`https://wa.me/${waNumber}`} className="btn-ppdb-wa" target="_blank" rel="noreferrer">💬 Tanya via WhatsApp</a>
                </div>
              </div>
              <div className="ppdb-info-card">
                <h4>Info PPDB SMP {tahunAjaran}</h4>
                <div className="ppdb-info-row">
                  <span className="pir-label">Status</span>
                  <span className="pir-value">
                    <span className={statusSmp === 'open' ? 'status-open-badge' : 'status-closed-badge'}>
                      {statusSmp === 'open' ? 'Dibuka' : 'Ditutup'}
                    </span>
                  </span>
                </div>
                <div className="ppdb-info-row"><span className="pir-label">Penerimaan</span><span className="pir-value">Putra & Putri</span></div>
                <div className="ppdb-info-row"><span className="pir-label">Kuota</span><span className="pir-value">{kuotaSmp} Santri</span></div>
                <div className="ppdb-info-row"><span className="pir-label">Biaya Daftar</span><span className="pir-value">Rp 150.000</span></div>
                <div className="ppdb-info-row"><span className="pir-label">Tahun Ajaran</span><span className="pir-value">{tahunAjaran}</span></div>
                <div className="ppdb-note">Pendaftaran ditutup setelah kuota terpenuhi. Segera daftarkan putra-putri Anda.</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
