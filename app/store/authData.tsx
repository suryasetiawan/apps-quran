import update from 'immutability-helper'

const initialstate = () => {
  return {
    token: null
  }
}

type Action = {
  type: string
  payload?: any
}

export default (state: any = initialstate(), action: Action) => {
  switch (action.type) {
    case '@APP/AUTH_DATA/UPDATE/TOKEN':
      return update(state, {
        token: { $set: action.payload.token }
      })
    default:
      return state
  }
}
