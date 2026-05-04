import httpClient from './httpClient'

// Public
export const getGallery = (params) => 
  httpClient.get('/public/gallery', { params })

// Admin
export const getAdminGallery = () => 
  httpClient.get('/admin/gallery')

export const uploadGallery = (formData) => 
  httpClient.post('/admin/gallery', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  })

export const updateGallery = (id, data) => 
  httpClient.patch(`/admin/gallery/${id}`, data)

export const deleteGallery = (id) => 
  httpClient.delete(`/admin/gallery/${id}`)