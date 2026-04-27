import httpClient from './httpClient'

export const getArticles = (params) => httpClient.get('/public/articles', { params })
export const getLatestArticles = () => httpClient.get('/public/articles/latest')
export const getArticleBySlug = (slug) => httpClient.get(`/public/articles/${slug}`)
export const getCategories = () => httpClient.get('/public/articles/categories')