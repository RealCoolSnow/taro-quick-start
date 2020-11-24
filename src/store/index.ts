import { createLogger, createStore } from 'vuex'
import config from '../config'
import app from './modules/app'
import getters from './getters'

export default createStore({
  modules: { app },
  getters,
  strict: config.debug,
  plugins: config.debug ? [createLogger()] : [],
})
