import { Link } from 'react-router-dom'
import '../../styles/unit.css'

export default function UnitTahfidz() {
  const infoRows = [
    { icon: '📖', label: 'Nama Program', value: 'Tahfidz Murni' },
    { icon: '📍', label: 'Lokasi', value: 'Wonoayu, Mojoagung, Jombang' },
    { icon: '👥', label: 'Penerimaan', value: 'Putra & Putri' },
    { icon: '🎯', label: 'Target Hafalan', value: '30 Juz Al-Qur\'an' },
    { icon: '📅', label: 'Syarat Masuk', value: 'Lulusan SMA / MA' },
    { icon: '⏱️', label: 'Durasi', value: 'Intensif (fleksibel)' },
  ]

  const stats = [
    { num: '80+', label: 'Santri Aktif' },
    { num: '12', label: 'Musyrif Hafidz' },
    { num: '30', label: 'Juz Target' },
    { num: '98%', label: 'Khatam Al-Qur\'an' },
  ]

  const keunggulan = [
    { icon: '🎯', title: 'Fokus Murni Tahfidz', desc: 'Tanpa beban pelajaran formal — seluruh waktu dicurahkan hanya untuk hafalan dan pendalaman Al-Qur\'an.' },
    { icon: '👨‍🏫', title: 'Musyrif Bersanad', desc: 'Dibimbing langsung oleh hafidz/hafidzah bersanad yang terhubung hingga Rasulullah SAW.' },
    { icon: '🔄', title: 'Sistem Muroja\'ah Ketat', desc: 'Sistem pengulangan hafalan terstruktur setiap hari untuk menjaga kualitas dan kelancaran hafalan.' },
    { icon: '🕌', title: 'Lingkungan Kondusif', desc: 'Asrama terpisah putra-putri dalam lingkungan pesantren yang tenang, bersih, dan penuh nuansa islami.' },
    { icon: '📜', title: 'Ijazah Sanad Al-Qur\'an', desc: 'Santri yang khatam 30 juz mendapatkan ijazah sanad Al-Qur\'an dari pengasuh pesantren.' },
  ]

  const metode = [
    { icon: '📖', title: 'Talaqqi', desc: 'Santri menyetorkan hafalan baru secara langsung kepada musyrif hafidz setiap hari. Metode talaqqi memastikan kualitas bacaan — tajwid, makhraj, dan kelancaran — terjaga sejak awal.' },
    { icon: '🔄', title: "Muroja'ah Harian", desc: "Hafalan lama diulang dan diperkuat setiap hari menggunakan sistem sabqi, muroja'ah qorib, dan muroja'ah ba'id. Sistem ini mencegah hafalan hilang seiring bertambahnya juz." },
    { icon: '🌙', title: "Tasmi' & Sima'an", desc: "Secara berkala santri melakukan tasmi' — menyetorkan hafalan dalam jumlah banyak (5–10 juz) dalam satu sesi — untuk menguji kelancaran dan konsistensi hafalan." },
  ]

  const kegiatan = [
    { icon: '📖', title: 'Setoran Hafalan Baru', desc: 'Setoran hafalan baru kepada musyrif setiap pagi — minimal setengah hingga 1 halaman per hari.' },
    { icon: '🔄', title: 'Muroja\'ah Mandiri', desc: 'Waktu muroja\'ah mandiri terjadwal untuk mengulang hafalan lama agar tetap lancar dan kuat.' },
    { icon: '📚', title: "Kajian Ilmu Al-Qur'an", desc: "Kajian Ulumul Qur'an, Tafsir, dan Ilmu Tajwid lanjutan bersama pengasuh pesantren." },
    { icon: '🌙', title: 'Qiyamul Lail', desc: 'Sholat malam berjamaah setiap hari sebagai fondasi ruhiyah para penghafal Al-Qur\'an.' },
    { icon: '🤲', title: 'Tilawah Bersama', desc: "Tilawah Al-Qur'an berjamaah setiap ba'da Maghrib untuk memperindah bacaan dan memperkuat hafalan." },
    { icon: '📝', title: 'Kajian Kitab', desc: "Pengajian kitab kuning ringan ba'da Shubuh agar santri tetap mendapat asupan ilmu fiqih dan akhlak." },
    { icon: '🏃', title: 'Olahraga Pagi', desc: 'Aktivitas fisik ringan setiap pagi untuk menjaga kesehatan tubuh — modal utama semangat menghafal.' },
    { icon: '🎤', title: "Sima'an Rutin", desc: "Sima'an bersama antar santri setiap pekan untuk saling menyimak dan menguatkan hafalan satu sama lain." },
  ]

  const jadwalPagi = [
    { time: '03.30', desc: <><strong>Tahajjud & Qiyamul Lail</strong> — Berjamaah di masjid pesantren</> },
    { time: '04.15', desc: <><strong>Shubuh Berjamaah</strong> — Dilanjutkan muroja'ah mandiri</> },
    { time: '05.00', desc: <><strong>Kajian Kitab</strong> — Bersama pengasuh / ustadz pesantren</> },
    { time: '06.00', desc: <><strong>Setoran Hafalan Baru</strong> — Kepada musyrif hafidz</> },
    { time: '07.30', desc: <><strong>Mandi & Sarapan</strong> — Istirahat sejenak</> },
    { time: '08.30', desc: <><strong>Muroja'ah Mandiri</strong> — Mengulang hafalan qorib & ba'id</> },
    { time: '10.00', desc: <><strong>Istirahat & Dhuha</strong> — Sholat dhuha berjamaah</> },
    { time: '12.00', desc: <><strong>Sholat Dzuhur</strong> — Berjamaah di masjid</> },
  ]

  const jadwalMalam = [
    { time: '12.30', desc: <><strong>Makan Siang</strong> & Istirahat siang</> },
    { time: '13.30', desc: <><strong>Muroja'ah Kelompok</strong> — Sima'an bersama teman setorkan</> },
    { time: '15.30', desc: <><strong>Sholat Ashar</strong> — Berjamaah, dilanjut muroja'ah mandiri</> },
    { time: '17.00', desc: <><strong>Olahraga Sore</strong> — Aktivitas fisik & pengembangan diri</> },
    { time: '18.00', desc: <><strong>Maghrib & Tilawah</strong> — Tilawah berjamaah ba'da Maghrib</> },
    { time: '19.15', desc: <><strong>Sholat Isya</strong> — Berjamaah di masjid</> },
    { time: '19.45', desc: <><strong>Muroja'ah Malam</strong> — Sesi akhir pengulangan hafalan</> },
    { time: '21.30', desc: <><strong>Istirahat Malam</strong> — Pengawasan musyrif asrama</> },
  ]

  const galeri = [
    { icon: '📖', label: 'Setoran Hafalan' },
    { icon: '🤲', label: 'Tilawah Berjamaah' },
    { icon: '🎉', label: 'Khataman 30 Juz' },
    { icon: '🌙', label: 'Qiyamul Lail' },
    { icon: '📜', label: 'Ijazah Sanad' },
  ]

  const alumni = [
    { icon: '👳', name: 'Ahmad Fauzan, S.Q.', detail: 'Alumni 2023 · Kini mengajar di pesantren Jombang', quote: 'Dua tahun di sini adalah perjalanan terbaik hidup saya. Bimbingan musyrif yang sabar dan lingkungan pesantren yang kondusif membuat hafalan terasa lebih mudah dan berkah. Alhamdulillah, khatam 30 juz sebelum usia 21 tahun.' },
    { icon: '🧕', name: 'Nurul Hidayah, S.Q.', detail: 'Alumni 2022 · Melanjutkan studi di UIN Surabaya', quote: "Yang membuat saya berterima kasih adalah sistem muroja'ahnya yang sangat terstruktur. Bukan hanya menghafal, tapi benar-benar menjaga hafalan. Setelah keluar, hafalan saya masih terjaga karena kebiasaan muroja'ah sudah mendarah daging." },
    { icon: '👳', name: 'M. Rizqi Maulana, S.Q.', detail: 'Alumni 2024 · Imam masjid di Surabaya', quote: 'Saya masuk dengan modal hafalan 5 juz. Dua tahun kemudian keluar dengan 30 juz dan ijazah sanad. Bukan hanya hafalan yang bertambah — kepercayaan diri, kedisiplinan, dan kecintaan saya pada Al-Qur\'an bertumbuh jauh lebih besar.' },
  ]

  const syaratAdmin = ['Fotokopi Akta Kelahiran (2 lembar)', 'Fotokopi Kartu Keluarga (2 lembar)', 'Fotokopi Ijazah / SKL SMA/MA/Sederajat', 'Fotokopi Rapor SMA/MA kelas 10–12', 'Pas foto 3×4 terbaru (4 lembar)', 'Surat keterangan sehat dari dokter', 'Formulir pendaftaran yang sudah dicetak']
  const syaratSantri = ['Lulusan SMA / MA / sederajat', 'Beragama Islam (putra maupun putri)', 'Bersedia tinggal di asrama (boarding)', "Memiliki kemampuan baca Al-Qur'an dengan baik", 'Diutamakan memiliki modal hafalan awal', 'Mendapat izin dan restu orang tua/wali', 'Bersedia mengikuti seluruh peraturan pesantren']

  const tabs = ['Tentang', 'Metode', 'Jadwal Harian', 'Testimoni', 'PPDB & Syarat']
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <>
      <div className="unit-breadcrumb">
        <Link to="/">Beranda</Link>
        <span> / </span><Link to="/">Unit Pendidikan</Link>
        <span> / Tahfidz Murni</span>
      </div>

      <div className="unit-hero">
        <div className="unit-hero-arabic">ن</div>
        <div className="unit-hero-inner">
          <div>
            <div className="unit-hero-ppdb-badge"><span className="dot" /> PPDB 2026/2027 Dibuka</div>
            <h1>
              <span className="unit-level">Program Intensif · Pasca SMA / MA</span>
              Tahfidz<br />Murni
            </h1>
            <p>Program intensif hafalan Al-Qur'an 30 juz untuk santri pasca SMA/MA, dibimbing langsung oleh pengasuh dan musyrif hafidz bersanad — dalam lingkungan pesantren yang kondusif dan penuh barakah.</p>
            <div className="unit-hero-cta">
              <a href="#ppdb" className="btn-unit-primary">Daftar Sekarang</a>
              <a href="#ppdb" className="btn-unit-outline">Lihat Info PPDB</a>
            </div>
          </div>
          <div className="unit-info-card">
            <h4>Informasi Program</h4>
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

        {/* TENTANG */}
        <div id="tentang" style={{ scrollMarginTop: '80px' }}>
          <div className="about-grid">
            <div>
              <div className="about-eyebrow">Tentang Program</div>
              <h2 className="about-title">Program Tahfidz Murni</h2>
              <p className="about-text">Program Tahfidz Murni adalah program unggulan Pesantren Nur Muhammad yang dirancang khusus untuk santri pasca SMA/MA yang ingin mengabdikan diri sepenuhnya dalam menghafal Al-Qur'an 30 juz secara intensif dan bersanad.</p>
              <p className="about-text">Berbeda dari program tahfidz di jenjang SMP dan MA, program ini bersifat murni — seluruh waktu dan energi santri difokuskan hanya untuk hafalan, tilawah, dan pendalaman ilmu Al-Qur'an tanpa beban kurikulum sekolah formal.</p>
              <p className="about-text">Setiap santri dibimbing secara personal oleh musyrif hafidz bersanad yang berpengalaman, dengan sistem setoran dan muroja'ah yang terstruktur ketat namun penuh keikhlasan.</p>
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

        {/* METODE */}
        <div id="metode" style={{ scrollMarginTop: '80px' }} className="kurikulum-section">
          <div className="sec-eyebrow">Metode Pembelajaran</div>
          <h2 className="sec-title">Metode Tahfidz Kami</h2>
          <p className="sec-sub">Tiga pilar metode yang terbukti efektif mengantarkan santri mencapai hafalan 30 juz dengan kualitas terjaga.</p>
          <div className="kurikulum-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {metode.map(m => (
              <div key={m.title} className="kurikulum-card">
                <div className="kurikulum-header pesantren" style={{ flexDirection: 'column', textAlign: 'center', padding: '1.5rem' }}>
                  <span style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{m.icon}</span>
                  <h3>{m.title}</h3>
                </div>
                <div className="kurikulum-body">
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.65' }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* KEGIATAN */}
        <div className="kegiatan-section">
          <div className="sec-eyebrow">Kegiatan Khas</div>
          <h2 className="sec-title">Rutinitas Harian Santri</h2>
          <p className="sec-sub">Selain hafalan, santri juga mendapatkan pembinaan ruhiyah, ilmu agama, dan pengembangan diri.</p>
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
          <h2 className="sec-title">Rutinitas Santri Tahfidz</h2>
          <p className="sec-sub">Ritme harian yang padat namun seimbang — dirancang agar hafalan maksimal tanpa mengorbankan kesehatan santri.</p>
          <div className="jadwal-grid">
            <div className="jadwal-card">
              <div className="jadwal-header pagi">🌅 Pagi — Siang · 03.30 – 12.00</div>
              <div className="jadwal-body">{jadwalPagi.map((j, i) => <div key={i} className="jadwal-row"><span className="jadwal-time">{j.time}</span><span className="jadwal-desc">{j.desc}</span></div>)}</div>
            </div>
            <div className="jadwal-card">
              <div className="jadwal-header malam">🌆 Siang — Malam · 12.00 – 22.00</div>
              <div className="jadwal-body">{jadwalMalam.map((j, i) => <div key={i} className="jadwal-row"><span className="jadwal-time">{j.time}</span><span className="jadwal-desc">{j.desc}</span></div>)}</div>
            </div>
          </div>
        </div>

        {/* GALERI */}
        <div className="unit-galeri-section">
          <div className="galeri-header">
            <div><div className="sec-eyebrow">Galeri</div><h2 className="sec-title" style={{ marginBottom: 0 }}>Suasana Program Tahfidz</h2></div>
            <a href="#" className="link-all">Lihat semua foto →</a>
          </div>
          <div className="unit-galeri-grid">
            {galeri.map(g => <div key={g.label} className="galeri-item"><div className="galeri-thumb">{g.icon}</div><div className="galeri-label">{g.label}</div></div>)}
          </div>
        </div>

        {/* TESTIMONI */}
        <div id="testimoni" style={{ scrollMarginTop: '80px', marginBottom: '4rem' }}>
          <div className="sec-eyebrow">Testimoni</div>
          <h2 className="sec-title">Kata Alumni Tahfidz</h2>
          <p className="sec-sub">Pengalaman nyata dari santri yang telah menyelesaikan program Tahfidz Murni Pesantren Nur Muhammad.</p>
          <div className="prestasi-grid">
            {alumni.map(a => (
              <div key={a.name} className="prestasi-card" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '3rem', color: 'var(--gold)', opacity: 0.3, lineHeight: 0.8 }}>"</div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-mid)', lineHeight: 1.7, fontStyle: 'italic', flex: 1 }}>{a.quote}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '0.5rem' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--green-soft), var(--green-light))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0 }}>{a.icon}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--green-dark)' }}>{a.name}</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{a.detail}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PPDB */}
        <div id="ppdb" style={{ scrollMarginTop: '80px' }}>
          <div className="unit-ppdb-section">
            <div className="unit-ppdb-inner">
              <div>
                <div className="ppdb-eyebrow">Pendaftaran · PPDB 2026/2027</div>
                <h2 className="ppdb-title">Daftar Program Tahfidz Murni</h2>
                <p className="ppdb-desc">Dedikasikan waktu terbaik Anda untuk Al-Qur'an. Kami siap membimbing perjalanan hafalan Anda dari juz pertama hingga khatam 30 juz.</p>
                <div className="syarat-grid">
                  <div className="syarat-card"><h4>📋 Syarat Administrasi</h4><ul className="syarat-list">{syaratAdmin.map(s => <li key={s}>{s}</li>)}</ul></div>
                  <div className="syarat-card"><h4>✅ Syarat Calon Santri</h4><ul className="syarat-list">{syaratSantri.map(s => <li key={s}>{s}</li>)}</ul></div>
                </div>
                <div className="ppdb-btns">
                  <Link to="/ppdb" className="btn-ppdb-gold">✏️ Daftar PPDB Online</Link>
                  <a href="https://wa.me/6282177832648" className="btn-ppdb-wa" target="_blank" rel="noreferrer">💬 Tanya via WhatsApp</a>
                </div>
              </div>
              <div className="ppdb-info-card">
                <h4>Info PPDB Tahfidz 2026/2027</h4>
                <div className="ppdb-info-row"><span className="pir-label">Status</span><span className="pir-value"><span className="status-open-badge">Dibuka</span></span></div>
                <div className="ppdb-info-row"><span className="pir-label">Penerimaan</span><span className="pir-value">Putra & Putri</span></div>
                <div className="ppdb-info-row"><span className="pir-label">Kuota</span><span className="pir-value">30 Santri</span></div>
                <div className="ppdb-info-row"><span className="pir-label">Biaya Daftar</span><span className="pir-value">Rp 100.000</span></div>
                <div className="ppdb-info-row"><span className="pir-label">Tahun Ajaran</span><span className="pir-value">2026/2027</span></div>
                <div className="ppdb-note">Kuota terbatas. Pendaftaran ditutup setelah kuota terpenuhi.</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
