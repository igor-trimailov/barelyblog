// reducer that will store user information
// should be persisted
function user(state = {}, action) {
  switch (action.type) {
    case 'RECEIVE_AUTH': {
      return {
        ...action.payload,
      }
    }

    case 'REVOKE_AUTH': {
      return {}
    }

    case 'REFRESH_AUTH': {
      // should this be in the middleware?
      const { token, expiry } = action.payload

      return {
        ...state,
        token,
        expiry,
      }
    }

    default:
      return state
  }
}

export default user
