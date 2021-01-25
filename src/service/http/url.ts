import store from '../../store'
import config from '../../config'

const fullUrlWithBase = (
  baseUrl: string,
  url: string,
  params?: { [key: string]: any }
) => {
  let a = `${baseUrl}/${url}`
  if (!a.includes('?')) a += '?'
  a += `app=${config.app}&lang=${store.getters.language}&uid=${store.getters.userId}&session_id=${store.getters.sessionId}`
  if (params) {
    Object.keys(params).forEach((key, index) => {
      a += `&${key}=${params[key]}`
    })
  }
  a += `&_=${new Date().valueOf()}`
  return a
}

const fullUrl = (url: string, params?: { [key: string]: any }) => {
  return fullUrlWithBase(config.baseUrl, url, params)
}

export { fullUrlWithBase, fullUrl }
