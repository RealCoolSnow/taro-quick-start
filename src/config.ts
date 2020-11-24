const debug = process.env.NODE_ENV !== 'production'

export default {
  debug,
  baseUrl: debug ? 'https://app.joy666.cn/api' : 'https://url.production/api',
}
