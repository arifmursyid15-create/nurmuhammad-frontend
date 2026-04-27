import { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { getArticleBySlug, getLatestArticles } from '../../api/articles'
import '../../styles/berita.css'

export default function BeritaDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [article, setArticle] = useState(null)
  const [related, setRelated] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    window.scrollTo(0, 0)
    setLoading(true)

    getArticleBySlug(slug)
      .then(res => {
        setArticle(res.data)
        // Load related articles
        getLatestArticles().then(r => {
          setRelated(r.data.filter(a => a.slug !== slug).slice(0, 3))
        })
      })
      .catch(() => navigate('/berita'))
      .finally(() => setLoading(false))
  }, [slug])

  // Reading progress bar
  useEffect(() => {
    const handleScroll = () => {
      const doc = document.documentElement
      const scrollTop = doc.scrollTop || document.body.scrollTop
      const scrollHeight = doc.scrollHeight - doc.clientHeight
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0
      const bar = document.getElementById('read-progress')
      if (bar) bar.style.width = progress + '%'
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => alert('Tautan berhasil disalin!'))
  }

  const thumbIcon = (cat) => {
    const icons = { kegiatan: '📸', pengumuman: '📢', islami: '🌙', prestasi: '🏆' }
    return icons[cat] || '📰'
  }

  if (loading) {
    return (
      <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', fontSize: '1rem' }}>
        ⏳ Memuat artikel...
      </div>
    )
  }

  if (!article) return null

  const popular = related

  return (
    <>
      {/* PROGRESS BAR */}
      <div className="read-progress-wrap">
        <div className="read-progress-bar" id="read-progress" />
      </div>

      {/* HERO */}
      <div className="detail-hero">
        <div className="detail-hero-arabic">ن</div>
        <div className="detail-hero-inner">
          {article.category && (
            <span className="art-cat-hero">{article.category.name}</span>
          )}
          <h1>{article.title}</h1>
          <div className="detail-meta-bar">
            <div className="meta-author">
              <div className="meta-avatar">✍️</div>
              <div>
                <div className="meta-author-name">{article.author}</div>
                <div className="meta-author-role">Tim Redaksi Nur Muhammad</div>
              </div>
            </div>
            <div className="meta-divider" />
            <div className="meta-item">
              <span>📅</span>
              {new Date(article.published_at || article.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
            </div>
            <div className="meta-divider" />
            <div className="meta-item"><span>👁️</span> {article.views} tayangan</div>
          </div>
        </div>
      </div>

      {/* LAYOUT */}
      <div className="detail-layout">

        {/* KONTEN */}
        <article className="detail-content">
          <div className="detail-featured-img">
            {article.thumbnail
              ? <img src={article.thumbnail} alt={article.title} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '18px' }} />
              : thumbIcon(article.category?.slug)
            }
          </div>

          {/* Excerpt */}
          {article.excerpt && (
            <p style={{ fontSize: '1.05rem', color: 'var(--text-mid)', fontStyle: 'italic', borderLeft: '4px solid var(--gold)', paddingLeft: '1.25rem', marginBottom: '2rem', lineHeight: 1.75 }}>
              {article.excerpt}
            </p>
          )}

          {/* Content */}
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* TAGS */}
          {article.category && (
            <div className="article-tags">
              <span>Kategori:</span>
              <a href="#" className="art-tag">{article.category.name}</a>
            </div>
          )}

          {/* SHARE */}
          <div className="share-bar">
            <span className="share-label">Bagikan:</span>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(article.title + ' ' + window.location.href)}`}
              target="_blank" rel="noreferrer" className="share-btn wa"
            >💬 WhatsApp</a>
            <a
              href={`https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
              target="_blank" rel="noreferrer" className="share-btn fb"
            >📘 Facebook</a>
            <button className="share-btn" onClick={copyLink}>🔗 Salin Tautan</button>
          </div>

          {/* AUTHOR */}
          <div className="author-card">
            <div className="author-avatar">✍️</div>
            <div>
              <div className="author-name">{article.author}</div>
              <div className="author-role">Tim Redaksi Pesantren Nur Muhammad</div>
              <div className="author-bio">Mengelola publikasi, dokumentasi kegiatan, dan informasi resmi Pesantren Nur Muhammad.</div>
            </div>
          </div>

          {/* RELATED */}
          {related.length > 0 && (
            <div className="related-section">
              <h3>Artikel Terkait</h3>
              <div className="related-grid">
                {related.map(r => (
                  <Link key={r.id} to={`/berita/${r.slug}`} className="related-card">
                    <div className={`related-thumb t-${r.category?.slug || 'islami'}`}>
                      {r.thumbnail
                        ? <img src={r.thumbnail} alt={r.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        : thumbIcon(r.category?.slug)
                      }
                    </div>
                    <div className="related-body">
                      {r.category && <div className={`related-cat ${r.category.slug}`}>{r.category.name}</div>}
                      <h4>{r.title}</h4>
                      <div className="related-date">
                        {new Date(r.published_at || r.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/berita" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--green-soft)', fontWeight: 700, fontSize: '0.88rem', textDecoration: 'none' }}>
              ← Kembali ke Daftar Berita
            </Link>
          </div>
        </article>

        {/* SIDEBAR */}
        <aside className="detail-sidebar">
          <div className="ppdb-cta-sidebar">
            <div className="cta-icon">📖</div>
            <h4>PPDB 2025/2026 Dibuka</h4>
            <p>Daftarkan putra-putri Anda ke Pesantren Nur Muhammad. SMP, MA, dan Tahfidz Murni.</p>
            <Link to="/ppdb" className="btn-cta-sm">Daftar Sekarang →</Link>
          </div>

          {popular.length > 0 && (
            <div className="sidebar-card">
              <div className="sidebar-header">Artikel Lainnya</div>
              <div className="sidebar-body">
                {popular.map((p, i) => (
                  <Link key={p.id} to={`/berita/${p.slug}`} className="popular-item">
                    <span className="popular-num">0{i + 1}</span>
                    <div>
                      <div className="popular-title">{p.title}</div>
                      <div className="popular-cat">
                        {p.category?.name} · {new Date(p.published_at || p.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>
    </>
  )
}
