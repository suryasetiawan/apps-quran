export const updateToken = (payload: {
  token: string
}): {
  type: string
  payload: { token: string }
} => {
  return {
    type: '@APP/AUTH_DATA/UPDATE/TOKEN',
    payload: payload
  }
}
