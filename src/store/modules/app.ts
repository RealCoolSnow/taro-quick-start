/* eslint-disable no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Taro from '@tarojs/taro'
import { Commit } from 'vuex'
import ActionTypes from '../action-types'
import MutationTypes from '../mutation-types'

const app = {
  state: {
    counter: 0,
    language: Taro.getStorageSync('language') || 'cn',
  },
  mutations: {
    [MutationTypes.APP.SET_LANGUAGE]: (state: any, language: string) => {
      state.language = language
      Taro.setStorageSync('language', language)
    },
    [MutationTypes.APP.SET_COUNTER]: (state: any, n: number) => {
      state.counter += n
    },
  },
  actions: {
    [ActionTypes.APP.SET_LANGUAGE](context: { commit: Commit }, language: string) {
      context.commit(MutationTypes.APP.SET_LANGUAGE, language)
    },
  },
  getters: {

  },
}

export default app
