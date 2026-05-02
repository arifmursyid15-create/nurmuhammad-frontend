import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo">
            <img
              src="https://res.cloudinary.com/dmh5q3yef/image/upload/logo_fnnink.png"
              alt="Logo Pesantren Nur Muhammad"
              style={{ width: '36px', height: '36px', objectFit: 'contain', borderRadius: '50%' }}
            />
            <strong>Pesantren Nur Muhammad</strong>
          </div>
          <p className="footer-tagline">
            Pesantren modern berbasis salaf, membina generasi muslim yang berilmu, berakhlak, dan berdaya saing.
          </p>
          <div className="footer-socials">
            <a href="https://www.instagram.com/pptq_nurmuhammad_official" target="_blank" rel="noreferrer" className="social-btn">
              <i className="fa-brands fa-instagram" />
            </a>
            <a href="#" className="social-btn">
              <i className="fa-brands fa-facebook" />
            </a>
            <a href="https://youtube.com/@pptqnurmuhammadofficial3453" target="_blank" rel="noreferrer" className="social-btn">
              <i className="fa-brands fa-youtube" />
            </a>
            <a href="https://www.tiktok.com/@pptq_nurmuhammad_" target="_blank" rel="noreferrer" className="social-btn">
              <i className="fa-brands fa-tiktok" />
            </a>
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
            <li><Link to="/ppdb">Cek Pendaftaran</Link></li>
            <li><Link to="/kontak">Kontak Panitia</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Kontak</h4>
          <p>📍 C978+P3H, Wonoayu, Dukuh Mojo,<br />Kec. Mojoagung, Jombang 61482</p>
          <p>💬 +62 821-7783-2648</p>
          <p>✉️ info@ppanurmuhammad.web.id</p>
          <p>🌐 ppanurmuhammad.web.id</p>
        </div>
      </div>
      <div className="footer-bottom">
        © 2026 Pesantren Nur Muhammad · ppanurmuhammad.web.id · Dibuat dengan ❤️ untuk pendidikan Islam
      </div>
    </footer>
  )
}