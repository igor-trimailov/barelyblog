import { combineReducers } from 'redux'
import { ActionTypes } from '../actions'

function counter(state = 0, action) {
  switch (action.type) {
    case 'ADD':
      return state + 1

    default:
      return state
  }
}

function appState(
  state = {
    loading: false,
  },
  action
) {
  switch (action.type) {
    case 'REQUEST_USERS':
      return {
        ...state,
        loading: true,
      }
    case 'RECEIVE_USERS':
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}

function users(state = [], action) {
  console.warn(action.payload)
  switch (action.type) {
    case 'REQUEST_USERS':
      return []
    case 'RECEIVE_USERS':
      return [action.payloed]
    default:
      return state
  }
}

function errors(state = [], action) {
  switch (action.type) {
    case ActionTypes.ERROR:
      return [...state, action.payload]

    default:
      return state
  }
}

export default combineReducers({ counter, appState, users, errors })
