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
import Kontak from '../pages/Kontak'
import Galeri from '../pages/Galeri'

// Admin
import AdminLogin from '../pages/admin/AdminLogin'
import AdminLayout from '../components/admin/AdminLayout'
import AdminDashboard from '../pages/admin/AdminDashboard'
import AdminPpdb from '../pages/admin/AdminPpdb'
import AdminBerita from '../pages/admin/AdminBerita'
import AdminPengaturan from '../pages/admin/AdminPengaturan'
import RequireAuth from '../components/admin/RequireAuth'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/unit/smp" element={<UnitSmp />} />
          <Route path="/unit/ma" element={<UnitMa />} />
          <Route path="/unit/tahfidz-murni" element={<UnitTahfidz />} />
          <Route path="/berita" element={<BeritaList />} />
          <Route path="/berita/:slug" element={<BeritaDetail />} />
          <Route path="/ppdb" element={<PpdbPage />} />
          <Route path="/kontak" element={<Kontak />} />
          <Route path="/galeri" element={<Galeri />} />
        </Route>

        {/* Admin Login */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Admin Panel (protected) */}
        <Route element={<RequireAuth />}>
          <Route element={<AdminLayout />}>
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/ppdb" element={<AdminPpdb />} />
            <Route path="/admin/berita" element={<AdminBerita />} />
            <Route path="/admin/pengaturan" element={<AdminPengaturan />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}