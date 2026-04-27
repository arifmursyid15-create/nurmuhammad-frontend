import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <Link to="/" className="nav-brand">
        <div className="nav-logo">ن</div>
        <div className="nav-title">
          <strong>Pesantren Nur Muhammad</strong>
          <span>Wonoayu · Mojoagung · Jombang</span>
        </div>
      </Link>
      <ul className={menuOpen ? 'nav-links open' : 'nav-links'}>
        <li><NavLink to="/">Beranda</NavLink></li>
        <li><NavLink to="/profil">Profil</NavLink></li>
        <li className="has-dropdown">
          <span>Unit Pendidikan ▾</span>
          <ul className="dropdown">
            <li><NavLink to="/unit/smp">SMP Nur Muhammad</NavLink></li>
            <li><NavLink to="/unit/ma">MA Nur Muhammad</NavLink></li>
            <li><NavLink to="/unit/tahfidz-murni">Tahfidz Murni</NavLink></li>
          </ul>
        </li>
        <li><NavLink to="/berita">Berita</NavLink></li>
        <li><NavLink to="/kontak">Kontak</NavLink></li>
        <li><NavLink to="/ppdb" className="btn-ppdb">PPDB 2025/2026</NavLink></li>
      </ul>
      <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? 'X' : '='}
      </button>
    </nav>
  )
}