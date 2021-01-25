const debug = process.env.NODE_ENV !== 'production'

export default {
  debug,
  app: 'tt_funny',
  baseUrl: debug ? 'https://app.joy666.cn/api' : 'https://url.production/api',
}
