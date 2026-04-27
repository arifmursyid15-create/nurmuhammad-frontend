import httpClient from './httpClient'

export const getPublicSettings = () => httpClient.get('/public/settings')