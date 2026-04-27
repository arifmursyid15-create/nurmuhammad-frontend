# Setup React Project Nur Muhammad

Write-Host "Membuat struktur folder..." -ForegroundColor Cyan

New-Item -ItemType Directory -Force -Path "src/api" | Out-Null
New-Item -ItemType Directory -Force -Path "src/components/layout" | Out-Null
New-Item -ItemType Directory -Force -Path "src/components/ui" | Out-Null
New-Item -ItemType Directory -Force -Path "src/pages/unit" | Out-Null
New-Item -ItemType Directory -Force -Path "src/pages/berita" | Out-Null
New-Item -ItemType Directory -Force -Path "src/pages/ppdb" | Out-Null
New-Item -ItemType Directory -Force -Path "src/routes" | Out-Null

Write-Host "Membuat halaman placeholder..." -ForegroundColor Cyan

Set-Content "src/pages/Home.jsx" "export default function Home() { return <div>Home</div> }" -Encoding UTF8
Set-Content "src/pages/Profil.jsx" "export default function Profil() { return <div>Profil</div> }" -Encoding UTF8
Set-Content "src/pages/Kontak.jsx" "export default function Kontak() { return <div>Kontak</div> }" -Encoding UTF8
Set-Content "src/pages/unit/UnitSmp.jsx" "export default function UnitSmp() { return <div>SMP Nur Muhammad</div> }" -Encoding UTF8
Set-Content "src/pages/unit/UnitMa.jsx" "export default function UnitMa() { return <div>MA Nur Muhammad</div> }" -Encoding UTF8
Set-Content "src/pages/unit/UnitTahfidz.jsx" "export default function UnitTahfidz() { return <div>Tahfidz Murni</div> }" -Encoding UTF8
Set-Content "src/pages/berita/BeritaList.jsx" "export default function BeritaList() { return <div>Berita</div> }" -Encoding UTF8
Set-Content "src/pages/berita/BeritaDetail.jsx" "export default function BeritaDetail() { return <div>Detail Berita</div> }" -Encoding UTF8
Set-Content "src/pages/ppdb/PpdbPage.jsx" "export default function PpdbPage() { return <div>PPDB</div> }" -Encoding UTF8
Set-Content "src/pages/ppdb/PpdbKonfirmasi.jsx" "export default function PpdbKonfirmasi() { return <div>Konfirmasi PPDB</div> }" -Encoding UTF8
Set-Content "src/pages/ppdb/PpdbCek.jsx" "export default function PpdbCek() { return <div>Cek Pendaftaran</div> }" -Encoding UTF8

Write-Host "Membuat komponen layout..." -ForegroundColor Cyan

$floatingWA = @'
export default function FloatingWA() {
  return (
    <div className="floating-wa">
      <a href="https://wa.me/6281200000000" target="_blank" rel="noreferrer">
        Hubungi Kami
      </a>
    </div>
  )
}
'@
Set-Content "src/components/layout/FloatingWA.jsx" $floatingWA -Encoding UTF8

$layout = @'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import FloatingWA from './FloatingWA'

export default function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingWA />
    </>
  )
}
'@
Set-Content "src/components/layout/Layout.jsx" $layout -Encoding UTF8

$navbar = @'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <Link to="/" className="nav-brand">
        <div className="nav-logo">n</div>
        <div className="nav-title">
          <strong>Pesantren Nur Muhammad</strong>
          <span>Wonoayu - Mojoagung - Jombang</span>
        </div>
      </Link>
      <ul className={menuOpen ? 'nav-links open' : 'nav-links'}>
        <li><NavLink to="/">Beranda</NavLink></li>
        <li><NavLink to="/profil">Profil</NavLink></li>
        <li>
          <span>Unit Pendidikan</span>
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
'@
Set-Content "src/components/layout/Navbar.jsx" $navbar -Encoding UTF8

$footer = @'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="footer-logo-icon">n</div>
            <strong>Pesantren Nur Muhammad</strong>
          </div>
          <p className="footer-tagline">
            Pesantren modern berbasis salaf, membina generasi muslim yang berilmu, berakhlak, dan berdaya saing.
          </p>
          <div className="footer-socials">
            <a href="#" className="social-btn">ig</a>
            <a href="#" className="social-btn">fb</a>
            <a href="#" className="social-btn">yt</a>
            <a href="#" className="social-btn">tw</a>
          </div>
        </div>
        <div className="footer-col">
          <h4>Navigasi</h4>
          <ul>
            <li><Link to="/">Beranda</Link></li>
            <li><Link to="/profil">Profil Pesantren</Link></li>
            <li><Link to="/unit/smp">SMP Nur Muhammad</Link></li>
            <li><Link to="/unit/ma">MA Nur Muhammad</Link></li>
            <li><Link to="/unit/tahfidz-murni">Tahfidz Murni</Link></li>
            <li><Link to="/berita">Berita dan Artikel</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>PPDB</h4>
          <ul>
            <li><Link to="/ppdb">Info PPDB</Link></li>
            <li><Link to="/ppdb">Daftar Online</Link></li>
            <li><Link to="/ppdb/cek">Cek Pendaftaran</Link></li>
            <li><Link to="/kontak">Kontak Panitia</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Kontak</h4>
          <p>Wonoayu, Mojoagung, Jombang</p>
          <p>+62 812-xxxx-xxxx</p>
          <p>info@ppanurmuhammad.web.id</p>
          <p>ppanurmuhammad.web.id</p>
        </div>
      </div>
      <div className="footer-bottom">
        2025 Pesantren Nur Muhammad
      </div>
    </footer>
  )
}
'@
Set-Content "src/components/layout/Footer.jsx" $footer -Encoding UTF8

Write-Host "Membuat AppRouter..." -ForegroundColor Cyan

$router = @'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import Home from '../pages/Home'
import Profil from '../pages/Profil'
import UnitSmp from '../pages/unit/UnitSmp'
import UnitMa from '../pages/unit/UnitMa'
import UnitTahfidz from '../pages/unit/UnitTahfidz'
import BeritaList from '../pages/berita/BeritaList'
import BeritaDetail from '../pages/berita/BeritaDetail'
import PpdbPage from '../pages/ppdb/PpdbPage'
import PpdbKonfirmasi from '../pages/ppdb/PpdbKonfirmasi'
import PpdbCek from '../pages/ppdb/PpdbCek'
import Kontak from '../pages/Kontak'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/unit/smp" element={<UnitSmp />} />
          <Route path="/unit/ma" element={<UnitMa />} />
          <Route path="/unit/tahfidz-murni" element={<UnitTahfidz />} />
          <Route path="/berita" element={<BeritaList />} />
          <Route path="/berita/:slug" element={<BeritaDetail />} />
          <Route path="/ppdb" element={<PpdbPage />} />
          <Route path="/ppdb/konfirmasi" element={<PpdbKonfirmasi />} />
          <Route path="/ppdb/cek" element={<PpdbCek />} />
          <Route path="/kontak" element={<Kontak />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
'@
Set-Content "src/routes/AppRouter.jsx" $router -Encoding UTF8

Write-Host "Membuat file API..." -ForegroundColor Cyan

$httpClient = @'
import axios from 'axios'

const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000/api',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
})

export default httpClient
'@
Set-Content "src/api/httpClient.js" $httpClient -Encoding UTF8

$articles = @'
import httpClient from './httpClient'

export const getArticles = (params) => httpClient.get('/articles', { params })
export const getLatestArticles = () => httpClient.get('/articles/latest')
export const getArticleBySlug = (slug) => httpClient.get(`/articles/${slug}`)
'@
Set-Content "src/api/articles.js" $articles -Encoding UTF8

$ppdb = @'
import httpClient from './httpClient'

export const submitPpdb = (data) => httpClient.post('/ppdb', data)
export const checkPpdb = (data) => httpClient.post('/ppdb/check', data)
'@
Set-Content "src/api/ppdb.js" $ppdb -Encoding UTF8

Write-Host "Memperbarui App.jsx dan index.css..." -ForegroundColor Cyan

$appJsx = @'
import AppRouter from './routes/AppRouter'

function App() {
  return <AppRouter />
}

export default App
'@
Set-Content "src/App.jsx" $appJsx -Encoding UTF8

Set-Content "src/index.css" "" -Encoding UTF8
Set-Content ".env" "VITE_API_BASE_URL=http://127.0.0.1:8000/api" -Encoding UTF8

Write-Host ""
Write-Host "Selesai! Semua file berhasil dibuat." -ForegroundColor Green
Write-Host "Jalankan: npm run dev" -ForegroundColor Yellow
