import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getArticles, getLatestArticles, getCategories } from '../../api/articles'
import '../../styles/berita.css'

const topik = ['PPDB', 'Tahfidz', 'Haflah', 'MTQ', 'Olimpiade', 'Kitab Kuning', 'Ramadhan', 'Maulid Nabi', 'Akhlak', 'Bahasa Arab', 'Santri', 'Alumni']

export default function BeritaList() {
  const [articles, setArticles] = useState([])
  const [featured, setFeatured] = useState(null)
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeFilter, setActiveFilter] = useState('semua')
  const [meta, setMeta] = useState({})

  useEffect(() => {
    // Load featured article
    getLatestArticles()
      .then(res => setFeatured(res.data[0] || null))
      .catch(() => {})

    // Load categories
    getCategories()
      .then(res => setCategories(res.data || []))
      .catch(() => {})

    // Load all articles
    fetchArticles('')
  }, [])

  const fetchArticles = (categorySlug = '', page = 1) => {
    setLoading(true)
    getArticles({ category: categorySlug, per_page: 9, page })
      .then(res => {
        setArticles(res.data.data || [])
        setMeta({
          total: res.data.total,
          current_page: res.data.current_page,
          last_page: res.data.last_page,
        })
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false))
  }

  const handleFilter = (f) => {
    setActiveFilter(f)
    fetchArticles(f === 'semua' ? '' : f)
  }

  const thumbIcon = (cat) => {
    const icons = { kegiatan: '📸', pengumuman: '📢', islami: '🌙', prestasi: '🏆' }
    return icons[cat] || '📰'
  }

  return (
    <>
      {/* HERO */}
      <div className="berita-hero">
        <div className="berita-hero-arabic">ن</div>
        <div className="berita-hero-inner">
          <div>
            <div className="berita-hero-eyebrow">Berita & Artikel</div>
            <h1>Kabar Terbaru dari<br /><em>Nur Muhammad</em></h1>
            <p className="berita-hero-desc">Ikuti perkembangan kegiatan, pengumuman resmi, dan artikel islami dari Pesantren Nur Muhammad.</p>
          </div>
          <div className="berita-search">
            <input type="text" placeholder="Cari artikel atau berita..." />
            <button>🔍</button>
          </div>
        </div>
      </div>

      {/* FILTER */}
      <div className="filter-bar">
        <div className="filter-inner">
          <button
            className={`filter-btn ${activeFilter === 'semua' ? 'active' : ''}`}
            onClick={() => handleFilter('semua')}
          >
            Semua
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`filter-btn ${activeFilter === cat.slug ? 'active' : ''}`}
              onClick={() => handleFilter(cat.slug)}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* BODY */}
      <div className="berita-body">

        {/* FEATURED */}
        {activeFilter === 'semua' && featured && (
          <>
            <div className="featured-label"><span>Artikel Utama</span></div>
            <Link to={`/berita/${featured.slug}`} className="featured-card">
              <div className="featured-thumb">
                {featured.thumbnail
                  ? <img src={featured.thumbnail} alt={featured.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  : thumbIcon(featured.category?.slug)
                }
              </div>
              <div className="featured-body">
                {featured.category && (
                  <span className={`art-cat ${featured.category.slug}`}>{featured.category.name}</span>
                )}
                <h2>{featured.title}</h2>
                {featured.excerpt && <p>{featured.excerpt}</p>}
                <div className="featured-meta">
                  <span>{new Date(featured.published_at || featured.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                  <span className="mdot" />
                  <span>{featured.author}</span>
                </div>
                <span className="btn-baca">Baca Selengkapnya →</span>
              </div>
            </Link>
          </>
        )}

        {/* LAYOUT */}
        <div className="berita-layout">
          <div>
            <div className="articles-header">
              <h3>{activeFilter === 'semua' ? 'Semua Artikel' : categories.find(c => c.slug === activeFilter)?.name || 'Artikel'}</h3>
              <span className="articles-count">Menampilkan {meta.total ?? 0} artikel</span>
            </div>

            <div className="articles-grid">
              {loading ? (
                <div style={{ gridColumn: 'span 3', textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
                  ⏳ Memuat artikel...
                </div>
              ) : articles.length === 0 ? (
                <div style={{ gridColumn: 'span 3', textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
                  Belum ada artikel yang dipublish.
                </div>
              ) : articles.map(a => (
                <Link key={a.id} to={`/berita/${a.slug}`} className="article-card">
                  <div className={`article-thumb t-${a.category?.slug || 'islami'}`}>
                    {a.thumbnail
                      ? <img src={a.thumbnail} alt={a.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      : thumbIcon(a.category?.slug)
                    }
                  </div>
                  <div className="article-body">
                    {a.category && (
                      <span className={`art-cat ${a.category.slug}`}>{a.category.name}</span>
                    )}
                    <h3>{a.title}</h3>
                    {a.excerpt && <p className="article-excerpt">{a.excerpt}</p>}
                    <div className="article-footer">
                      <span className="article-date">
                        {new Date(a.published_at || a.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </span>
                      <span className="article-link-text">Baca →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* PAGINATION */}
            {meta.last_page > 1 && (
              <div className="pagination">
                <button
                  className="page-btn"
                  onClick={() => fetchArticles(activeFilter === 'semua' ? '' : activeFilter, meta.current_page - 1)}
                  disabled={meta.current_page === 1}
                >‹</button>
                {Array.from({ length: meta.last_page }, (_, i) => i + 1).map(p => (
                  <button
                    key={p}
                    className={`page-btn ${meta.current_page === p ? 'active' : ''}`}
                    onClick={() => fetchArticles(activeFilter === 'semua' ? '' : activeFilter, p)}
                  >{p}</button>
                ))}
                <button
                  className="page-btn"
                  onClick={() => fetchArticles(activeFilter === 'semua' ? '' : activeFilter, meta.current_page + 1)}
                  disabled={meta.current_page === meta.last_page}
                >›</button>
              </div>
            )}
          </div>

          {/* SIDEBAR */}
          <aside className="berita-sidebar">
            <div className="sidebar-card">
              <div className="sidebar-header">Kategori</div>
              <div className="sidebar-body">
                <div className="cat-list">
                  <a
                    href="#"
                    className="cat-item"
                    onClick={e => { e.preventDefault(); handleFilter('semua') }}
                  >
                    <span className="cat-item-left">
                      <span className="cat-dot" style={{ background: '#718096' }} />
                      Semua
                    </span>
                  </a>
                  {categories.map(c => (
                    <a
                      key={c.id}
                      href="#"
                      className="cat-item"
                      onClick={e => { e.preventDefault(); handleFilter(c.slug) }}
                    >
                      <span className="cat-item-left">
                        <span className="cat-dot" style={{ background: c.color }} />
                        {c.name}
                      </span>
                      <span className="cat-count">{c.articles_count ?? 0}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="sidebar-card">
              <div className="sidebar-header">Topik</div>
              <div className="sidebar-body">
                <div className="tags-list">
                  {topik.map(t => <a key={t} href="#" className="tag">{t}</a>)}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}
