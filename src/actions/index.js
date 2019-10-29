export const ActionTypes = {
  ERROR: 'ERROR',
}

export function error(error) {
  return {
    type: ActionTypes.ERROR,
    payload: { error },
  }
}

export function requestUsers() {
  return {
    type: 'REQUEST_USERS'
  }
}

export function receiveUsers(users) {
  return {
    type: 'RECEIVE_USERS',
    payload: users
  }
}

export function fetchUsers() {
  return function(dispatch) {
    // dispatch an action to initiate loading screens
    dispatch(requestUsers())

    // return fetch('https://stark-brushlands-58685.herokuapp.com/users/show/')
    return fetch('https://sv443.net/jokeapi/category/Programming?blacklistFlags=nsfw')
    
      .then(
        response => response.json(),
        error => console.log('An errro occured', error)
      )
      .then(json => dispatch(receiveUsers(json)))
  }
}
