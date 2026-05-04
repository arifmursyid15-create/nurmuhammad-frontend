import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
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
  const filtered = filter === 'all' ? photos : photos.filter(p => p.category === filter)

  return (
    <>
      {/* ─── HERO ─── */}
      <section style={{
        background: 'linear-gradient(135deg, var(--green-dark) 0%, var(--green-mid) 100%)',
        padding: '4rem 2rem 3rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.04,
          backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px',
        }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'inline-block', background: 'rgba(200,169,81,0.15)',
            border: '1px solid rgba(200,169,81,0.3)',
            color: 'var(--gold)', fontSize: '0.78rem', fontWeight: 700,
            padding: '0.35rem 1rem', borderRadius: '999px',
            letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1rem',
          }}>
            Dokumentasi Kegiatan
          </div>
          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            color: 'var(--white)', fontWeight: 700, marginBottom: '0.75rem',
          }}>
            Galeri Foto
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1rem', maxWidth: '480px', margin: '0 auto 1.5rem' }}>
            Dokumentasi kegiatan dan aktivitas Pesantren Nur Muhammad
          </p>
          <Link to="/" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.8rem', textDecoration: 'none' }}>
            Beranda
          </Link>
          <span style={{ color: 'rgba(255,255,255,0.3)', margin: '0 0.5rem' }}>›</span>
          <span style={{ color: 'var(--gold)', fontSize: '0.8rem' }}>Galeri</span>
        </div>
      </section>

      {/* ─── KONTEN ─── */}
      <section style={{ padding: '3rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>

        {/* Filter Kategori */}
        {categories.length > 1 && (
          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '2.5rem', justifyContent: 'center' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  padding: '0.45rem 1.2rem',
                  borderRadius: '999px',
                  border: '2px solid',
                  borderColor: filter === cat ? 'var(--green-mid)' : 'rgba(0,0,0,0.12)',
                  background: filter === cat ? 'var(--green-mid)' : 'transparent',
                  color: filter === cat ? 'var(--white)' : 'var(--text-mid)',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: '0.82rem',
                  transition: 'all 0.2s',
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                }}
              >
                {cat === 'all' ? 'Semua Foto' : cat}
              </button>
            ))}
          </div>
        )}

        {/* Grid Foto */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '5rem', color: 'var(--text-muted)' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>⏳</div>
            <p>Memuat galeri...</p>
          </div>
        ) : filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '5rem', color: 'var(--text-muted)' }}>
            <div style={{ fontSize: '3rem', marginBottom: '0.75rem' }}>📷</div>
            <p style={{ fontWeight: 600 }}>Belum ada foto tersedia.</p>
            <p style={{ fontSize: '0.85rem', marginTop: '0.25rem' }}>Foto akan segera ditambahkan.</p>
          </div>
        ) : (
          <>
            <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.82rem', marginBottom: '1.5rem' }}>
              Menampilkan <strong>{filtered.length}</strong> foto
              {filter !== 'all' && <> dalam kategori <strong>{filter}</strong></>}
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1.25rem',
            }}>
              {filtered.map(photo => (
                <div
                  key={photo.id}
                  onClick={() => setLightbox(photo)}
                  style={{
                    borderRadius: '14px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    position: 'relative',
                    aspectRatio: '4/3',
                    background: 'var(--cream-dark)',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                    transition: 'transform 0.25s, box-shadow 0.25s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-4px)'
                    e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.15)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)'
                  }}
                >
                  <img
                    src={photo.path}
                    alt={photo.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                    padding: '2rem 1rem 0.9rem',
                  }}>
                    <p style={{ fontSize: '0.88rem', fontWeight: 700, color: '#fff', margin: 0 }}>{photo.title}</p>
                    {photo.category && (
                      <span style={{
                        fontSize: '0.72rem', color: 'var(--gold)',
                        fontWeight: 600, marginTop: '0.2rem', display: 'block',
                      }}>
                        {photo.category}
                      </span>
                    )}
                  </div>
                  <div style={{
                    position: 'absolute', top: '0.75rem', right: '0.75rem',
                    background: 'rgba(0,0,0,0.4)', borderRadius: '50%',
                    width: '32px', height: '32px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#fff', fontSize: '0.85rem',
                  }}>
                    🔍
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </section>

      {/* ─── LIGHTBOX ─── */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'rgba(0,0,0,0.92)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '1rem',
          }}
        >
          <div onClick={e => e.stopPropagation()} style={{ maxWidth: '90vw', maxHeight: '90vh', textAlign: 'center' }}>
            <img
              src={lightbox.path}
              alt={lightbox.title}
              style={{ maxWidth: '100%', maxHeight: '75vh', borderRadius: '12px', objectFit: 'contain' }}
            />
            <p style={{ color: '#fff', marginTop: '1rem', fontWeight: 700, fontSize: '1rem' }}>{lightbox.title}</p>
            {lightbox.caption && (
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', marginTop: '0.25rem' }}>{lightbox.caption}</p>
            )}
            {lightbox.category && (
              <span style={{
                display: 'inline-block', marginTop: '0.5rem',
                background: 'rgba(200,169,81,0.2)', color: 'var(--gold)',
                padding: '0.25rem 0.9rem', borderRadius: '999px',
                fontSize: '0.75rem', fontWeight: 600,
              }}>
                {lightbox.category}
              </span>
            )}
            <div style={{ marginTop: '1.25rem' }}>
              <button
                onClick={() => setLightbox(null)}
                style={{
                  padding: '0.55rem 1.75rem',
                  background: 'rgba(255,255,255,0.1)',
                  color: '#fff',
                  border: '1px solid rgba(255,255,255,0.25)',
                  borderRadius: '999px',
                  cursor: 'pointer',
                  fontSize: '0.88rem',
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  transition: 'all 0.2s',
                }}
              >
                ✕ Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}