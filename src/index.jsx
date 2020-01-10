import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import configureStore from './store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Login from './ui/components/account/login'

const { store, persistor } = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <div>Root is turned off at the moment, try &quot;/login&quot;</div>
          </Route>
        </Switch>
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
