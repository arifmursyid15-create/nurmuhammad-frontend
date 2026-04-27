import httpClient from './httpClient'

// Auth
export const login = (data) => httpClient.post('/auth/login', data)
export const logout = () => httpClient.post('/auth/logout')
export const getMe = () => httpClient.get('/auth/me')

// Dashboard
export const getDashboard = () => httpClient.get('/admin/dashboard')

// PPDB
export const getPpdbList = (params) => httpClient.get('/admin/ppdb', { params })
export const getPpdbDetail = (id) => httpClient.get(`/admin/ppdb/${id}`)
export const updatePpdbStatus = (id, data) => httpClient.patch(`/admin/ppdb/${id}/status`, data)
export const deletePpdb = (id) => httpClient.delete(`/admin/ppdb/${id}`)

// Articles
export const getAdminArticles = (params) => httpClient.get('/admin/articles', { params })
export const createArticle = (data) => httpClient.post('/admin/articles', data)
export const updateArticle = (id, data) => httpClient.put(`/admin/articles/${id}`, data)
export const deleteArticle = (id) => httpClient.delete(`/admin/articles/${id}`)

// Settings
export const getAdminSettings = () => httpClient.get('/admin/settings')
export const updateSettings = (data) => httpClient.post('/admin/settings', { settings: data })