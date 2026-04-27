import { Link } from 'react-router-dom'
import '../../styles/unit.css'

export default function UnitMa() {
  const infoRows = [
    { icon: '📚', label: 'Nama Unit', value: 'MA Nur Muhammad' },
    { icon: '📍', label: 'Lokasi', value: 'Wonoayu, Mojoagung, Jombang' },
    { icon: '👥', label: 'Penerimaan', value: 'Putra & Putri' },
    { icon: '📅', label: 'Lama Studi', value: '3 Tahun (Kelas 10–12)' },
    { icon: '📜', label: 'Akreditasi', value: 'A — BAN-S/M' },
  ]

  const stats = [
    { num: '150+', label: 'Santri Aktif' },
    { num: '22', label: 'Guru & Ustadz' },
    { num: '15+', label: 'Juz Target Hafalan' },
    { num: '40+', label: 'Penghargaan' },
  ]

  const keunggulan = [
    { icon: '📖', title: 'Kitab Kuning Lanjutan', desc: 'Kajian kitab klasik bersanad — Fathul Qarib, Bulughul Maram, Tafsir Jalalayn, dan lebih banyak lagi.' },
    { icon: '🎓', title: 'Persiapan Perguruan Tinggi', desc: 'Bimbingan intensif SNBP, SNBT, dan jalur UM-PTKIN untuk santri yang ingin melanjutkan studi.' },
    { icon: '🕌', title: 'Boarding Full-Time', desc: 'Asrama terpisah putra-putri dengan pembinaan 24 jam oleh musyrif dan musyrifah berpengalaman.' },
    { icon: '🗣️', title: 'Bahasa Arab & Inggris Aktif', desc: 'Muhadatsah arabiyah dan English conversation harian untuk bekal komunikasi global.' },
    { icon: '📜', title: 'Akreditasi A', desc: 'Terakreditasi A oleh BAN-S/M, ijazah setara SMA diakui untuk melanjutkan ke perguruan tinggi.' },
  ]

  const mapelNasional = ['Matematika (Wajib & Peminatan)', 'Bahasa Indonesia', 'Bahasa Inggris', 'Fisika / Biologi / Kimia', 'Sejarah Indonesia & Sejarah Peminatan', 'Geografi & Ekonomi', 'PKn & Pendidikan Agama Islam', 'Seni Budaya & Pendidikan Jasmani', 'Bahasa Arab (Kemenag)', 'Fikih, Akidah Akhlak, Al-Qur\'an Hadits']
  const mapelPesantren = ['Tahfidzul Qur\'an (target 15+ juz)', 'Tilawah & Ilmu Tajwid Lanjutan', 'Fiqih Lanjutan & Ushul Fiqih', 'Tafsir Al-Qur\'an (Tafsir Jalalayn)', 'Hadits & Mustholah Hadits', 'Kitab Kuning (Fathul Qarib, Bulughul Maram)', 'Nahwu & Shorof Lanjutan', 'Bahasa Arab Aktif — Muhadatsah', 'Akidah & Ilmu Kalam', 'Sirah Nabawiyah & Tarikh Islam']

  const kegiatan = [
    { icon: '📖', title: 'Setoran Tahfidz', desc: 'Hafalan harian dengan target 15+ juz selama 3 tahun, dibimbing musyrif hafidz bersanad.' },
    { icon: '📚', title: 'Kajian Kitab Kuning', desc: "Pengajian kitab klasik ba'da Shubuh dan Maghrib dipimpin langsung oleh pengasuh pesantren." },
    { icon: '🗣️', title: 'Muhadatsah Arabiyah', desc: 'Percakapan bahasa Arab harian untuk membiasakan santri berkomunikasi aktif dalam bahasa Al-Qur\'an.' },
    { icon: '🎓', title: 'Bimbel Perguruan Tinggi', desc: 'Persiapan SNBP, SNBT, dan jalur UM-PTKIN bagi santri kelas 12 yang ingin melanjutkan studi.' },
    { icon: '🌙', title: 'Qiyamul Lail', desc: 'Sholat malam berjamaah setiap hari sebagai fondasi ruhiyah dan kedekatan dengan Allah SWT.' },
    { icon: '🏅', title: 'Olimpiade & Musabaqah', desc: 'Pembinaan intensif untuk MQK, MTQ, debat bahasa Arab, olimpiade sains, dan KTI tingkat provinsi–nasional.' },
    { icon: '🤝', title: 'Kepemimpinan & OSIS', desc: 'Organisasi santri aktif melatih jiwa kepemimpinan, komunikasi, dan manajemen kegiatan pesantren.' },
    { icon: '⚽', title: 'Olahraga & Ekskul', desc: 'Futsal, badminton, hadrah, kaligrafi, dan karya tulis ilmiah untuk pengembangan minat dan bakat.' },
  ]

  const jadwalPagi = [
    { time: '04.00', desc: <><strong>Qiyamul Lail & Shubuh</strong> — Berjamaah di masjid pesantren</> },
    { time: '04.45', desc: <><strong>Kajian Kitab Pagi</strong> — Bersama pengasuh & ustadz</> },
    { time: '05.30', desc: <><strong>Setoran Tahfidz</strong> — Kepada musyrif hafidz</> },
    { time: '06.30', desc: <><strong>Mandi & Sarapan</strong> — Persiapan KBM formal</> },
    { time: '07.00', desc: <><strong>KBM Formal</strong> — Kurikulum Kemendikbud / Kemenag</> },
    { time: '10.00', desc: <><strong>Istirahat & Dhuha</strong> — Sholat dhuha berjamaah</> },
    { time: '12.00', desc: <><strong>Sholat Dzuhur</strong> — Berjamaah di masjid</> },
  ]

  const jadwalMalam = [
    { time: '12.30', desc: <><strong>Makan Siang</strong> & Istirahat siang</> },
    { time: '13.30', desc: <><strong>KBM Pesantren</strong> — Kitab kuning, bahasa Arab, ushul fiqih</> },
    { time: '15.30', desc: <><strong>Ashar & Muhadatsah</strong> — Percakapan bahasa Arab aktif</> },
    { time: '17.00', desc: <><strong>Olahraga & Ekskul</strong> — Aktivitas fisik & pengembangan diri</> },
    { time: '18.00', desc: <><strong>Maghrib & Kajian Malam</strong> — Sholat + pengajian kitab</> },
    { time: '19.30', desc: <><strong>Isya & Belajar Malam</strong> — Belajar mandiri terbimbing</> },
    { time: '21.30', desc: <><strong>Istirahat Malam</strong> — Pengawasan musyrif asrama</> },
  ]

  const galeri = [
    { icon: '📚', label: 'KBM di Kelas' },
    { icon: '📖', label: 'Kajian Kitab' },
    { icon: '🎓', label: 'Haflah & Wisuda' },
    { icon: '🏅', label: 'Lomba & Prestasi' },
    { icon: '🏠', label: 'Asrama Santri' },
  ]

  const prestasi = [
    { icon: '🥇', title: 'Juara 1 MQK Tingkat Provinsi', desc: 'Musabaqah Qira\'atil Kutub cabang Fiqih kategori MA se-Jawa Timur.', year: 'Surabaya, 2024' },
    { icon: '🏆', title: 'Juara 1 MTQ Tahfidz Kabupaten', desc: 'Cabang Tahfidz 10 Juz putra dan putri tingkat Kabupaten Jombang.', year: 'Jombang, 2024' },
    { icon: '🥈', title: 'Juara 2 Debat Bahasa Arab', desc: 'Lomba debat bahasa Arab tingkat MA/SMA se-Jawa Timur.', year: 'Malang, 2024' },
    { icon: '🎖️', title: 'Juara 1 Olimpiade Kimia', desc: 'Olimpiade Sains tingkat MA/SMA se-Kabupaten Jombang.', year: 'Jombang, 2023' },
    { icon: '📝', title: 'Juara 1 Karya Tulis Ilmiah', desc: 'Kategori pelajar MA/SMA tingkat provinsi Jawa Timur.', year: 'Surabaya, 2023' },
    { icon: '🌟', title: 'Diterima PTN & PTKIN Terbaik', desc: 'Alumni MA diterima di UIN, IAIN, UGM, Unair, dan Al-Azhar Kairo.', year: 'Setiap Tahun' },
  ]

  const syaratAdmin = ['Fotokopi Akta Kelahiran (2 lembar)', 'Fotokopi Kartu Keluarga (2 lembar)', 'Fotokopi Rapor SMP/MTs kelas 7–9', 'Fotokopi Ijazah / SKL SMP/MTs', 'Pas foto 3×4 terbaru (4 lembar)', 'Surat keterangan sehat dari dokter', 'Formulir pendaftaran yang sudah dicetak']
  const syaratSantri = ['Lulusan SMP/MTs atau sederajat', 'Beragama Islam', 'Bersedia tinggal di asrama (boarding)', 'Mendapat izin dan restu orang tua/wali', 'Bersedia mengikuti peraturan pesantren', 'Memiliki kemampuan baca Al-Qur\'an', 'Diutamakan memiliki hafalan Al-Qur\'an']

  const tabs = ['Tentang', 'Kurikulum', 'Jadwal Harian', 'Prestasi', 'PPDB & Syarat']
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <>
      <div className="unit-breadcrumb">
        <Link to="/">Beranda</Link>
        <span> / </span><Link to="/">Unit Pendidikan</Link>
        <span> / MA Nur Muhammad</span>
      </div>

      <div className="unit-hero">
        <div className="unit-hero-arabic">ن</div>
        <div className="unit-hero-inner">
          <div>
            <div className="unit-hero-ppdb-badge"><span className="dot" /> PPDB 2025/2026 Dibuka</div>
            <h1>
              <span className="unit-level">Madrasah Aliyah · Setara SMA</span>
              MA<br />Nur Muhammad
            </h1>
            <p>Madrasah Aliyah berbasis pesantren yang memadukan kurikulum nasional Kemendikbud dengan kajian keislaman mendalam — membentuk santri yang siap melanjutkan ke perguruan tinggi sekaligus kokoh dalam ilmu agama.</p>
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

      <div className="unit-body">

        <div id="tentang" style={{ scrollMarginTop: '80px' }}>
          <div className="about-grid">
            <div>
              <div className="about-eyebrow">Tentang Unit</div>
              <h2 className="about-title">MA Nur Muhammad</h2>
              <p className="about-text">MA Nur Muhammad adalah jenjang Madrasah Aliyah setara SMA di bawah naungan Yayasan Pesantren Nur Muhammad. Berdiri sejak 2011, unit ini hadir untuk melanjutkan pembinaan santri lulusan SMP/MTs dengan kajian keislaman yang lebih mendalam dan komprehensif.</p>
              <p className="about-text">Santri tidak hanya dipersiapkan untuk lulus ujian nasional dan melanjutkan ke perguruan tinggi terbaik, tetapi juga dibentuk menjadi pribadi yang paham ilmu agama secara luas — dari fiqih kontemporer, tafsir, hadits, hingga kitab kuning klasik bersanad.</p>
              <p className="about-text">Dengan sistem boarding full-time, seluruh aktivitas santri berlangsung dalam lingkungan islami yang kondusif dan terstruktur.</p>
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

        <div id="kurikulum" style={{ scrollMarginTop: '80px' }} className="kurikulum-section">
          <div className="sec-eyebrow">Kurikulum</div>
          <h2 className="sec-title">Mata Pelajaran</h2>
          <p className="sec-sub">Perpaduan dua kurikulum yang saling melengkapi untuk membentuk santri yang cerdas sekaligus berakhlak mulia.</p>
          <div className="kurikulum-grid">
            <div className="kurikulum-card">
              <div className="kurikulum-header nasional"><span className="kh-icon">📘</span><h3>Kurikulum Kemendikbud / Kemenag</h3></div>
              <div className="kurikulum-body"><ul className="mapel-list">{mapelNasional.map(m => <li key={m}>{m}</li>)}</ul></div>
            </div>
            <div className="kurikulum-card">
              <div className="kurikulum-header pesantren"><span className="kh-icon">📗</span><h3>Kurikulum Pesantren</h3></div>
              <div className="kurikulum-body"><ul className="mapel-list pesantren">{mapelPesantren.map(m => <li key={m}>{m}</li>)}</ul></div>
            </div>
          </div>
        </div>

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

        <div id="jadwal-harian" style={{ scrollMarginTop: '80px' }} className="jadwal-section">
          <div className="sec-eyebrow">Jadwal Harian</div>
          <h2 className="sec-title">Rutinitas Santri MA</h2>
          <p className="sec-sub">Ritme harian yang seimbang antara ibadah, belajar formal, kajian kitab, dan istirahat.</p>
          <div className="jadwal-grid">
            <div className="jadwal-card">
              <div className="jadwal-header pagi">🌅 Pagi — Siang · 04.00 – 12.00</div>
              <div className="jadwal-body">{jadwalPagi.map((j, i) => <div key={i} className="jadwal-row"><span className="jadwal-time">{j.time}</span><span className="jadwal-desc">{j.desc}</span></div>)}</div>
            </div>
            <div className="jadwal-card">
              <div className="jadwal-header malam">🌆 Siang — Malam · 12.00 – 22.00</div>
              <div className="jadwal-body">{jadwalMalam.map((j, i) => <div key={i} className="jadwal-row"><span className="jadwal-time">{j.time}</span><span className="jadwal-desc">{j.desc}</span></div>)}</div>
            </div>
          </div>
        </div>

        <div className="unit-galeri-section">
          <div className="galeri-header">
            <div><div className="sec-eyebrow">Galeri</div><h2 className="sec-title" style={{ marginBottom: 0 }}>Aktivitas Santri MA</h2></div>
            <a href="#" className="link-all">Lihat semua foto →</a>
          </div>
          <div className="unit-galeri-grid">
            {galeri.map(g => <div key={g.label} className="galeri-item"><div className="galeri-thumb">{g.icon}</div><div className="galeri-label">{g.label}</div></div>)}
          </div>
        </div>

        <div id="prestasi" style={{ scrollMarginTop: '80px' }} className="prestasi-section">
          <div className="sec-eyebrow">Prestasi</div>
          <h2 className="sec-title">Pencapaian Santri MA</h2>
          <p className="sec-sub">Santri MA Nur Muhammad terus menorehkan prestasi membanggakan di berbagai bidang.</p>
          <div className="prestasi-grid">
            {prestasi.map(p => <div key={p.title} className="prestasi-card"><div className="prestasi-icon">{p.icon}</div><h4>{p.title}</h4><p>{p.desc}</p><div className="prestasi-year">{p.year}</div></div>)}
          </div>
        </div>

        <div id="ppdb" style={{ scrollMarginTop: '80px' }}>
          <div className="unit-ppdb-section">
            <div className="unit-ppdb-inner">
              <div>
                <div className="ppdb-eyebrow">Pendaftaran · PPDB 2025/2026</div>
                <h2 className="ppdb-title">Daftar ke MA Nur Muhammad</h2>
                <p className="ppdb-desc">Bergabunglah bersama ratusan santri di MA Nur Muhammad. Pendaftaran online mudah dan bisa dilakukan kapan saja.</p>
                <div className="syarat-grid">
                  <div className="syarat-card"><h4>📋 Syarat Administrasi</h4><ul className="syarat-list">{syaratAdmin.map(s => <li key={s}>{s}</li>)}</ul></div>
                  <div className="syarat-card"><h4>✅ Syarat Calon Santri</h4><ul className="syarat-list">{syaratSantri.map(s => <li key={s}>{s}</li>)}</ul></div>
                </div>
                <div className="ppdb-btns">
                  <Link to="/ppdb" className="btn-ppdb-gold">✏️ Daftar PPDB Online</Link>
                  <a href="https://wa.me/6281200000000" className="btn-ppdb-wa" target="_blank" rel="noreferrer">💬 Tanya via WhatsApp</a>
                </div>
              </div>
              <div className="ppdb-info-card">
                <h4>Info PPDB MA 2025/2026</h4>
                <div className="ppdb-info-row"><span className="pir-label">Status</span><span className="pir-value"><span className="status-open-badge">Dibuka</span></span></div>
                <div className="ppdb-info-row"><span className="pir-label">Penerimaan</span><span className="pir-value">Putra & Putri</span></div>
                <div className="ppdb-info-row"><span className="pir-label">Kuota</span><span className="pir-value">50 Santri</span></div>
                <div className="ppdb-info-row"><span className="pir-label">Biaya Daftar</span><span className="pir-value">Rp 150.000</span></div>
                <div className="ppdb-info-row"><span className="pir-label">Tahun Ajaran</span><span className="pir-value">2025/2026</span></div>
                <div className="ppdb-note">Pendaftaran ditutup setelah kuota terpenuhi.</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
