import useSettings from '../../hooks/useSettings'

export default function FloatingWA() {
  const settings = useSettings()
  const waNumber = settings.site_wa || '6282177832648'

  return (
    <div className="floating-wa">
      <a href={`https://wa.me/${waNumber}`} target="_blank" rel="noreferrer">
        Hubungi Kami
      </a>
    </div>
  )
}