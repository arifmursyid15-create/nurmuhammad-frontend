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

        {/* Informasi Umum */}
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
            {[['smp', 'SMP Nur Muhammad', 'ppdb_kuota_smp', 'ppdb_status_smp'], ['ma', 'MA Nur Muhammad', 'ppdb_kuota_ma', 'ppdb_status_ma'], ['tahfidz_murni', 'Tahfidz Murni', 'ppdb_kuota_tahfidz_murni', 'ppdb_status_tahfidz_murni']].map(([key, label, kuotaKey, statusKey]) => (
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

      </div>

      <div style={{ marginTop: '1.5rem', textAlign: 'right' }}>
        <button className="admin-btn primary" onClick={handleSave} disabled={saving} style={{ fontSize: '0.95rem', padding: '0.85rem 2rem' }}>
          {saving ? 'Menyimpan...' : '💾 Simpan Semua Pengaturan'}
        </button>
      </div>
    </>
  )
}
