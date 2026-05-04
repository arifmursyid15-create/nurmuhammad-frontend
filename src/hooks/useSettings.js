import { useState, useEffect } from 'react'
import { getPublicSettings } from '../api/settings'

let cache = null

export default function useSettings() {
  const [settings, setSettings] = useState(cache || {})

  useEffect(() => {
    if (cache) return
    getPublicSettings()
      .then(res => {
        cache = res.data || {}
        setSettings(cache)
      })
      .catch(() => {})
  }, [])

  return settings
}