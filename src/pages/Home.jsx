/**
 * Unit Test: Home.jsx
 * Framework : Jest + React Testing Library
 * Jalankan  : npx jest Home.test.jsx  (atau via `npm test`)
 *
 * Dependensi yang dibutuhkan (jika belum ada):
 *   npm install -D @testing-library/react @testing-library/user-event @testing-library/jest-dom jest-environment-jsdom
 */

import React from 'react'
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom'

import Home from './Home'

// ─── Mock CSS ────────────────────────────────────────────────────────────────
// Mencegah error "Cannot find module '*.css'"
jest.mock('../styles/home.css', () => {}, { virtual: true })

// ─── Mock API modules ─────────────────────────────────────────────────────────
jest.mock('../api/articles', () => ({
  getLatestArticles: jest.fn(),
}))
jest.mock('../api/gallery', () => ({
  getGallery: jest.fn(),
}))
jest.mock('../api/settings', () => ({
  getPublicSettings: jest.fn(),
}))

import { getLatestArticles } from '../api/articles'
import { getGallery }        from '../api/gallery'
import { getPublicSettings } from '../api/settings'

// ─── Fixture data ─────────────────────────────────────────────────────────────
const MOCK_ARTICLES = [
  {
    slug        : 'artikel-1',
    title       : 'Berita Pertama',
    thumbnail   : 'https://example.com/thumb1.jpg',
    published_at: '2026-01-15T00:00:00Z',
    category    : { name: 'Kegiatan' },
  },
  {
    slug      : 'artikel-2',
    title     : 'Berita Kedua',
    thumbnail : null,
    created_at: '2026-02-01T00:00:00Z',
    category  : null,
  },
]

const MOCK_GALLERY = [
  { id: 1, path: 'https://example.com/foto1.jpg', title: 'Foto Kegiatan' },
  { id: 2, path: 'https://example.com/foto2.jpg', title: 'Foto Upacara' },
  { id: 3, path: null,                            title: 'Foto Tanpa Path' },
]

const MOCK_SETTINGS = {
  slide_1_bg      : 'https://example.com/bg1.jpg',
  slide_1_img     : 'https://example.com/img1.jpg',
  pengasuh_nama   : 'KH. Test Pengasuh',
  pengasuh_jabatan: 'Ketua Yayasan Test',
}

// ─── Helper ───────────────────────────────────────────────────────────────────
/** Render Home di dalam MemoryRouter (diperlukan karena ada <Link>) */
const renderHome = () =>
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  )

/** Reset semua mock sebelum setiap test */
beforeEach(() => {
  jest.useFakeTimers()

  getLatestArticles.mockResolvedValue({ data: MOCK_ARTICLES })
  getGallery.mockResolvedValue({ data: MOCK_GALLERY })
  getPublicSettings.mockResolvedValue({ data: MOCK_SETTINGS })
})

afterEach(() => {
  jest.runOnlyPendingTimers()
  jest.useRealTimers()
  jest.clearAllMocks()
})

// ─────────────────────────────────────────────────────────────────────────────
// 1. RENDER & FETCH
// ─────────────────────────────────────────────────────────────────────────────
describe('Render awal & data fetching', () => {
  test('komponen render tanpa crash', async () => {
    await act(async () => { renderHome() })
    // Jika tidak crash, test ini lulus
  })

  test('memanggil ketiga API saat mount', async () => {
    await act(async () => { renderHome() })
    expect(getLatestArticles).toHaveBeenCalledTimes(1)
    expect(getGallery).toHaveBeenCalledTimes(1)
    expect(getPublicSettings).toHaveBeenCalledTimes(1)
  })

  test('menampilkan artikel setelah fetch berhasil', async () => {
    await act(async () => { renderHome() })
    await waitFor(() => {
      expect(screen.getByText('Berita Pertama')).toBeInTheDocument()
      expect(screen.getByText('Berita Kedua')).toBeInTheDocument()
    })
  })

  test('menampilkan galeri foto setelah fetch berhasil', async () => {
    await act(async () => { renderHome() })
    await waitFor(() => {
      expect(screen.getByText('Foto Kegiatan')).toBeInTheDocument()
      expect(screen.getByText('Foto Upacara')).toBeInTheDocument()
    })
  })
})

// ─────────────────────────────────────────────────────────────────────────────
// 2. SLIDER — Navigasi manual
// ─────────────────────────────────────────────────────────────────────────────
describe('Hero slider — navigasi manual', () => {
  test('slide pertama aktif saat pertama kali render', async () => {
    await act(async () => { renderHome() })
    // Slide pertama berisi teks tag-nya
    expect(screen.getByText('Pesantren Modern Berbasis Salaf')).toBeInTheDocument()
  })

  test('tombol › memindah ke slide berikutnya', async () => {
    await act(async () => { renderHome() })

    const nextBtn = screen.getByText('›')
    await act(async () => { fireEvent.click(nextBtn) })

    expect(screen.getByText("Program Tahfidz Al-Qur'an")).toBeInTheDocument()
  })

  test('tombol ‹ dari slide pertama memutar ke slide terakhir', async () => {
    await act(async () => { renderHome() })

    const prevBtn = screen.getByText('‹')
    await act(async () => { fireEvent.click(prevBtn) })

    expect(screen.getByText('PPDB 2026/2027 Dibuka')).toBeInTheDocument()
  })

  test('klik dot kedua langsung pindah ke slide kedua', async () => {
    await act(async () => { renderHome() })

    // Ambil semua dot, klik yang ke-2 (index 1)
    const dots = screen.getAllByRole('button', { name: '' })
    const slideDots = dots.filter(btn =>
      btn.className.includes('hero-dot')
    )

    await act(async () => { fireEvent.click(slideDots[1]) })
    expect(screen.getByText("Program Tahfidz Al-Qur'an")).toBeInTheDocument()
  })

  test('slide ke-3 lalu › memutar kembali ke slide ke-1', async () => {
    await act(async () => { renderHome() })

    const nextBtn = screen.getByText('›')
    // Maju 3 kali → kembali ke slide 1
    await act(async () => {
      fireEvent.click(nextBtn)
      fireEvent.click(nextBtn)
      fireEvent.click(nextBtn)
    })

    expect(screen.getByText('Pesantren Modern Berbasis Salaf')).toBeInTheDocument()
  })
})

// ─────────────────────────────────────────────────────────────────────────────
// 3. SLIDER — Auto-advance (timer)
// ─────────────────────────────────────────────────────────────────────────────
describe('Hero slider — auto-advance timer', () => {
  /**
   * ⚠️  CATATAN BUG: Kode asli mereferensikan `SLIDES` (huruf besar) di dalam
   *  useEffect kedua, padahal variabel yang benar adalah `slides` (huruf kecil).
   *  Akibatnya ReferenceError akan dilempar saat useEffect berjalan.
   *  Test di bawah mendokumentasikan perilaku yang DIHARAPKAN setelah bug diperbaiki.
   *  Tandai test ini sebagai .todo atau .skip hingga bug diperbaiki.
   */
  test.todo('auto-advance: slide berganti setiap 5500ms — aktifkan setelah bug SLIDES diperbaiki')

  /*
   * Contoh implementasi test jika bug sudah diperbaiki:
   *
   * test('slide berganti otomatis setiap 5500ms', async () => {
   *   await act(async () => { renderHome() })
   *   expect(screen.getByText('Pesantren Modern Berbasis Salaf')).toBeInTheDocument()
   *
   *   act(() => { jest.advanceTimersByTime(5500) })
   *   expect(screen.getByText("Program Tahfidz Al-Qur'an")).toBeInTheDocument()
   *
   *   act(() => { jest.advanceTimersByTime(5500) })
   *   expect(screen.getByText('PPDB 2026/2027 Dibuka')).toBeInTheDocument()
   * })
   *
   * test('timer dibersihkan saat komponen di-unmount (tidak memory leak)', async () => {
   *   const { unmount } = await act(async () => renderHome())
   *   const clearSpy = jest.spyOn(global, 'clearInterval')
   *   unmount()
   *   expect(clearSpy).toHaveBeenCalled()
   * })
   */
})

// ─────────────────────────────────────────────────────────────────────────────
// 4. CONDITIONAL RENDERING — State kosong
// ─────────────────────────────────────────────────────────────────────────────
describe('Conditional rendering saat data kosong', () => {
  test('menampilkan placeholder galeri jika galeri kosong', async () => {
    getGallery.mockResolvedValue({ data: [] })

    await act(async () => { renderHome() })
    await waitFor(() => {
      expect(screen.getByText('Kegiatan Pembelajaran')).toBeInTheDocument()
      expect(screen.getByText('Upacara & Haflah')).toBeInTheDocument()
    })
  })

  test('menampilkan pesan "Belum ada artikel" jika berita kosong', async () => {
    getLatestArticles.mockResolvedValue({ data: [] })

    await act(async () => { renderHome() })
    await waitFor(() => {
      expect(screen.getByText('Belum ada artikel.')).toBeInTheDocument()
    })
  })

  test('galeri hanya menampilkan maks 5 foto', async () => {
    const banyakFoto = Array.from({ length: 10 }, (_, i) => ({
      id   : i,
      path : `https://example.com/foto${i}.jpg`,
      title: `Foto ${i}`,
    }))
    getGallery.mockResolvedValue({ data: banyakFoto })

    await act(async () => { renderHome() })
    await waitFor(() => {
      // Hanya foto ke-0 sampai ke-4 yang muncul
      expect(screen.getByText('Foto 0')).toBeInTheDocument()
      expect(screen.getByText('Foto 4')).toBeInTheDocument()
      expect(screen.queryByText('Foto 5')).not.toBeInTheDocument()
    })
  })
})

// ─────────────────────────────────────────────────────────────────────────────
// 5. CONDITIONAL RENDERING — Data dari settings
// ─────────────────────────────────────────────────────────────────────────────
describe('Data dari settings API', () => {
  test('menampilkan nama pengasuh dari settings jika tersedia', async () => {
    await act(async () => { renderHome() })
    await waitFor(() => {
      // Nama muncul 2x (profile card + ky-attribution)
      const els = screen.getAllByText('KH. Test Pengasuh')
      expect(els.length).toBeGreaterThanOrEqual(1)
    })
  })

  test('fallback ke nama default jika settings kosong', async () => {
    getPublicSettings.mockResolvedValue({ data: {} })

    await act(async () => { renderHome() })
    await waitFor(() => {
      expect(
        screen.getAllByText('Kyai Agus Kamaludin Ismail Al-Hafidz').length
      ).toBeGreaterThanOrEqual(1)
    })
  })
})

// ─────────────────────────────────────────────────────────────────────────────
// 6. ARTICLE CARD — Edge case field opsional
// ─────────────────────────────────────────────────────────────────────────────
describe('Artikel card — edge case field opsional', () => {
  test('artikel tanpa thumbnail menampilkan emoji 📰', async () => {
    getLatestArticles.mockResolvedValue({
      data: [{ slug: 'no-thumb', title: 'Artikel Tanpa Thumbnail', thumbnail: null, created_at: '2026-01-01T00:00:00Z' }],
    })

    await act(async () => { renderHome() })
    await waitFor(() => {
      expect(screen.getByText('📰')).toBeInTheDocument()
    })
  })

  test('artikel tanpa category menampilkan fallback "Artikel"', async () => {
    getLatestArticles.mockResolvedValue({
      data: [{ slug: 'no-cat', title: 'Artikel Tanpa Kategori', category: null, created_at: '2026-01-01T00:00:00Z' }],
    })

    await act(async () => { renderHome() })
    await waitFor(() => {
      expect(screen.getByText('Artikel')).toBeInTheDocument()
    })
  })

  test('artikel dengan published_at menampilkan tanggal publish', async () => {
    await act(async () => { renderHome() })
    await waitFor(() => {
      // "15 Jan 2026" dalam format id-ID
      expect(screen.getByText(/15 Jan 2026/i)).toBeInTheDocument()
    })
  })
})

// ─────────────────────────────────────────────────────────────────────────────
// 7. ERROR HANDLING — API gagal
// ─────────────────────────────────────────────────────────────────────────────
describe('Error handling — API gagal', () => {
  test('komponen tetap render jika semua API reject', async () => {
    getLatestArticles.mockRejectedValue(new Error('Network error'))
    getGallery.mockRejectedValue(new Error('Network error'))
    getPublicSettings.mockRejectedValue(new Error('Network error'))

    await act(async () => { renderHome() })

    // Komponen tidak crash; fallback state kosong ditampilkan
    await waitFor(() => {
      expect(screen.getByText('Belum ada artikel.')).toBeInTheDocument()
    })
  })

  test('galeri placeholder muncul jika API galeri reject', async () => {
    getGallery.mockRejectedValue(new Error('Timeout'))

    await act(async () => { renderHome() })
    await waitFor(() => {
      expect(screen.getByText('Kegiatan Pembelajaran')).toBeInTheDocument()
    })
  })
})

// ─────────────────────────────────────────────────────────────────────────────
// 8. KONTEN STATIS — Selalu tampil
// ─────────────────────────────────────────────────────────────────────────────
describe('Konten statis selalu tampil', () => {
  test('stats bar menampilkan semua angka statistik', async () => {
    await act(async () => { renderHome() })
    expect(screen.getByText('500+')).toBeInTheDocument()
    expect(screen.getByText('Santri Aktif')).toBeInTheDocument()
    expect(screen.getByText('98%')).toBeInTheDocument()
  })

  test('tiga unit pendidikan ditampilkan', async () => {
    await act(async () => { renderHome() })
    expect(screen.getByText('SMP Nur Muhammad')).toBeInTheDocument()
    expect(screen.getByText('MA Nur Muhammad')).toBeInTheDocument()
    expect(screen.getByText('Tahfidz Murni')).toBeInTheDocument()
  })

  test('semua program PPDB berstatus "Buka"', async () => {
    await act(async () => { renderHome() })
    const bukaItems = screen.getAllByText(/— Buka/)
    expect(bukaItems).toHaveLength(3)
  })

  test('semua enam keunggulan ditampilkan', async () => {
    await act(async () => { renderHome() })
    expect(screen.getByText('Lingkungan Islami')).toBeInTheDocument()
    expect(screen.getByText('Pengajar Berkualitas')).toBeInTheDocument()
    expect(screen.getByText('Asrama Nyaman')).toBeInTheDocument()
    expect(screen.getByText('Kurikulum Terpadu')).toBeInTheDocument()
    expect(screen.getByText('Pembinaan Karakter')).toBeInTheDocument()
    expect(screen.getByText('Prestasi Akademik')).toBeInTheDocument()
  })
})

// ─────────────────────────────────────────────────────────────────────────────
// 9. GALERI — Edge case path null
// ─────────────────────────────────────────────────────────────────────────────
describe('Galeri — edge case foto tanpa path', () => {
  test('foto dengan path null tidak merender tag <img>', async () => {
    getGallery.mockResolvedValue({
      data: [{ id: 99, path: null, title: 'Foto Rusak' }],
    })

    await act(async () => { renderHome() })
    await waitFor(() => {
      expect(screen.getByText('Foto Rusak')).toBeInTheDocument()
    })

    // Tidak boleh ada img dengan src null / "null"
    const images = screen.queryAllByRole('img')
    const nullImgs = images.filter(img => !img.getAttribute('src') || img.getAttribute('src') === 'null')
    expect(nullImgs).toHaveLength(0)
  })
})