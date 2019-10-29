import React, { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {fetchUsers} from './actions'

function Blog() {
  const counter = useSelector(state => state.counter)
  const appState = useSelector(state => state.appState)
  const users = useSelector(state => state.users)

  console.log(users)

  const dispatch = useDispatch()

  const incrementCounter = useCallback(
    () => dispatch({type: 'ADD'}),
    [dispatch]
  )

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  if(appState.loading) {
    return <div>Loading...</div>
  }

  return (<div>
    <div>Counter: {counter}</div>
    <button onClick={incrementCounter}>Add</button>
  </div>)
}

export default Blog
