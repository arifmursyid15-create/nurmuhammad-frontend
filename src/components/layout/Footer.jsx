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
