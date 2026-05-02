// v2
import { useState } from 'react'
import '../../styles/ppdb-kontak.css'
import { submitPpdb, checkPpdb } from '../../api/ppdb'

const programLabel = { smp: 'SMP Nur Muhammad', ma: 'MA Nur Muhammad', tahfidz_murni: 'Tahfidz Murni' }

export default function PpdbPage() {
  const [activeTab, setActiveTab] = useState('info')
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    program: '', boarding: '', namaLengkap: '', tglLahir: '',
    tempatLahir: '', jk: '', asalSekolah: '', desa: '',
    kecamatan: '', kabupaten: '', namaAyah: '', namaIbu: '',
    hpAyah: '', hpIbu: '', waWali: '', emailWali: '', catatan: '',
    nik: '', nisn: '',
  })
  const [nomorDaftar, setNomorDaftar] = useState('')
  const [cekNomor, setCekNomor] = useState('')
  const [cekTgl, setCekTgl] = useState('')
  const [showCekResult, setShowCekResult] = useState(false)
  const [cekResult, setCekResult] = useState(null)
  const [cekError, setCekError] = useState('')
  const [cekLoading, setCekLoading] = useState(false)
  const [consent1, setConsent1] = useState(false)
  const [consent2, setConsent2] = useState(false)

  const update = (key, val) => setFormData(prev => ({ ...prev, [key]: val }))

  const nextStep = () => {
    if (step === 1 && (!formData.program || !formData.boarding)) { alert('Harap pilih program dan asrama.'); return }
    if (step === 2 && (!formData.namaLengkap || !formData.tglLahir || !formData.asalSekolah)) { alert('Harap lengkapi data santri yang wajib.'); return }
    if (step === 3 && (!formData.namaAyah || !formData.namaIbu || !formData.waWali)) { alert('Harap lengkapi nama ayah, ibu, dan nomor WhatsApp.'); return }
    setStep(s => s + 1)
  }

  const submitForm = async () => {
    if (!consent1 || !consent2) { alert('Harap centang kedua pernyataan persetujuan.'); return }
    const payload = {
      nama_lengkap: formData.namaLengkap, tempat_lahir: formData.tempatLahir,
      tanggal_lahir: formData.tglLahir, jenis_kelamin: formData.jk,
      asal_sekolah: formData.asalSekolah, desa: formData.desa,
      kecamatan: formData.kecamatan, kabupaten: formData.kabupaten,
      nama_ayah: formData.namaAyah, nama_ibu: formData.namaIbu,
      wa_wali: formData.waWali, program: formData.program,
      boarding_gender: formData.boarding,
      nik: formData.nik || null, nisn: formData.nisn || null,
      hp_ayah: formData.hpAyah || null, hp_ibu: formData.hpIbu || null,
      email_wali: formData.emailWali || null, catatan: formData.catatan || null,
    }
    try {
      const res = await submitPpdb(payload)
      setNomorDaftar(res.data.registration_number)
      setActiveTab('konfirmasi')
      setStep(1)
    } catch (err) {
      alert(err.response?.data?.message || 'Pendaftaran gagal. Coba lagi.')
    }
  }

  const handleCek = async () => {
    if (!cekNomor || !cekTgl) { alert('Harap isi nomor pendaftaran dan tanggal lahir.'); return }
    setCekLoading(true)
    setCekError('')
    setCekResult(null)
    setShowCekResult(false)
    try {
      const res = await checkPpdb({ registration_number: cekNomor, tanggal_lahir: cekTgl })
      setCekResult(res.data)
      setShowCekResult(true)
    } catch {
      setCekError('Data tidak ditemukan. Periksa kembali nomor pendaftaran dan tanggal lahir.')
    } finally {
      setCekLoading(false)
    }
  }

  const siSteps = ['Program', 'Data Santri', 'Data Orang Tua', 'Review & Kirim']

  return (
    <>
      <div className="ppdb-hero">
        <div className="ppdb-hero-arabic">ن</div>
        <div className="ppdb-hero-inner">
          <div className="ppdb-badge"><span className="dot" /> PPDB 2025/2026 — SEDANG DIBUKA</div>
          <h1>Pendaftaran Peserta Didik Baru <span>2025/2026</span></h1>
          <p>Daftarkan putra-putri Anda ke Pesantren Nur Muhammad. Satu form untuk semua program — SMP, MA, dan Tahfidz Murni.</p>
        </div>
        <div className="ppdb-tab-nav">
          {[['info', '📋 Info & Syarat'], ['daftar', '✏️ Formulir Pendaftaran'], ['cek', '🔍 Cek Data Pendaftaran']].map(([key, label]) => (
            <button key={key} className={`ppdb-tab ${activeTab === key ? 'active' : ''}`} onClick={() => setActiveTab(key)}>{label}</button>
          ))}
          {activeTab === 'konfirmasi' && <button className="ppdb-tab active">✅ Konfirmasi</button>}
        </div>
      </div>

      <div className="ppdb-body">

        {/* INFO */}
        <div className={`ppdb-panel ${activeTab === 'info' ? 'active' : ''}`}>
          <div className="status-banner">
            <div className="status-left">
              <div className="status-icon">🟢</div>
              <div>
                <strong>PPDB 2025/2026 Resmi Dibuka</strong>
                <span>Semua program menerima pendaftar — putra & putri.</span>
              </div>
            </div>
            <div className="status-right">
              <button className="btn-gold" onClick={() => setActiveTab('daftar')}>Daftar Sekarang →</button>
              <button className="btn-outline-w" onClick={() => setActiveTab('cek')}>Cek Data</button>
            </div>
          </div>

          <div className="ppdb-sec-eyebrow">Program yang Tersedia</div>
          <h2 className="ppdb-sec-title">Tiga Program Unggulan</h2>
          <p className="ppdb-sec-sub">Pilih program sesuai jenjang pendidikan calon santri.</p>
          <div className="program-grid">
            {[
              { key: 'smp', badge: 'Jenjang SMP', icon: '🏫', title: 'SMP Nur Muhammad', desc: 'Sekolah menengah pertama berbasis pesantren dengan tahfidz dan kurikulum Kemendikbud.', chips: ['Putra & Putri', '3 Tahun', 'Boarding', '5-10 Juz'], kuota: 60 },
              { key: 'ma', badge: 'Jenjang MA', icon: '📚', title: 'MA Nur Muhammad', desc: 'Madrasah Aliyah setara SMA dengan penekanan ilmu keislaman, bahasa Arab, dan persiapan perguruan tinggi.', chips: ['Putra & Putri', '3 Tahun', 'Boarding', 'Kitab Kuning'], kuota: 50 },
              { key: 'tahfidz_murni', badge: 'Pasca SMA/MA', icon: '📖', title: 'Tahfidz Murni', desc: 'Program intensif menghafal 30 juz pasca SMA/MA, dibimbing langsung pengasuh berpengalaman.', chips: ['Putra & Putri', 'Intensif', '30 Juz', 'Pasca SMA'], kuota: 30 },
            ].map(p => (
              <div key={p.key} className="program-card">
                <div className="program-card-header">
                  <div className="program-tag">{p.badge}</div>
                  <h3>{p.icon} {p.title}</h3>
                </div>
                <div className="program-card-body">
                  <p>{p.desc}</p>
                  <div className="program-meta">{p.chips.map(c => <span key={c} className="meta-chip">{c}</span>)}</div>
                  <div className="program-status">
                    <div>
                      <div className="dot-open-badge">Dibuka</div>
                      <div className="quota-text">Kuota: {p.kuota} santri</div>
                    </div>
                    <button className="btn-daftar-sm" onClick={() => { update('program', p.key); setActiveTab('daftar') }}>Daftar →</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="ppdb-sec-eyebrow">Alur Pendaftaran</div>
          <h2 className="ppdb-sec-title">5 Langkah Mudah</h2>
          <div className="alur-grid" style={{ marginBottom: '3rem' }}>
            {[['1','Isi Formulir Online','Lengkapi data calon santri dan orang tua.'],['2','Simpan Nomor Daftar','Catat nomor pendaftaran untuk memantau status.'],['3','Cetak Formulir','Print formulir untuk dibawa ke pesantren.'],['4','Verifikasi Dokumen','Serahkan berkas fisik ke panitia PPDB.'],['5','Pengumuman','Pantau status melalui halaman Cek Data.']].map(([num, title, desc]) => (
              <div key={num} className="alur-step">
                <div className="step-num">{num}</div>
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            ))}
          </div>

          <div className="ppdb-sec-eyebrow">Syarat Pendaftaran</div>
          <h2 className="ppdb-sec-title">Persyaratan</h2>
          <div className="syarat-2col">
            <div className="syarat-box">
              <h3>📋 Persyaratan Administrasi</h3>
              <ul className="syarat-ul">
                {['Fotokopi Akta Kelahiran (2 lembar)','Fotokopi Kartu Keluarga (2 lembar)','Fotokopi Rapor kelas terakhir','Fotokopi Ijazah / SKL (jika sudah ada)','Pas foto 3x4 terbaru (4 lembar)','Surat keterangan sehat dari dokter','Formulir pendaftaran yang sudah dicetak'].map(s => <li key={s}>{s}</li>)}
              </ul>
            </div>
            <div className="syarat-box">
              <h3>Syarat Calon Santri</h3>
              <ul className="syarat-ul">
                {['SMP: Lulusan SD/MI, usia maks. 15 tahun','MA: Lulusan SMP/MTs sederajat','Tahfidz Murni: Lulusan SMA/MA','Beragama Islam','Bersedia tinggal di asrama (boarding)','Mendapat izin dan restu orang tua/wali','Memiliki kemampuan baca Al-Quran dasar','Bersedia mengikuti seluruh peraturan pesantren'].map(s => <li key={s}>{s}</li>)}
              </ul>
            </div>
          </div>

          <div className="ppdb-sec-eyebrow" style={{ marginTop: '2rem' }}>Biaya Pendaftaran</div>
          <h2 className="ppdb-sec-title">Biaya Formulir</h2>
          <div className="biaya-grid">
            {[['SMP Nur Muhammad','Rp 150.000','Biaya formulir & administrasi'],['MA Nur Muhammad','Rp 150.000','Biaya formulir & administrasi'],['Tahfidz Murni','Rp 100.000','Biaya formulir & administrasi']].map(([label, amount, note]) => (
              <div key={label} className="biaya-card">
                <div className="biaya-label">{label}</div>
                <div className="biaya-amount">{amount}</div>
                <div className="biaya-note">{note}</div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <button className="btn-gold" style={{ fontSize: '1rem', padding: '1rem 2.5rem' }} onClick={() => setActiveTab('daftar')}>
              Mulai Pendaftaran Online
            </button>
          </div>
        </div>

        {/* DAFTAR */}
        <div className={`ppdb-panel ${activeTab === 'daftar' ? 'active' : ''}`}>
          <div className="ppdb-form-wrap">
            <div className="ppdb-form-header">
              <h2>Formulir Pendaftaran PPDB 2025/2026</h2>
              <p>Isi semua data dengan lengkap dan benar. Proses tidak lebih dari 5 menit.</p>
              <div className="step-indicator">
                {siSteps.map((label, i) => (
                  <div key={label} style={{ display: 'flex', alignItems: 'center' }}>
                    <div className="si-step">
                      <div className={`si-num ${step === i + 1 ? 'active' : step > i + 1 ? 'done' : ''}`}>{step > i + 1 ? '✓' : i + 1}</div>
                      <div className={`si-label ${step === i + 1 ? 'active' : ''}`}>{label}</div>
                    </div>
                    {i < siSteps.length - 1 && <div className="si-divider" />}
                  </div>
                ))}
              </div>
            </div>
            <div className="ppdb-form-body">

              {/* Step 1 */}
              <div className={`form-step ${step === 1 ? 'active' : ''}`}>
                <div className="form-sec-label">Pilih Program</div>
                <div className="fg" style={{ marginBottom: '1.5rem' }}>
                  <label>Program yang Dituju <span className="req">*</span></label>
                  <div className="prog-select">
                    {[['smp','🏫','SMP Nur Muhammad','Lulusan SD/MI'],['ma','📚','MA Nur Muhammad','Lulusan SMP/MTs'],['tahfidz_murni','📖','Tahfidz Murni','Lulusan SMA/MA']].map(([val, icon, name, desc]) => (
                      <div key={val} className="prog-opt">
                        <input type="radio" name="program" id={`prog-${val}`} value={val} checked={formData.program === val} onChange={() => update('program', val)} />
                        <label htmlFor={`prog-${val}`}>
                          <span className="prog-icon">{icon}</span>
                          <span className="prog-name">{name}</span>
                          <span className="prog-desc">{desc}</span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="fg" style={{ marginBottom: '1.5rem' }}>
                  <label>Pilih Asrama <span className="req">*</span></label>
                  <div className="radio-group">
                    {[['putra','Putra'],['putri','Putri']].map(([val, label]) => (
                      <div key={val} className="radio-card">
                        <input type="radio" name="boarding" id={`b-${val}`} value={val} checked={formData.boarding === val} onChange={() => update('boarding', val)} />
                        <label htmlFor={`b-${val}`}>{label}</label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="form-note-box">Pendaftaran dibuka untuk putra dan putri di semua program.</div>
                <div className="form-nav"><button className="btn-next-step" onClick={nextStep}>Lanjut: Data Santri</button></div>
              </div>

              {/* Step 2 */}
              <div className={`form-step ${step === 2 ? 'active' : ''}`}>
                <div className="form-sec-label">Data Calon Santri</div>
                <div className="form-grid-2">
                  <div className="fg span2"><label>Nama Lengkap <span className="req">*</span></label><input type="text" value={formData.namaLengkap} onChange={e => update('namaLengkap', e.target.value)} placeholder="Sesuai akta kelahiran" /></div>
                  <div className="fg"><label>Tempat Lahir <span className="req">*</span></label><input type="text" value={formData.tempatLahir} onChange={e => update('tempatLahir', e.target.value)} /></div>
                  <div className="fg"><label>Tanggal Lahir <span className="req">*</span></label><input type="date" value={formData.tglLahir} onChange={e => update('tglLahir', e.target.value)} /></div>
                  <div className="fg"><label>Jenis Kelamin <span className="req">*</span></label><select value={formData.jk} onChange={e => update('jk', e.target.value)}><option value="">Pilih...</option><option value="L">Laki-laki</option><option value="P">Perempuan</option></select></div>
                  <div className="fg"><label>Asal Sekolah <span className="req">*</span></label><input type="text" value={formData.asalSekolah} onChange={e => update('asalSekolah', e.target.value)} /></div>
                </div>
                <div className="form-sec-label">Alamat</div>
                <div className="form-grid-2">
                  <div className="fg"><label>Desa/Kelurahan <span className="req">*</span></label><input type="text" value={formData.desa} onChange={e => update('desa', e.target.value)} /></div>
                  <div className="fg"><label>Kecamatan <span className="req">*</span></label><input type="text" value={formData.kecamatan} onChange={e => update('kecamatan', e.target.value)} /></div>
                  <div className="fg"><label>Kabupaten/Kota <span className="req">*</span></label><input type="text" value={formData.kabupaten} onChange={e => update('kabupaten', e.target.value)} /></div>
                </div>
                <div className="form-nav">
                  <button className="btn-back-step" onClick={() => setStep(1)}>Kembali</button>
                  <button className="btn-next-step" onClick={nextStep}>Lanjut: Data Orang Tua</button>
                </div>
              </div>

              {/* Step 3 */}
              <div className={`form-step ${step === 3 ? 'active' : ''}`}>
                <div className="form-sec-label">Data Ayah</div>
                <div className="form-grid-2">
                  <div className="fg span2"><label>Nama Ayah <span className="req">*</span></label><input type="text" value={formData.namaAyah} onChange={e => update('namaAyah', e.target.value)} /></div>
                  <div className="fg"><label>No. HP Ayah</label><input type="tel" value={formData.hpAyah} onChange={e => update('hpAyah', e.target.value)} placeholder="08xx-xxxx-xxxx" /></div>
                </div>
                <div className="form-sec-label">Data Ibu</div>
                <div className="form-grid-2">
                  <div className="fg span2"><label>Nama Ibu <span className="req">*</span></label><input type="text" value={formData.namaIbu} onChange={e => update('namaIbu', e.target.value)} /></div>
                  <div className="fg"><label>No. HP Ibu</label><input type="tel" value={formData.hpIbu} onChange={e => update('hpIbu', e.target.value)} placeholder="08xx-xxxx-xxxx" /></div>
                </div>
                <div className="form-sec-label">Kontak Utama</div>
                <div className="form-grid-2">
                  <div className="fg"><label>No. WhatsApp Aktif <span className="req">*</span></label><input type="tel" value={formData.waWali} onChange={e => update('waWali', e.target.value)} placeholder="08xx-xxxx-xxxx" /></div>
                  <div className="fg"><label>Email (opsional)</label><input type="email" value={formData.emailWali} onChange={e => update('emailWali', e.target.value)} /></div>
                  <div className="fg span2"><label>Catatan (opsional)</label><textarea value={formData.catatan} onChange={e => update('catatan', e.target.value)} placeholder="Pertanyaan, kondisi khusus, dll." /></div>
                </div>
                <div className="form-nav">
                  <button className="btn-back-step" onClick={() => setStep(2)}>Kembali</button>
                  <button className="btn-next-step" onClick={nextStep}>Lanjut: Review</button>
                </div>
              </div>

              {/* Step 4 */}
              <div className={`form-step ${step === 4 ? 'active' : ''}`}>
                <div className="review-hl">
                  <div className="review-hl-icon">📋</div>
                  <div>
                    <strong>{formData.program ? programLabel[formData.program] : 'Program belum dipilih'}</strong>
                    <span>Asrama {formData.boarding === 'putra' ? 'Putra' : formData.boarding === 'putri' ? 'Putri' : '-'}</span>
                    <div className="review-hl-chips">
                      <span className="review-chip">T.A. 2025/2026</span>
                      <span className="review-chip">PPDB Online</span>
                    </div>
                  </div>
                </div>
                <div className="review-sec-label">Data Calon Santri</div>
                <div className="review-grid">
                  <div className="review-item"><div className="rl">Nama Lengkap</div><div className="rv">{formData.namaLengkap || '-'}</div></div>
                  <div className="review-item"><div className="rl">Tempat & Tgl Lahir</div><div className="rv">{formData.tempatLahir || '-'}, {formData.tglLahir ? new Date(formData.tglLahir).toLocaleDateString('id-ID', { day:'numeric', month:'long', year:'numeric' }) : '-'}</div></div>
                  <div className="review-item"><div className="rl">Jenis Kelamin</div><div className="rv">{formData.jk === 'L' ? 'Laki-laki' : formData.jk === 'P' ? 'Perempuan' : '-'}</div></div>
                  <div className="review-item"><div className="rl">Asal Sekolah</div><div className="rv">{formData.asalSekolah || '-'}</div></div>
                </div>
                <div className="review-sec-label">Data Orang Tua / Wali</div>
                <div className="review-grid">
                  <div className="review-item"><div className="rl">Nama Ayah</div><div className="rv">{formData.namaAyah || '-'}</div></div>
                  <div className="review-item"><div className="rl">Nama Ibu</div><div className="rv">{formData.namaIbu || '-'}</div></div>
                  <div className="review-item"><div className="rl">No. WhatsApp</div><div className="rv">{formData.waWali || '-'}</div></div>
                </div>
                <div className="consent-box">
                  <input type="checkbox" id="c1" checked={consent1} onChange={e => setConsent1(e.target.checked)} />
                  <label htmlFor="c1">Saya menyatakan bahwa semua data yang diisikan adalah benar dan dapat dipertanggungjawabkan.</label>
                </div>
                <div className="consent-box">
                  <input type="checkbox" id="c2" checked={consent2} onChange={e => setConsent2(e.target.checked)} />
                  <label htmlFor="c2">Calon santri bersedia tinggal di asrama dan mematuhi seluruh peraturan Pesantren Nur Muhammad.</label>
                </div>
                <div className="form-nav">
                  <button className="btn-back-step" onClick={() => setStep(3)}>Kembali</button>
                  <button className="btn-submit-form" onClick={submitForm}>Kirim Pendaftaran</button>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* KONFIRMASI */}
        <div className={`ppdb-panel ${activeTab === 'konfirmasi' ? 'active' : ''}`}>
          <div className="konfirmasi-wrap">
            <div className="konfirmasi-header">
              <div className="success-icon">✅</div>
              <h2>Pendaftaran Berhasil!</h2>
              <p>Data Anda telah kami terima. Simpan nomor pendaftaran berikut dengan baik.</p>
            </div>
            <div className="nomor-reg">
              <p>Nomor Pendaftaran Anda</p>
              <div className="nomor">{nomorDaftar}</div>
              <div className="nomor-note">Gunakan nomor ini untuk memantau status pendaftaran</div>
            </div>
            <div className="info-box">
              <strong>Langkah Selanjutnya:</strong><br />
              1. Cetak formulir pendaftaran ini.<br />
              2. Lengkapi dokumen fisik sesuai syarat.<br />
              3. Datang ke pesantren untuk menyerahkan berkas dan melunasi biaya pendaftaran.<br />
              4. Pantau status melalui halaman Cek Data Pendaftaran.
            </div>
            <div className="konfirmasi-detail">
              <h3>Ringkasan Data Pendaftaran</h3>
              <div className="detail-row"><span className="dl">Nomor Pendaftaran</span><span className="dv">{nomorDaftar}</span></div>
              <div className="detail-row"><span className="dl">Nama Calon Santri</span><span className="dv">{formData.namaLengkap}</span></div>
              <div className="detail-row"><span className="dl">Program</span><span className="dv">{programLabel[formData.program]}</span></div>
              <div className="detail-row"><span className="dl">Asrama</span><span className="dv">{formData.boarding === 'putra' ? 'Putra' : 'Putri'}</span></div>
              <div className="detail-row"><span className="dl">Tahun Ajaran</span><span className="dv">2025/2026</span></div>
              <div className="detail-row"><span className="dl">Status</span><span className="dv"><span className="status-pill">Menunggu Verifikasi</span></span></div>
              <div className="detail-row"><span className="dl">No. WhatsApp Wali</span><span className="dv">{formData.waWali}</span></div>
            </div>
            <div className="konfirmasi-actions">
              <button className="btn-print" onClick={() => window.print()}>Print Formulir PPDB</button>
              <a href="https://wa.me/6282177832648" target="_blank" rel="noreferrer" className="btn-wa-konfirmasi">Konfirmasi via WhatsApp</a>
            </div>
            <div style={{ textAlign: 'center' }}>
              <button className="btn-back-step" style={{ margin: '0 auto' }} onClick={() => { setActiveTab('daftar'); setStep(1) }}>+ Daftarkan Santri Lain</button>
            </div>
          </div>
        </div>

        {/* CEK DATA */}
        <div className={`ppdb-panel ${activeTab === 'cek' ? 'active' : ''}`}>
          <div className="cek-wrap">
            <div className="cek-card">
              <div className="cek-header">
                <div className="cek-icon">🔍</div>
                <h2>Cek Data Pendaftaran</h2>
                <p>Masukkan nomor pendaftaran dan tanggal lahir calon santri untuk melihat status.</p>
              </div>
              <div className="cek-body">
                <div className="fg">
                  <label>Nomor Pendaftaran</label>
                  <input type="text" value={cekNomor} onChange={e => setCekNomor(e.target.value)} placeholder="Contoh: NM-2026-0001" />
                </div>
                <div className="fg">
                  <label>Tanggal Lahir Calon Santri</label>
                  <input type="date" value={cekTgl} onChange={e => setCekTgl(e.target.value)} />
                </div>
                <button className="btn-cek" onClick={handleCek} disabled={cekLoading}>
                  {cekLoading ? 'Mencari...' : 'Cek Status Pendaftaran'}
                </button>
              </div>
            </div>

            {cekError && (
              <div style={{ background: '#fff5f5', border: '1px solid #fed7d7', borderRadius: '12px', padding: '1rem', color: '#c53030', fontSize: '0.85rem', marginBottom: '1rem' }}>
                {cekError}
              </div>
            )}

            {showCekResult && cekResult && (
              <div className="cek-result show">
                <div className="cek-result-header">
                  <strong>{cekResult.registration_number}</strong>
                  <span>Ditemukan</span>
                </div>
                <div className="cek-result-body">
                  <div className="detail-row"><span className="dl">Nama Santri</span><span className="dv">{cekResult.nama_lengkap}</span></div>
                  <div className="detail-row"><span className="dl">Program</span><span className="dv">{programLabel[cekResult.program] || cekResult.program}</span></div>
                  <div className="detail-row"><span className="dl">Asrama</span><span className="dv" style={{ textTransform: 'capitalize' }}>{cekResult.boarding_gender}</span></div>
                  <div className="detail-row"><span className="dl">Tanggal Daftar</span><span className="dv">{new Date(cekResult.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span></div>
                  <div className="detail-row"><span className="dl">Status</span><span className="dv"><span className="status-accepted">{cekResult.status}</span></span></div>
                  {cekResult.admin_message && (
                    <div className="detail-row"><span className="dl">Pesan Panitia</span><span className="dv" style={{ color: 'var(--text-mid)', fontWeight: 400 }}>{cekResult.admin_message}</span></div>
                  )}
                </div>
                <div style={{ padding: '0 1.5rem 1.5rem' }}>
                  <button className="btn-print" onClick={() => window.print()}>Cetak Ulang Formulir</button>
                </div>
              </div>
            )}

            <div className="or-divider">atau hubungi panitia</div>
            <div className="wa-help">
              <p>Lupa nomor pendaftaran atau butuh bantuan? Hubungi panitia PPDB kami via WhatsApp.</p>
              <a href="https://wa.me/6282177832648" target="_blank" rel="noreferrer" className="btn-wa-sm">Chat Panitia PPDB</a>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
