/* eslint-disable no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Taro from '@tarojs/taro'
import { Commit } from 'vuex'
import ActionTypes from '../action-types'
import MutationTypes from '../mutation-types'

const KEY_LANGUAGE = 'language'
const KEY_SESSION_ID = 'session_id'
const KEY_USER_ID = 'user_id'
const KEY_USER_INFO = 'userinfo'

const app = {
  state: {
    counter: 0,
    language: Taro.getStorageSync(KEY_LANGUAGE) || 'cn',
    sessionId: Taro.getStorageSync(KEY_SESSION_ID) || '',
    userId: Taro.getStorageSync(KEY_USER_ID) || '',
    userInfo: Taro.getStorageSync(KEY_USER_INFO) || false,
  },
  mutations: {
    [MutationTypes.APP.SET_LANGUAGE]: (state: any, language: string) => {
      state.language = language
      Taro.setStorageSync(KEY_LANGUAGE, language)
    },
    [MutationTypes.APP.SET_COUNTER]: (state: any, n: number) => {
      state.counter += n
    },
    [MutationTypes.APP.SET_SESSION_ID]: (state: any, sessionId: string) => {
      state.sessionId = sessionId
      Taro.setStorageSync(KEY_SESSION_ID, sessionId)
    },
    [MutationTypes.APP.SET_USER_ID]: (state: any, userId: string) => {
      state.userId = userId
      Taro.setStorageSync(KEY_USER_ID, userId)
    },
    [MutationTypes.APP.SET_USER_INFO]: (state: any, userInfo: any) => {
      state.userInfo = userInfo
      Taro.setStorageSync(KEY_USER_INFO, userInfo)
    },
  },
  actions: {
    [ActionTypes.APP.SET_LANGUAGE](
      context: { commit: Commit },
      language: string
    ) {
      context.commit(MutationTypes.APP.SET_LANGUAGE, language)
    },
  },
  getters: {},
}

export default app
