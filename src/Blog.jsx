/** @jsx jsx */
import { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { jsx, css, Global } from '@emotion/core'
import { fetchUsers } from './actions'
import TopNavigation from './ui/components/TopNavigation'

function Blog() {
  const counter = useSelector(state => state.counter)
  const appState = useSelector(state => state.appState)
  const users = useSelector(state => state.users)

  console.log(users)

  const dispatch = useDispatch()

  const incrementCounter = useCallback(() => dispatch({ type: 'ADD' }), [
    dispatch,
  ])

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  if (appState.loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <Global
        styles={css`
          @font-face {
            font-family: 'icomoon';
            src: url('fonts/icomoon.eot');
            src: url('fonts/icomoon.eot?#iefix') format('embedded-opentype'),
              url('fonts/icomoon.woff') format('woff'),
              url('fonts/icomoon.ttf') format('truetype'),
              url('fonts/icomoon.svg#icomoon') format('svg');
            font-weight: normal;
            font-style: normal;
          }
        `}
      />
      <TopNavigation />
      <div>Counter: {counter}</div>
      <button onClick={incrementCounter}>Add</button>
    </div>
  )
}

export default Blog
