import { restApiCall } from './utils'

export const ActionTypes = {
  ERROR: 'ERROR',
}

export function error(error) {
  return {
    type: ActionTypes.ERROR,
    payload: error,
  }
}

export function requestPosts() {
  return {
    type: 'REQUEST_POSTS',
  }
}

export function receivePosts(posts) {
  return {
    type: 'RECEIVE_POSTS',
    payload: posts,
  }
}

export function requestAuth() {
  return {
    type: 'REQUEST_AUTH',
  }
}

export function receiveAuth(json) {
  return {
    type: 'RECEIVE_AUTH',
    payload: json.data,
  }
}

export function logout() {
  return {
    type: 'REVOKE_AUTH',
  }
}

// fetch posts
export function fetchPosts(postId) {
  return function(dispatch) {
    const url = '/posts/'
    const options = {
      ...(postId && { body: { postId } }),
    }

    return restApiCall(dispatch, url, receivePosts, options)
  }
}

// authenticate an existing user
export function fetchAuth(data) {
  return function(dispatch) {
    const url = '/users/authenticate/'
    const options = {
      method: 'POST',
      body: new URLSearchParams(data),
    }

    return restApiCall(dispatch, url, receiveAuth, options)
  }
}
