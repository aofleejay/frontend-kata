import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './assets/styles/tailwind.build.css' // FIXME: Remove unused css to reduce file size.
import './index.css'
import Layout from './Layout'
import Dribble from './dribble-clone'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <p className="capitalize text-center mt-8">
              select project on sidebar.
            </p>
          </Route>
          <Route path="/dribble-clone">
            <Dribble />
          </Route>
        </Switch>
      </Layout>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
