import React from 'react'
import { useFetch } from './hooks'

function App() {
  const [data, loading] = useFetch(
    'https://stark-brushlands-58685.herokuapp.com/users/show/'
  )

  /*eslint-disable-next-line */
  console.warn(data)

  return (
    <div className="App">
      {loading ? (
        'Loading...'
      ) : (
        <div>
          <div>Status: {data.status}</div>
          <div>Message: {data.message}</div>
          <ul>
            {data.users.map(item => (
              <li key={item.name}>{item.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default App
