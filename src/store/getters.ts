const getters = {
  counter: (state: any) => state.app.counter,
  language: (state: any) => state.app.language,
  sessionId: (state: any) => state.app.sessionId,
  userId: (state: any) => state.app.userId,
  userInfo: (state: any) => state.app.userInfo,
}
export default getters
