import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './assets/styles/tailwind.build.css' // FIXME: Remove unused css to reduce file size.
import './index.css'
import * as serviceWorker from './serviceWorker'
import Home from './Home'
import Dribble from './dribble-clone'
import SocialProofSection from './social-proof-section-challenge'
import AnimationGallery from './animation-gallery'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/dribble-clone">
          <Dribble />
        </Route>
        <Route path="/social-proof-section-challenge">
          <SocialProofSection />
        </Route>
        <Route path="/animation-kata">
          <AnimationGallery />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
