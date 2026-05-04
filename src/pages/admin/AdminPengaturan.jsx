import { useState, useEffect } from 'react'
import { getAdminSettings, updateSettings } from '../../api/admin'

export default function AdminPengaturan() {
  const [settings, setSettings] = useState({})
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    getAdminSettings()
      .then(res => setSettings(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false))
  }, [])

  const update = (key, val) => setSettings(p => ({ ...p, [key]: val }))

  const handleSave = async () => {
    setSaving(true)
    setSaved(false)
    try {
      await updateSettings(settings)
      setSaved(true)
      setTimeout(() => setSaved(false), 3000)
    } catch (err) {
      alert('Gagal menyimpan pengaturan.')
    } finally {
      setSaving(false)
    }
  }

  if (loading) return <div className="admin-loading">⏳ Memuat pengaturan...</div>

  return (
    <>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 className="admin-page-title">Pengaturan</h1>
          <p className="admin-page-sub">Kelola informasi dan konfigurasi website pesantren.</p>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          {saved && <span style={{ color: '#38a169', fontSize: '0.85rem', fontWeight: 600 }}>✅ Tersimpan!</span>}
          <button className="admin-btn primary" onClick={handleSave} disabled={saving}>
            {saving ? 'Menyimpan...' : '💾 Simpan Semua'}
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>

        {/* Informasi Pesantren */}
        <div className="admin-card">
          <div className="admin-card-header"><h3>🏫 Informasi Pesantren</h3></div>
          <div className="admin-card-body">
            <div className="admin-fg">
              <label>Nama Pesantren</label>
              <input type="text" value={settings.site_name || ''} onChange={e => update('site_name', e.target.value)} />
            </div>
            <div className="admin-fg">
              <label>Tagline</label>
              <input type="text" value={settings.site_tagline || ''} onChange={e => update('site_tagline', e.target.value)} />
            </div>
            <div className="admin-fg">
              <label>Alamat</label>
              <input type="text" value={settings.site_address || ''} onChange={e => update('site_address', e.target.value)} />
            </div>
            <div className="admin-fg">
              <label>URL Google Maps</label>
              <input type="text" value={settings.site_maps_url || ''} onChange={e => update('site_maps_url', e.target.value)} />
            </div>
          </div>
        </div>

        {/* Kontak */}
        <div className="admin-card">
          <div className="admin-card-header"><h3>📞 Kontak</h3></div>
          <div className="admin-card-body">
            <div className="admin-fg">
              <label>Nomor Telepon</label>
              <input type="text" value={settings.site_phone || ''} onChange={e => update('site_phone', e.target.value)} />
            </div>
            <div className="admin-fg">
              <label>Nomor WhatsApp (tanpa +)</label>
              <input type="text" value={settings.site_wa || ''} onChange={e => update('site_wa', e.target.value)} placeholder="628xxxxxxxxx" />
            </div>
            <div className="admin-fg">
              <label>Email</label>
              <input type="email" value={settings.site_email || ''} onChange={e => update('site_email', e.target.value)} />
            </div>
          </div>
        </div>

        {/* Foto & Media */}
        <div className="admin-card" style={{ gridColumn: '1 / -1' }}>
          <div className="admin-card-header"><h3>🖼️ Foto & Media</h3></div>
          <div className="admin-card-body" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className="admin-fg">
              <label>URL Foto Background Hero</label>
              <input type="text" value={settings.hero_image || ''} onChange={e => update('hero_image', e.target.value)} placeholder="https://res.cloudinary.com/..." />
              {settings.hero_image && <img src={settings.hero_image} alt="hero preview" style={{ marginTop: '0.5rem', width: '100%', borderRadius: '8px', maxHeight: '120px', objectFit: 'cover' }} />}
            </div>
            <div className="admin-fg">
              <label>URL Foto Pengasuh</label>
              <input type="text" value={settings.pengasuh_image || ''} onChange={e => update('pengasuh_image', e.target.value)} placeholder="https://res.cloudinary.com/..." />
              {settings.pengasuh_image && <img src={settings.pengasuh_image} alt="pengasuh preview" style={{ marginTop: '0.5rem', width: '140px', borderRadius: '8px', objectFit: 'cover' }} />}
            </div>
            <div className="admin-fg">
              <label>Nama Pengasuh</label>
              <input type="text" value={settings.pengasuh_nama || ''} onChange={e => update('pengasuh_nama', e.target.value)} />
            </div>
            <div className="admin-fg">
              <label>Jabatan Pengasuh</label>
              <input type="text" value={settings.pengasuh_jabatan || ''} onChange={e => update('pengasuh_jabatan', e.target.value)} />
            </div>
          </div>
        </div>

        {/* Foto Hero Slider */}
<div className="admin-card" style={{ gridColumn: '1 / -1' }}>
  <div className="admin-card-header"><h3>🎠 Foto Hero Slider</h3></div>
  <div className="admin-card-body">
    {[1, 2, 3].map(n => (
      <div key={n} style={{ background: '#f7fafc', borderRadius: '10px', padding: '1rem', marginBottom: '0.75rem' }}>
        <p style={{ fontSize: '0.82rem', fontWeight: 700, color: '#4a5568', marginBottom: '0.75rem' }}>Slide {n}</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div className="admin-fg" style={{ marginBottom: 0 }}>
            <label>URL Foto Background</label>
            <input
              type="text"
              value={settings[`slide_${n}_bg`] || ''}
              onChange={e => update(`slide_${n}_bg`, e.target.value)}
              placeholder="https://res.cloudinary.com/..."
            />
            {settings[`slide_${n}_bg`] && (
              <img src={settings[`slide_${n}_bg`]} alt={`bg ${n}`} style={{ marginTop: '0.5rem', width: '100%', borderRadius: '8px', maxHeight: '100px', objectFit: 'cover' }} />
            )}
          </div>
          <div className="admin-fg" style={{ marginBottom: 0 }}>
            <label>URL Foto Ilustrasi</label>
            <input
              type="text"
              value={settings[`slide_${n}_img`] || ''}
              onChange={e => update(`slide_${n}_img`, e.target.value)}
              placeholder="https://res.cloudinary.com/..."
            />
            {settings[`slide_${n}_img`] && (
              <img src={settings[`slide_${n}_img`]} alt={`img ${n}`} style={{ marginTop: '0.5rem', width: '100%', borderRadius: '8px', maxHeight: '100px', objectFit: 'cover' }} />
            )}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

        {/* Media Sosial */}
        <div className="admin-card">
          <div className="admin-card-header"><h3>📱 Media Sosial</h3></div>
          <div className="admin-card-body">
            <div className="admin-fg">
              <label>Instagram</label>
              <input type="text" value={settings.social_instagram || ''} onChange={e => update('social_instagram', e.target.value)} />
            </div>
            <div className="admin-fg">
              <label>Facebook</label>
              <input type="text" value={settings.social_facebook || ''} onChange={e => update('social_facebook', e.target.value)} />
            </div>
            <div className="admin-fg">
              <label>YouTube</label>
              <input type="text" value={settings.social_youtube || ''} onChange={e => update('social_youtube', e.target.value)} />
            </div>
          </div>
        </div>

        {/* PPDB */}
        <div className="admin-card">
          <div className="admin-card-header"><h3>📋 Pengaturan PPDB</h3></div>
          <div className="admin-card-body">
            <div className="admin-fg">
              <label>Tahun Ajaran Aktif</label>
              <input type="text" value={settings.ppdb_tahun_ajaran || ''} onChange={e => update('ppdb_tahun_ajaran', e.target.value)} placeholder="2025/2026" />
            </div>
            {[['smp', 'SMP Nur Muhammad', 'ppdb_kuota_smp', 'ppdb_status_smp'],
              ['ma', 'MA Nur Muhammad', 'ppdb_kuota_ma', 'ppdb_status_ma'],
              ['tahfidz_murni', 'Tahfidz Murni', 'ppdb_kuota_tahfidz_murni', 'ppdb_status_tahfidz_murni']
            ].map(([key, label, kuotaKey, statusKey]) => (
              <div key={key} style={{ background: '#f7fafc', borderRadius: '10px', padding: '1rem', marginBottom: '0.75rem' }}>
                <p style={{ fontSize: '0.82rem', fontWeight: 700, color: '#4a5568', marginBottom: '0.75rem' }}>{label}</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  <div className="admin-fg" style={{ marginBottom: 0 }}>
                    <label>Kuota</label>
                    <input type="number" value={settings[kuotaKey] || ''} onChange={e => update(kuotaKey, e.target.value)} />
                  </div>
                  <div className="admin-fg" style={{ marginBottom: 0 }}>
                    <label>Status</label>
                    <select value={settings[statusKey] || 'open'} onChange={e => update(statusKey, e.target.value)}>
                      <option value="open">Dibuka</option>
                      <option value="closed">Ditutup</option>
                    </select>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visi & Misi */}
        <div className="admin-card" style={{ gridColumn: '1 / -1' }}>
          <div className="admin-card-header"><h3>🎯 Visi & Misi</h3></div>
          <div className="admin-card-body">
            <div className="admin-fg">
              <label>Visi Pesantren</label>
              <textarea
                rows={3}
                value={settings.site_visi || ''}
                onChange={e => update('site_visi', e.target.value)}
                placeholder="Tuliskan visi pesantren..."
                style={{ width: '100%', resize: 'vertical' }}
              />
            </div>
            <div className="admin-fg">
              <label>Misi Pesantren (pisahkan tiap poin dengan baris baru)</label>
              <textarea
                rows={6}
                value={settings.site_misi || ''}
                onChange={e => update('site_misi', e.target.value)}
                placeholder={"Mendidik santri yang berakhlak mulia\nMenghasilkan hafidz Quran yang berkualitas\n..."}
                style={{ width: '100%', resize: 'vertical' }}
              />
            </div>
          </div>
        </div>

      </div>

      {/* Tombol Simpan */}
      <div style={{ marginTop: '1.5rem', textAlign: 'right' }}>
        <button className="admin-btn primary" onClick={handleSave} disabled={saving} style={{ fontSize: '0.95rem', padding: '0.85rem 2rem' }}>
          {saving ? 'Menyimpan...' : '💾 Simpan Semua Pengaturan'}
        </button>
      </div>
    </>
  )
}