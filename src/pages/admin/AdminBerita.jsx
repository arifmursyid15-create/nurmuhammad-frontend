import { useState, useEffect } from 'react'
import { getAdminArticles, createArticle, updateArticle, deleteArticle } from '../../api/admin'
import { getCategories } from '../../api/articles'

export default function AdminBerita() {
  const [data, setData] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [editing, setEditing] = useState(null)
  const [saving, setSaving] = useState(false)
  const [filters, setFilters] = useState({ search: '', status: '' })
  const [meta, setMeta] = useState({})
  const [form, setForm] = useState({
    title: '', excerpt: '', content: '', category_id: '',
    author: 'Admin Pesantren', status: 'draft', thumbnail: '',
  })

  const fetchData = async (params = {}) => {
    setLoading(true)
    try {
      const res = await getAdminArticles({ ...filters, ...params })
      setData(res.data.data)
      setMeta({ total: res.data.total, current_page: res.data.current_page, last_page: res.data.last_page })
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
    getCategories().then(res => setCategories(res.data))
  }, [])

  const openCreate = () => {
    setEditing(null)
    setForm({ title: '', excerpt: '', content: '', category_id: '', author: 'Admin Pesantren', status: 'draft', thumbnail: '' })
    setShowModal(true)
  }

  const openEdit = (article) => {
    setEditing(article)
    setForm({
      title: article.title, excerpt: article.excerpt || '',
      content: article.content, category_id: article.category_id || '',
      author: article.author, status: article.status, thumbnail: article.thumbnail || '',
    })
    setShowModal(true)
  }

  const handleSave = async () => {
    if (!form.title || !form.content) { alert('Judul dan konten wajib diisi.'); return }
    setSaving(true)
    try {
      if (editing) {
        await updateArticle(editing.id, form)
      } else {
        await createArticle(form)
      }
      setShowModal(false)
      fetchData()
    } catch (err) {
      alert('Gagal menyimpan artikel.')
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async (id) => {
    if (!confirm('Yakin hapus artikel ini?')) return
    try {
      await deleteArticle(id)
      fetchData()
    } catch (err) {
      alert('Gagal menghapus artikel.')
    }
  }

  const catName = (id) => categories.find(c => c.id === id)?.name || '—'

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 className="admin-page-title">Berita & Artikel</h1>
          <p className="admin-page-sub">Kelola konten berita, pengumuman, dan artikel islami.</p>
        </div>
        <button className="admin-btn primary" onClick={openCreate}>+ Tulis Artikel Baru</button>
      </div>

      {/* Filter */}
      <div className="admin-filter-bar">
        <div className="admin-search">
          <span>🔍</span>
          <input
            type="text"
            placeholder="Cari judul artikel..."
            value={filters.search}
            onChange={e => setFilters(p => ({ ...p, search: e.target.value }))}
            onKeyDown={e => e.key === 'Enter' && fetchData()}
          />
        </div>
        <select className="admin-select" value={filters.status} onChange={e => setFilters(p => ({ ...p, status: e.target.value }))}>
          <option value="">Semua Status</option>
          <option value="published">Published</option>
          <option value="draft">Draft</option>
        </select>
        <button className="admin-btn primary" onClick={() => fetchData()}>Filter</button>
      </div>

      {/* Table */}
      <div className="admin-card">
        <div className="admin-card-header">
          <h3>📰 Daftar Artikel ({meta.total ?? 0})</h3>
        </div>
        <div className="admin-table-wrap">
          {loading ? (
            <div className="admin-loading">⏳ Memuat data...</div>
          ) : data.length === 0 ? (
            <div className="admin-empty">
              <div className="empty-icon">📝</div>
              <p>Belum ada artikel. Klik "Tulis Artikel Baru" untuk memulai.</p>
            </div>
          ) : (
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Judul</th>
                  <th>Kategori</th>
                  <th>Penulis</th>
                  <th>Status</th>
                  <th>Tayangan</th>
                  <th>Tanggal</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {data.map(a => (
                  <tr key={a.id}>
                    <td>
                      <div className="td-name" style={{ maxWidth: '280px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{a.title}</div>
                      {a.excerpt && <div className="td-muted" style={{ maxWidth: '280px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{a.excerpt}</div>}
                    </td>
                    <td>{a.category ? <span style={{ fontSize: '0.78rem', fontWeight: 600, color: a.category.color }}>{a.category.name}</span> : <span className="td-muted">—</span>}</td>
                    <td><span className="td-muted">{a.author}</span></td>
                    <td><span className={`badge ${a.status}`}>{a.status === 'published' ? 'Published' : 'Draft'}</span></td>
                    <td><span className="td-muted">{a.views}</span></td>
                    <td><span className="td-muted">{new Date(a.created_at).toLocaleDateString('id-ID')}</span></td>
                    <td>
                      <div style={{ display: 'flex', gap: '0.4rem' }}>
                        <button className="admin-btn outline sm" onClick={() => openEdit(a)}>Edit</button>
                        <button className="admin-btn danger sm" onClick={() => handleDelete(a.id)}>Hapus</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* Modal Form */}
      {showModal && (
        <div className="admin-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="admin-modal" style={{ maxWidth: '700px' }} onClick={e => e.stopPropagation()}>
            <div className="admin-modal-header">
              <h3>{editing ? 'Edit Artikel' : 'Tulis Artikel Baru'}</h3>
              <button className="admin-modal-close" onClick={() => setShowModal(false)}>✕</button>
            </div>
            <div className="admin-modal-body">
              <div className="admin-fg">
                <label>Judul Artikel *</label>
                <input type="text" value={form.title} onChange={e => setForm(p => ({ ...p, title: e.target.value }))} placeholder="Judul artikel..." />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="admin-fg">
                  <label>Kategori</label>
                  <select value={form.category_id} onChange={e => setForm(p => ({ ...p, category_id: e.target.value }))}>
                    <option value="">Pilih kategori...</option>
                    {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                  </select>
                </div>
                <div className="admin-fg">
                  <label>Status</label>
                  <select value={form.status} onChange={e => setForm(p => ({ ...p, status: e.target.value }))}>
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                  </select>
                </div>
              </div>
              <div className="admin-fg">
                <label>Excerpt / Ringkasan</label>
                <textarea value={form.excerpt} onChange={e => setForm(p => ({ ...p, excerpt: e.target.value }))} placeholder="Ringkasan singkat artikel..." style={{ minHeight: '70px' }} />
              </div>
              <div className="admin-fg">
                <label>Konten Artikel *</label>
                <textarea value={form.content} onChange={e => setForm(p => ({ ...p, content: e.target.value }))} placeholder="Tulis konten artikel di sini..." style={{ minHeight: '200px' }} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="admin-fg">
                  <label>Penulis</label>
                  <input type="text" value={form.author} onChange={e => setForm(p => ({ ...p, author: e.target.value }))} />
                </div>
                <div className="admin-fg">
                  <label>URL Thumbnail (opsional)</label>
                  <input type="text" value={form.thumbnail} onChange={e => setForm(p => ({ ...p, thumbnail: e.target.value }))} placeholder="https://..." />
                </div>
              </div>
            </div>
            <div className="admin-modal-footer">
              <button className="admin-btn outline" onClick={() => setShowModal(false)}>Batal</button>
              <button className="admin-btn primary" onClick={handleSave} disabled={saving}>
                {saving ? 'Menyimpan...' : editing ? 'Simpan Perubahan' : 'Publish Artikel'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
