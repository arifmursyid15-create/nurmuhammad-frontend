import { useState, useEffect, useRef } from 'react'
import { getAdminGallery, uploadGallery, deleteGallery } from '../../api/gallery'

export default function AdminGaleri() {
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [deleteId, setDeleteId] = useState(null)
  const fileRef = useRef()

  const [form, setForm] = useState({
    title: '',
    category: '',
    caption: '',
    order: 0,
    image: null,
  })
  const [preview, setPreview] = useState(null)

  const fetchPhotos = () => {
    setLoading(true)
    getAdminGallery()
      .then(res => setPhotos(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false))
  }

  useEffect(() => { fetchPhotos() }, [])

  const handleFile = (e) => {
    const file = e.target.files[0]
    if (!file) return
    setForm(p => ({ ...p, image: file }))
    setPreview(URL.createObjectURL(file))
  }

  const handleUpload = async () => {
    if (!form.title || !form.image) {
      alert('Judul dan foto wajib diisi.')
      return
    }
    setUploading(true)
    try {
      const fd = new FormData()
      fd.append('title', form.title)
      fd.append('category', form.category)
      fd.append('caption', form.caption)
      fd.append('order', form.order)
      fd.append('image', form.image)
      await uploadGallery(fd)
      setShowForm(false)
      setForm({ title: '', category: '', caption: '', order: 0, image: null })
      setPreview(null)
      fetchPhotos()
    } catch (err) {
      alert('Gagal upload foto. Cek koneksi atau Cloudinary preset.')
    } finally {
      setUploading(false)
    }
  }

  const handleDelete = async (id) => {
    try {
      await deleteGallery(id)
      setDeleteId(null)
      fetchPhotos()
    } catch (err) {
      alert('Gagal menghapus foto.')
    }
  }

  return (
    <>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 className="admin-page-title">Galeri Foto</h1>
          <p className="admin-page-sub">Upload dan kelola foto kegiatan pesantren.</p>
        </div>
        <button className="admin-btn primary" onClick={() => setShowForm(!showForm)}>
          {showForm ? '✕ Batal' : '+ Upload Foto'}
        </button>
      </div>

      {/* Form Upload */}
      {showForm && (
        <div className="admin-card" style={{ marginBottom: '2rem' }}>
          <div className="admin-card-header"><h3>📤 Upload Foto Baru</h3></div>
          <div className="admin-card-body">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <div className="admin-fg">
                  <label>Judul Foto *</label>
                  <input
                    type="text"
                    value={form.title}
                    onChange={e => setForm(p => ({ ...p, title: e.target.value }))}
                    placeholder="Contoh: Kegiatan Santri 2025"
                  />
                </div>
                <div className="admin-fg">
                  <label>Kategori</label>
                  <input
                    type="text"
                    value={form.category}
                    onChange={e => setForm(p => ({ ...p, category: e.target.value }))}
                    placeholder="Contoh: Kegiatan, Prestasi, Fasilitas"
                  />
                </div>
                <div className="admin-fg">
                  <label>Keterangan</label>
                  <textarea
                    rows={3}
                    value={form.caption}
                    onChange={e => setForm(p => ({ ...p, caption: e.target.value }))}
                    placeholder="Deskripsi singkat foto..."
                    style={{ width: '100%', resize: 'vertical' }}
                  />
                </div>
                <div className="admin-fg">
                  <label>Urutan Tampil</label>
                  <input
                    type="number"
                    value={form.order}
                    onChange={e => setForm(p => ({ ...p, order: e.target.value }))}
                    min={0}
                  />
                </div>
              </div>
              <div>
                <div className="admin-fg">
                  <label>Pilih Foto * (maks. 5MB)</label>
                  <input
                    ref={fileRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFile}
                    style={{ marginBottom: '0.75rem' }}
                  />
                  {preview && (
                    <img
                      src={preview}
                      alt="preview"
                      style={{ width: '100%', borderRadius: '8px', objectFit: 'cover', maxHeight: '220px' }}
                    />
                  )}
                </div>
              </div>
            </div>
            <div style={{ marginTop: '1rem', display: 'flex', gap: '0.75rem' }}>
              <button className="admin-btn primary" onClick={handleUpload} disabled={uploading}>
                {uploading ? '⏳ Mengupload...' : '📤 Upload Foto'}
              </button>
              <button className="admin-btn" onClick={() => { setShowForm(false); setPreview(null) }}>
                Batal
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Grid Foto */}
      {loading ? (
        <div className="admin-loading">⏳ Memuat foto...</div>
      ) : photos.length === 0 ? (
        <div className="admin-card" style={{ textAlign: 'center', padding: '3rem' }}>
          <p style={{ fontSize: '3rem' }}>📷</p>
          <p style={{ color: '#888' }}>Belum ada foto. Klik "+ Upload Foto" untuk menambahkan.</p>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
          {photos.map(photo => (
            <div key={photo.id} className="admin-card" style={{ padding: 0, overflow: 'hidden' }}>
              <img
                src={photo.path}
                alt={photo.title}
                style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover' }}
              />
              <div style={{ padding: '0.75rem' }}>
                <p style={{ fontWeight: 600, fontSize: '0.85rem', marginBottom: '0.25rem' }}>{photo.title}</p>
                {photo.category && (
                  <span style={{
                    fontSize: '0.72rem', background: '#ebf4ff', color: '#3182ce',
                    padding: '0.2rem 0.6rem', borderRadius: '999px', fontWeight: 600
                  }}>
                    {photo.category}
                  </span>
                )}
                <div style={{ marginTop: '0.75rem' }}>
                  <button
                    className="admin-btn danger"
                    style={{ width: '100%', fontSize: '0.8rem', padding: '0.4rem' }}
                    onClick={() => setDeleteId(photo.id)}
                  >
                    🗑️ Hapus
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Konfirmasi Hapus */}
      {deleteId && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 9999,
          background: 'rgba(0,0,0,0.5)',
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <div className="admin-card" style={{ maxWidth: '400px', width: '90%', textAlign: 'center', padding: '2rem' }}>
            <p style={{ fontSize: '2rem' }}>🗑️</p>
            <h3 style={{ marginBottom: '0.5rem' }}>Hapus Foto?</h3>
            <p style={{ color: '#666', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
              Foto akan dihapus permanen dari galeri.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
              <button className="admin-btn danger" onClick={() => handleDelete(deleteId)}>Ya, Hapus</button>
              <button className="admin-btn" onClick={() => setDeleteId(null)}>Batal</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}