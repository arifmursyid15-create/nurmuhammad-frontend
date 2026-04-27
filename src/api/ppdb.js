import httpClient from './httpClient'

export const submitPpdb = (data) => httpClient.post('/public/ppdb', data)
export const checkPpdb = (data) => httpClient.post('/public/ppdb/check', data)