import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getDashboard } from '../../api/admin'

const programLabel = { smp: 'SMP', ma: 'MA', tahfidz_murni: 'Tahfidz Murni' }
const statusLabel = {
  pending_verification: 'Menunggu',
  need_revision: 'Revisi',
  verified: 'Terverifikasi',
  accepted: 'Diterima',
  rejected: 'Ditolak',
}

export default function AdminDashboard() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getDashboard()
      .then(res => setData(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div className="admin-loading">⏳ Memuat data...</div>

  return (
    <>
      <div style={{ marginBottom: '2rem' }}>
        <h1 className="admin-page-title">Dashboard</h1>
        <p className="admin-page-sub">Selamat datang di Panel Admin Pesantren Nur Muhammad.</p>
      </div>

      {/* PPDB Stats */}
      <div className="stat-cards">
        <div className="stat-card">
          <div className="stat-card-top">
            <div className="stat-card-icon green">📋</div>
          </div>
          <div className="stat-card-num">{data?.ppdb?.total ?? 0}</div>
          <div className="stat-card-label">Total Pendaftar</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-top">
            <div className="stat-card-icon gold">⏳</div>
          </div>
          <div className="stat-card-num">{data?.ppdb?.pending_verification ?? 0}</div>
          <div className="stat-card-label">Menunggu Verifikasi</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-top">
            <div className="stat-card-icon blue">✅</div>
          </div>
          <div className="stat-card-num">{data?.ppdb?.accepted ?? 0}</div>
          <div className="stat-card-label">Diterima</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-top">
            <div className="stat-card-icon green">📰</div>
          </div>
          <div className="stat-card-num">{data?.articles?.published ?? 0}</div>
          <div className="stat-card-label">Artikel Dipublish</div>
        </div>
      </div>

      {/* Program Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
        <div className="admin-card">
          <div className="admin-card-header">
            <h3>📊 Pendaftar per Program</h3>
          </div>
          <div className="admin-card-body">
            {['smp', 'ma', 'tahfidz_murni'].map(prog => (
              <div key={prog} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.6rem 0', borderBottom: '1px solid #e2e8f0' }}>
                <span style={{ fontSize: '0.85rem', color: '#4a5568', fontWeight: 500 }}>{programLabel[prog]}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '100px', height: '6px', background: '#e2e8f0', borderRadius: '999px', overflow: 'hidden' }}>
                    <div style={{ width: `${((data?.ppdb?.[prog] ?? 0) / (data?.ppdb?.total || 1)) * 100}%`, height: '100%', background: '#1a3a2a', borderRadius: '999px' }} />
                  </div>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1a3a2a', minWidth: '24px', textAlign: 'right' }}>{data?.ppdb?.[prog] ?? 0}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="admin-card">
          <div className="admin-card-header">
            <h3>📈 Status Artikel</h3>
          </div>
          <div className="admin-card-body">
            {[['published', 'Dipublish', '#38a169'], ['draft', 'Draft', '#718096']].map(([key, label, color]) => (
              <div key={key} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.6rem 0', borderBottom: '1px solid #e2e8f0' }}>
                <span style={{ fontSize: '0.85rem', color: '#4a5568', fontWeight: 500 }}>{label}</span>
                <span style={{ fontSize: '1.1rem', fontWeight: 700, color }}>{data?.articles?.[key] ?? 0}</span>
              </div>
            ))}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.6rem 0' }}>
              <span style={{ fontSize: '0.85rem', color: '#4a5568', fontWeight: 500 }}>Total</span>
              <span style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1a3a2a' }}>{data?.articles?.total ?? 0}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Registrations */}
      <div className="admin-card">
        <div className="admin-card-header">
          <h3>🕐 Pendaftar Terbaru</h3>
          <Link to="/admin/ppdb" className="admin-btn outline sm">Lihat Semua</Link>
        </div>
        <div className="admin-table-wrap">
          {data?.latest_registrations?.length > 0 ? (
            <table className="admin-table">
              <thead>
                <tr>
                  <th>No. Pendaftaran</th>
                  <th>Nama</th>
                  <th>Program</th>
                  <th>Status</th>
                  <th>Tanggal</th>
                </tr>
              </thead>
              <tbody>
                {data.latest_registrations.map(reg => (
                  <tr key={reg.id}>
                    <td><span className="td-reg">{reg.registration_number}</span></td>
                    <td><span className="td-name">{reg.nama_lengkap}</span></td>
                    <td><span className={`badge ${reg.program}`}>{programLabel[reg.program]}</span></td>
                    <td><span className={`badge ${reg.status}`}>{statusLabel[reg.status]}</span></td>
                    <td><span className="td-muted">{new Date(reg.created_at).toLocaleDateString('id-ID')}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="admin-empty">
              <div className="empty-icon">📭</div>
              <p>Belum ada pendaftar.</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
