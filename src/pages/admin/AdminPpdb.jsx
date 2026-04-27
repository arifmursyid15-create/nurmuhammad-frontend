import { useState, useEffect } from 'react'
import { getPpdbList, updatePpdbStatus, deletePpdb } from '../../api/admin'

const programLabel = { smp: 'SMP', ma: 'MA', tahfidz_murni: 'Tahfidz Murni' }
const statusLabel = {
  pending_verification: 'Menunggu',
  need_revision: 'Perlu Revisi',
  verified: 'Terverifikasi',
  accepted: 'Diterima',
  rejected: 'Ditolak',
}

export default function AdminPpdb() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState({ search: '', program: '', status: '', boarding_gender: '' })
  const [selected, setSelected] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [statusForm, setStatusForm] = useState({ status: '', admin_message: '' })
  const [saving, setSaving] = useState(false)
  const [meta, setMeta] = useState({})

  const fetchData = async (params = {}) => {
    setLoading(true)
    try {
      const res = await getPpdbList({ ...filters, ...params })
      setData(res.data.data)
      setMeta({ total: res.data.total, current_page: res.data.current_page, last_page: res.data.last_page })
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchData() }, [])

  const handleFilter = () => fetchData()

  const openDetail = (reg) => {
    setSelected(reg)
    setStatusForm({ status: reg.status, admin_message: reg.admin_message || '' })
    setShowModal(true)
  }

  const handleUpdateStatus = async () => {
    setSaving(true)
    try {
      await updatePpdbStatus(selected.id, statusForm)
      setShowModal(false)
      fetchData()
    } catch (err) {
      alert('Gagal update status.')
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async (id) => {
    if (!confirm('Yakin hapus data pendaftar ini?')) return
    try {
      await deletePpdb(id)
      fetchData()
    } catch (err) {
      alert('Gagal menghapus data.')
    }
  }

  return (
    <>
      <div style={{ marginBottom: '2rem' }}>
        <h1 className="admin-page-title">Data PPDB</h1>
        <p className="admin-page-sub">Kelola data pendaftar peserta didik baru 2025/2026.</p>
      </div>

      {/* Filter */}
      <div className="admin-filter-bar">
        <div className="admin-search">
          <span>🔍</span>
          <input
            type="text"
            placeholder="Cari nama atau nomor pendaftaran..."
            value={filters.search}
            onChange={e => setFilters(p => ({ ...p, search: e.target.value }))}
            onKeyDown={e => e.key === 'Enter' && handleFilter()}
          />
        </div>
        <select className="admin-select" value={filters.program} onChange={e => setFilters(p => ({ ...p, program: e.target.value }))}>
          <option value="">Semua Program</option>
          <option value="smp">SMP</option>
          <option value="ma">MA</option>
          <option value="tahfidz_murni">Tahfidz Murni</option>
        </select>
        <select className="admin-select" value={filters.status} onChange={e => setFilters(p => ({ ...p, status: e.target.value }))}>
          <option value="">Semua Status</option>
          <option value="pending_verification">Menunggu</option>
          <option value="need_revision">Perlu Revisi</option>
          <option value="verified">Terverifikasi</option>
          <option value="accepted">Diterima</option>
          <option value="rejected">Ditolak</option>
        </select>
        <select className="admin-select" value={filters.boarding_gender} onChange={e => setFilters(p => ({ ...p, boarding_gender: e.target.value }))}>
          <option value="">Putra & Putri</option>
          <option value="putra">Putra</option>
          <option value="putri">Putri</option>
        </select>
        <button className="admin-btn primary" onClick={handleFilter}>Filter</button>
      </div>

      {/* Table */}
      <div className="admin-card">
        <div className="admin-card-header">
          <h3>📋 Daftar Pendaftar ({meta.total ?? 0})</h3>
        </div>
        <div className="admin-table-wrap">
          {loading ? (
            <div className="admin-loading">⏳ Memuat data...</div>
          ) : data.length === 0 ? (
            <div className="admin-empty">
              <div className="empty-icon">📭</div>
              <p>Belum ada data pendaftar.</p>
            </div>
          ) : (
            <table className="admin-table">
              <thead>
                <tr>
                  <th>No. Daftar</th>
                  <th>Nama Santri</th>
                  <th>Program</th>
                  <th>Asrama</th>
                  <th>Status</th>
                  <th>Tanggal</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {data.map(reg => (
                  <tr key={reg.id}>
                    <td><span className="td-reg">{reg.registration_number}</span></td>
                    <td>
                      <div className="td-name">{reg.nama_lengkap}</div>
                      <div className="td-muted">{reg.asal_sekolah}</div>
                    </td>
                    <td><span className={`badge ${reg.program}`}>{programLabel[reg.program]}</span></td>
                    <td style={{ textTransform: 'capitalize' }}>{reg.boarding_gender}</td>
                    <td><span className={`badge ${reg.status}`}>{statusLabel[reg.status]}</span></td>
                    <td><span className="td-muted">{new Date(reg.created_at).toLocaleDateString('id-ID')}</span></td>
                    <td>
                      <div style={{ display: 'flex', gap: '0.4rem' }}>
                        <button className="admin-btn outline sm" onClick={() => openDetail(reg)}>Detail</button>
                        <button className="admin-btn danger sm" onClick={() => handleDelete(reg.id)}>Hapus</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        {meta.last_page > 1 && (
          <div style={{ padding: '1rem 1.5rem' }}>
            <div className="admin-pagination">
              <span>Halaman {meta.current_page} dari {meta.last_page}</span>
              <div className="admin-pagination-btns">
                <button className="admin-page-btn" onClick={() => fetchData({ page: meta.current_page - 1 })} disabled={meta.current_page === 1}>‹</button>
                <button className="admin-page-btn" onClick={() => fetchData({ page: meta.current_page + 1 })} disabled={meta.current_page === meta.last_page}>›</button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Modal Detail */}
      {showModal && selected && (
        <div className="admin-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="admin-modal" onClick={e => e.stopPropagation()}>
            <div className="admin-modal-header">
              <h3>Detail Pendaftar — {selected.registration_number}</h3>
              <button className="admin-modal-close" onClick={() => setShowModal(false)}>✕</button>
            </div>
            <div className="admin-modal-body">
              <div className="detail-grid" style={{ marginBottom: '1.5rem' }}>
                <div className="detail-item"><div className="di-label">Nama Lengkap</div><div className="di-value">{selected.nama_lengkap}</div></div>
                <div className="detail-item"><div className="di-label">Tempat & Tgl Lahir</div><div className="di-value">{selected.tempat_lahir}, {new Date(selected.tanggal_lahir).toLocaleDateString('id-ID')}</div></div>
                <div className="detail-item"><div className="di-label">Program</div><div className="di-value">{programLabel[selected.program]}</div></div>
                <div className="detail-item"><div className="di-label">Asrama</div><div className="di-value" style={{ textTransform: 'capitalize' }}>{selected.boarding_gender}</div></div>
                <div className="detail-item"><div className="di-label">Asal Sekolah</div><div className="di-value">{selected.asal_sekolah}</div></div>
                <div className="detail-item"><div className="di-label">Nama Ayah</div><div className="di-value">{selected.nama_ayah}</div></div>
                <div className="detail-item"><div className="di-label">Nama Ibu</div><div className="di-value">{selected.nama_ibu}</div></div>
                <div className="detail-item"><div className="di-label">WhatsApp Wali</div><div className="di-value">{selected.wa_wali}</div></div>
              </div>

              <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '1.25rem' }}>
                <p style={{ fontSize: '0.82rem', fontWeight: 700, color: '#4a5568', marginBottom: '0.75rem' }}>Update Status</p>
                <div className="admin-fg">
                  <label>Status</label>
                  <select value={statusForm.status} onChange={e => setStatusForm(p => ({ ...p, status: e.target.value }))}>
                    <option value="pending_verification">Menunggu Verifikasi</option>
                    <option value="need_revision">Perlu Revisi</option>
                    <option value="verified">Terverifikasi</option>
                    <option value="accepted">Diterima</option>
                    <option value="rejected">Ditolak</option>
                  </select>
                </div>
                <div className="admin-fg">
                  <label>Pesan untuk Pendaftar (opsional)</label>
                  <textarea value={statusForm.admin_message} onChange={e => setStatusForm(p => ({ ...p, admin_message: e.target.value }))} placeholder="Contoh: Dokumen lengkap. Harap hadir pada tanggal..." />
                </div>
              </div>
            </div>
            <div className="admin-modal-footer">
              <button className="admin-btn outline" onClick={() => setShowModal(false)}>Batal</button>
              <button className="admin-btn primary" onClick={handleUpdateStatus} disabled={saving}>
                {saving ? 'Menyimpan...' : 'Simpan Status'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
