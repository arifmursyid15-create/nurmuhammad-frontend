import { useState, useEffect } from 'react'
import { getGallery } from '../api/gallery'

export default function Galeri() {
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all')
  const [lightbox, setLightbox] = useState(null)

  useEffect(() => {
    getGallery()
      .then(res => setPhotos(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false))
  }, [])

  const categories = ['all', ...new Set(photos.map(p => p.category).filter(Boolean))]

  const filtered = filter === 'all' 
    ? photos 
    : photos.filter(p => p.category === filter)

  return (
    <main>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <h1>Galeri Foto</h1>
          <p>Dokumentasi kegiatan dan aktivitas Pesantren Nur Muhammad</p>
        </div>
      </section>

      <section className="section">
        <div className="container">

          {/* Filter Kategori */}
          {categories.length > 1 && (
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2rem', justifyContent: 'center' }}>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  style={{
                    padding: '0.5rem 1.25rem',
                    borderRadius: '999px',
                    border: '2px solid var(--primary)',
                    background: filter === cat ? 'var(--primary)' : 'transparent',
                    color: filter === cat ? '#fff' : 'var(--primary)',
                    cursor: 'pointer',
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    transition: 'all 0.2s',
                  }}
                >
                  {cat === 'all' ? 'Semua' : cat}
                </button>
              ))}
            </div>
          )}

          {/* Grid Foto */}
          {loading ? (
            <div style={{ textAlign: 'center', padding: '4rem', color: '#888' }}>
              ⏳ Memuat galeri...
            </div>
          ) : filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem', color: '#888' }}>
              📷 Belum ada foto tersedia.
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: '1rem',
            }}>
              {filtered.map(photo => (
                <div
                  key={photo.id}
                  onClick={() => setLightbox(photo)}
                  style={{
                    borderRadius: '12px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    position: 'relative',
                    aspectRatio: '4/3',
                    background: '#f0f0f0',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'scale(1.02)'
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'scale(1)'
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)'
                  }}
                >
                  <img
                    src={photo.path}
                    alt={photo.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.6))',
                    padding: '1rem 0.75rem 0.75rem',
                    color: '#fff',
                  }}>
                    <p style={{ fontSize: '0.85rem', fontWeight: 600, margin: 0 }}>{photo.title}</p>
                    {photo.category && (
                      <span style={{ fontSize: '0.75rem', opacity: 0.85 }}>{photo.category}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'rgba(0,0,0,0.9)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '1rem',
          }}
        >
          <div onClick={e => e.stopPropagation()} style={{ maxWidth: '90vw', maxHeight: '90vh', textAlign: 'center' }}>
            <img
              src={lightbox.path}
              alt={lightbox.title}
              style={{ maxWidth: '100%', maxHeight: '80vh', borderRadius: '8px', objectFit: 'contain' }}
            />
            <p style={{ color: '#fff', marginTop: '0.75rem', fontWeight: 600 }}>{lightbox.title}</p>
            {lightbox.caption && <p style={{ color: '#ccc', fontSize: '0.85rem' }}>{lightbox.caption}</p>}
            <button
              onClick={() => setLightbox(null)}
              style={{
                marginTop: '1rem', padding: '0.5rem 1.5rem',
                background: 'rgba(255,255,255,0.2)', color: '#fff',
                border: '1px solid rgba(255,255,255,0.4)', borderRadius: '999px',
                cursor: 'pointer', fontSize: '0.9rem',
              }}
            >
              ✕ Tutup
            </button>
          </div>
        </div>
      )}
    </main>
  )
}