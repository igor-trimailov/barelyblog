import React from 'react';
import 

function App() {
  const [data, loading] = useFetch('/users/show')

  /*eslint-disable-next-line */
  console.warn(data)

  return (
    <div className="App">
      <div>Status: {data.status}</div>
      <div>Message: {data.message}</div>
      <ul>
        {data.users.map(item => <li key={item.name}>{item.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
