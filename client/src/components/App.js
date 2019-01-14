import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom' 
import store from '../store'

import Home from './Home'
import Going from './Going'
import NotGoing from './NotGoing'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/going" component={Going} />
            <Route path="/notgoing" component={NotGoing} />
            
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
