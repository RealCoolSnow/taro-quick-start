// module 'app'
enum APP_MutationTypes {
  SET_COUNTER = 'SET_COUNTER',
  SET_LANGUAGE = 'SET_LANGUAGE',
  SET_SESSION_ID = 'SET_SESSION_ID',
  SET_USER_ID = 'SET_USER_ID',
  SET_USER_INFO = 'SET_USER_INFO',
}

class MutationTypes {
  static APP = APP_MutationTypes
}

export default MutationTypes
