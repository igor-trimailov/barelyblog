import React from 'react'
import { useFetch } from './hooks'

function App() {
  const [data, loading] = useFetch(
    'https://stark-brushlands-58685.herokuapp.com/users/show/',
  )

  if (loading) {
    return <div>Loading...</div>
  }

  if (!data) {
    return <div>No data</div>
  }

  return (
    <div className="App">
      <div>Status: {data.status}</div>
      <div>Message: {data.message}</div>
      <ul>
        {data.data.users.map(item => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
