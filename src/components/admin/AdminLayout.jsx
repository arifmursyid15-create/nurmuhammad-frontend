import { Outlet, NavLink, useNavigate } from 'react-router-dom'
import { logout } from '../../api/admin'
import '../../styles/admin.css'

const navItems = [
  { to: '/admin', icon: '📊', label: 'Dashboard', end: true },
  { to: '/admin/ppdb', icon: '📋', label: 'Data PPDB' },
  { to: '/admin/berita', icon: '📰', label: 'Berita & Artikel' },
  { to: '/admin/galeri', icon: '🖼️', label: 'Galeri Foto' },
  { to: '/admin/pengaturan', icon: '⚙️', label: 'Pengaturan' },
]

export default function AdminLayout() {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('admin_user') || '{}')

  const handleLogout = async () => {
    try {
      await logout()
    } catch (_) {}
    localStorage.removeItem('admin_token')
    localStorage.removeItem('admin_user')
    navigate('/admin/login')
  }

  return (
    <div className="admin-layout">
      {/* SIDEBAR */}
      <aside className="admin-sidebar">
        <div className="sidebar-brand">
          <div className="brand-icon">ن</div>
          <div>
            <div className="brand-name">Nur Muhammad</div>
            <div className="brand-sub">Panel Admin</div>
          </div>
        </div>

        <nav className="sidebar-nav">
          <div className="sidebar-nav-label">Menu Utama</div>
          {navItems.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `sidebar-nav-item ${isActive ? 'active' : ''}`
              }
            >
              <span className="nav-icon">{item.icon}</span>
              {item.label}
            </NavLink>
          ))}

          <div className="sidebar-nav-label" style={{ marginTop: '1rem' }}>Akses Cepat</div>
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="sidebar-nav-item"
          >
            <span className="nav-icon">🌐</span>
            Lihat Website
          </a>
          <NavLink to="/ppdb" target="_blank" className="sidebar-nav-item">
            <span className="nav-icon">📝</span>
            Halaman PPDB
          </NavLink>
        </nav>

        <div className="sidebar-footer">
          <div className="sidebar-user">
            <div className="sidebar-user-avatar">👤</div>
            <div>
              <div className="sidebar-user-name">{user.name || 'Admin'}</div>
              <div className="sidebar-user-email">{user.email || ''}</div>
            </div>
          </div>
          <button className="btn-logout" onClick={handleLogout}>
            🚪 Keluar
          </button>
        </div>
      </aside>

      {/* MAIN */}
      <main className="admin-main">
        <div className="admin-content">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
