import { Link } from 'react-router-dom'
import useSettings from '../../hooks/useSettings'

export default function Footer() {
  const settings = useSettings()
  const waNumber = settings.site_wa || '6282177832648'
  const instagram = settings.social_instagram || 'https://www.instagram.com/pptq_nurmuhammad_official'
  const facebook = settings.social_facebook || '#'
  const youtube = settings.social_youtube || 'https://youtube.com/@pptqnurmuhammadofficial3453'
  const address = settings.site_address || 'C978+P3H, Wonoayu, Dukuh Mojo, Kec. Mojoagung, Jombang 61482'
  const phone = settings.site_phone || '+62 821-7783-2648'
  const email = settings.site_email || 'info@ppanurmuhammad.web.id'

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
            <a href={instagram} target="_blank" rel="noreferrer" className="social-btn">
              <i className="fa-brands fa-instagram" />
            </a>
            <a href={facebook} target="_blank" rel="noreferrer" className="social-btn">
              <i className="fa-brands fa-facebook" />
            </a>
            <a href={youtube} target="_blank" rel="noreferrer" className="social-btn">
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
          <p>📍 {address}</p>
          <p>💬 <a href={`https://wa.me/${waNumber}`} target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>{phone}</a></p>
          <p>✉️ {email}</p>
          <p>🌐 ppanurmuhammad.web.id</p>
        </div>
      </div>
      <div className="footer-bottom">
        © 2026 Pesantren Nur Muhammad · ppanurmuhammad.web.id · Dibuat dengan ❤️ untuk pendidikan Islam
      </div>
    </footer>
  )
}