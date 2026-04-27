import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getPublicSettings } from '../api/settings'
import '../styles/ppdb-kontak.css'

export default function Kontak() {
  const [settings, setSettings] = useState({})
  const [formSent, setFormSent] = useState(false)
  const [form, setForm] = useState({ nama: '', hp: '', email: '', keperluan: '', pesan: '' })

  useEffect(() => {
    getPublicSettings().then(res => setSettings(res.data))
  }, [])

  const update = (key, val) => setForm(prev => ({ ...prev, [key]: val }))

  const kirim = () => {
    if (!form.nama || !form.hp || !form.keperluan || !form.pesan) {
      alert('Harap lengkapi semua field yang wajib diisi.')
      return
    }
    setFormSent(true)
  }

  const kontakCards = [
    { icon: '💬', iconClass: 'wa', label: 'WhatsApp Utama', title: 'Chat Langsung', desc: 'Cara tercepat untuk terhubung dengan kami. Tersedia setiap hari kerja.', value: settings.site_phone || '+62 812-xxxx-xxxx', cta: 'Buka WhatsApp →', href: `https://wa.me/${settings.site_wa || '6281200000000'}` },
    { icon: '📞', iconClass: 'green', label: 'Telepon', title: 'Telepon Kantor', desc: 'Hubungi langsung kantor pesantren pada jam operasional yang tertera.', value: '+62 321-xxx-xxxx', cta: 'Hubungi Sekarang →', href: 'tel:+62321000000' },
    { icon: '✉️', iconClass: 'mail', label: 'Email', title: 'Kirim Email', desc: 'Untuk keperluan surat-menyurat resmi, proposal, atau kerja sama institusi.', value: 'info@ppanurmuhammad.web.id', cta: 'Kirim Email →', href: 'mailto:info@ppanurmuhammad.web.id' },
    { icon: '📍', iconClass: 'gold', label: 'Lokasi', title: 'Kunjungi Kami', desc: 'Datang langsung ke pesantren untuk konsultasi tatap muka.', value: 'Wonoayu, Mojoagung, Jombang', cta: 'Buka Peta →', href: 'https://maps.google.com' },
  ]

  const keperluan = [
    { head: 'ppdb', icon: '📋', title: 'Panitia PPDB', sub: 'Pendaftaran, syarat, dan informasi penerimaan', items: [['💬', 'WhatsApp PPDB', '+62 812-xxxx-xxxx'], ['⏰', 'Jam Layanan', 'Senin–Sabtu, 08.00–16.00'], ['📝', 'Keperluan', 'Info PPDB, syarat, biaya, cek pendaftaran']], wa: 'https://wa.me/6281200000000?text=Assalamualaikum, saya ingin bertanya mengenai PPDB.', waLabel: '💬 Chat Panitia PPDB' },
    { head: 'umum', icon: '🏫', title: 'Humas & Umum', sub: 'Informasi umum, kunjungan, dan kerja sama', items: [['💬', 'WhatsApp Humas', '+62 813-xxxx-xxxx'], ['✉️', 'Email', 'info@ppanurmuhammad.web.id'], ['📝', 'Keperluan', 'Kunjungan, liputan, kerja sama, surat resmi']], wa: 'https://wa.me/6281300000000', waLabel: '💬 Chat Humas' },
    { head: 'darurat', icon: '🆘', title: 'Kontak Darurat', sub: 'Keperluan mendesak terkait santri', items: [['📞', 'Telepon Darurat', '+62 321-xxx-xxxx'], ['💬', 'WhatsApp Darurat', '+62 811-xxxx-xxxx'], ['⚠️', 'Keperluan', 'Kondisi darurat santri, kepulangan mendadak']], wa: 'https://wa.me/6281100000000', waLabel: '🆘 Hubungi Darurat', darurat: true },
  ]

  const sosmed = [
    { cls: 'ig', icon: '📸', name: 'Instagram', handle: '@ppanurmuhammad', follow: 'Ikuti', href: '#' },
    { cls: 'fb', icon: '📘', name: 'Facebook', handle: 'Pesantren Nur Muhammad', follow: 'Suka', href: '#' },
    { cls: 'yt', icon: '▶️', name: 'YouTube', handle: 'Nur Muhammad Official', follow: 'Subscribe', href: '#' },
    { cls: 'tw', icon: '🐦', name: 'Twitter / X', handle: '@ppanurmuhammad', follow: 'Ikuti', href: '#' },
  ]

  return (
    <>
      {/* HERO */}
      <div className="kontak-hero">
        <div className="kontak-hero-arabic">ن</div>
        <div className="kontak-hero-inner">
          <div>
            <div className="kontak-hero-eyebrow">Hubungi Kami</div>
            <h1>Kami Siap<br /><em>Membantu Anda</em></h1>
            <p className="kontak-hero-desc">Ada pertanyaan seputar PPDB, program pesantren, atau hal lainnya? Jangan ragu untuk menghubungi kami — tim kami siap menjawab dengan hangat.</p>
          </div>
          <div className="jam-card">
            <h4>⏰ Jam Operasional</h4>
            {[['Senin – Kamis', '08.00 – 16.00'], ['Jumat', '08.00 – 11.30'], ['Sabtu', '08.00 – 13.00'], ['Minggu', 'Libur']].map(([hari, waktu]) => (
              <div key={hari} className="jam-row">
                <span className="jam-hari">{hari}</span>
                <span className={`jam-waktu ${waktu === 'Libur' ? 'tutup' : ''}`}>{waktu}</span>
              </div>
            ))}
            <div className="jam-status">Sedang Buka</div>
          </div>
        </div>
      </div>

      <div className="kontak-body">

        {/* KONTAK CEPAT */}
        <div className="kontak-grid">
          {kontakCards.map(k => (
            <a key={k.title} href={k.href} target="_blank" rel="noreferrer" className="kontak-card">
              <div className={`kontak-icon ${k.iconClass}`}>{k.icon}</div>
              <div className="kontak-card-label">{k.label}</div>
              <h3>{k.title}</h3>
              <p>{k.desc}</p>
              <div className="kontak-card-value">{k.value}</div>
              <span className="kontak-card-cta">{k.cta}</span>
            </a>
          ))}
        </div>

        {/* PETA + FORM */}
        <div className="map-form-grid">
          <div>
            <div className="kontak-sec-eyebrow">Lokasi Pesantren</div>
            <h2 className="kontak-sec-title">Temukan Kami di Sini</h2>
            <p className="kontak-sec-sub">Pesantren Nur Muhammad berlokasi di Desa Wonoayu, Kecamatan Mojoagung, Kabupaten Jombang — mudah dijangkau dari berbagai arah.</p>
            <div className="map-placeholder">
              <div className="map-placeholder-icon">🗺️</div>
              <div className="map-placeholder-text">Peta Lokasi Pesantren Nur Muhammad</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Wonoayu, Mojoagung, Jombang</div>
            </div>
            {/* Di production: ganti div di atas dengan iframe Google Maps */}
            <div className="map-actions">
              <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="btn-map-green">🗺️ Buka Google Maps</a>
              <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="btn-map-outline">🧭 Petunjuk Arah</a>
            </div>
            <div className="alamat-box">
              <span className="alamat-icon">📍</span>
              <div>
                <div className="alamat-label">Alamat Lengkap</div>
                <div className="alamat-text">Jl. [Nama Jalan], Desa Wonoayu, Kecamatan Mojoagung,<br />Kabupaten Jombang, Jawa Timur 61482</div>
              </div>
            </div>
          </div>

          <div>
            <div className="kontak-sec-eyebrow">Kirim Pesan</div>
            <h2 className="kontak-sec-title">Ada yang Ingin Ditanyakan?</h2>
            <p className="kontak-sec-sub">Isi form di bawah dan kami akan menghubungi Anda secepatnya melalui WhatsApp atau email.</p>
            <div className="kontak-form-card">
              <div className="kontak-form-card-header">
                <h3>Form Pesan</h3>
                <p>Semua pertanyaan akan direspons dalam 1×24 jam kerja.</p>
              </div>
              <div className="kontak-form-body">
                {!formSent ? (
                  <>
                    <div className="form-row2" style={{ marginBottom: '1.1rem' }}>
                      <div className="kontak-fg"><label>Nama Lengkap *</label><input type="text" value={form.nama} onChange={e => update('nama', e.target.value)} placeholder="Nama Anda" /></div>
                      <div className="kontak-fg"><label>No. WhatsApp *</label><input type="tel" value={form.hp} onChange={e => update('hp', e.target.value)} placeholder="08xx-xxxx-xxxx" /></div>
                    </div>
                    <div className="kontak-fg"><label>Email (opsional)</label><input type="email" value={form.email} onChange={e => update('email', e.target.value)} placeholder="email@contoh.com" /></div>
                    <div className="kontak-fg">
                      <label>Keperluan *</label>
                      <select value={form.keperluan} onChange={e => update('keperluan', e.target.value)}>
                        <option value="">Pilih keperluan...</option>
                        <option value="ppdb">Informasi PPDB</option>
                        <option value="program">Tanya Program / Unit</option>
                        <option value="biaya">Informasi Biaya</option>
                        <option value="kunjungan">Rencana Kunjungan</option>
                        <option value="kerjasama">Kerja Sama / Institusi</option>
                        <option value="lainnya">Lainnya</option>
                      </select>
                    </div>
                    <div className="kontak-fg"><label>Pesan *</label><textarea value={form.pesan} onChange={e => update('pesan', e.target.value)} placeholder="Tuliskan pertanyaan atau pesan Anda di sini..." /></div>
                    <button className="btn-kirim" onClick={kirim}>📨 Kirim Pesan</button>
                    <div style={{ background: '#fffbeb', borderLeft: '3px solid var(--gold)', padding: '0.8rem 1rem', borderRadius: '0 8px 8px 0', fontSize: '0.78rem', color: '#7a5c0a', marginTop: '1rem', lineHeight: 1.6 }}>
                      💡 Untuk respons lebih cepat, chat langsung via WhatsApp di pojok kanan bawah.
                    </div>
                  </>
                ) : (
                  <div className="form-success-state show">
                    <div className="form-success-icon">✅</div>
                    <h4>Pesan Terkirim!</h4>
                    <p>Terima kasih telah menghubungi kami. Tim kami akan merespons pesan Anda dalam 1×24 jam kerja melalui WhatsApp atau email yang Anda cantumkan.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* KONTAK PER KEPERLUAN */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="kontak-sec-eyebrow">Kontak Khusus</div>
          <h2 className="kontak-sec-title">Hubungi Tim yang Tepat</h2>
          <p className="kontak-sec-sub" style={{ marginBottom: '1.75rem' }}>Agar pertanyaan Anda dijawab lebih cepat, hubungi langsung tim yang sesuai dengan kebutuhan Anda.</p>
          <div className="keperluan-grid">
            {keperluan.map(k => (
              <div key={k.title} className="keperluan-card">
                <div className={`keperluan-head ${k.head}`}>
                  <span className="keperluan-head-icon">{k.icon}</span>
                  <div><h3>{k.title}</h3><p>{k.sub}</p></div>
                </div>
                <div className="keperluan-body">
                  {k.items.map(([ico, lbl, val]) => (
                    <div key={lbl} className="ki-item">
                      <span className="ki-ico">{ico}</span>
                      <div><div className="ki-lbl">{lbl}</div><div className="ki-val">{val}</div></div>
                    </div>
                  ))}
                  <a href={k.wa} target="_blank" rel="noreferrer" className={`btn-wa-keperluan ${k.darurat ? 'darurat' : ''}`}>{k.waLabel}</a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SOSMED */}
        <div>
          <div className="kontak-sec-eyebrow">Media Sosial</div>
          <h2 className="kontak-sec-title">Ikuti Kami di Media Sosial</h2>
          <p className="kontak-sec-sub" style={{ marginBottom: '1.75rem' }}>Dapatkan update kegiatan, pengumuman PPDB, dan konten islami terbaru dari Pesantren Nur Muhammad.</p>
          <div className="sosmed-grid">
            {sosmed.map(s => (
              <a key={s.name} href={s.href} target="_blank" rel="noreferrer" className={`sosmed-card ${s.cls}`}>
                <div className="sosmed-icon">{s.icon}</div>
                <div className="sosmed-name">{s.name}</div>
                <div className="sosmed-handle">{s.handle}</div>
                <div className="sosmed-follow">{s.follow}</div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </>
  )
}
