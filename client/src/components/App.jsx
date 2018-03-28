import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import store from '../store.js';
import Dashboard from './Dashboard.jsx';
import Login from './Login/Login.jsx';

const history = syncHistoryWithStore(createBrowserHistory(), store);

class App extends Component {
  componentWillMount() {
    // starting actions can be invoked here
    // this.props.dispatch(fetchUsers());
  }

  render() {
    if (!localStorage.authToken) {
      return (
        <Provider store={store}>
          <Router history={history}>
            <Login />
          </Router>
        </Provider>
      );
    }
    else {
      return (
        <Provider store={store}>
          <Router history={history}>
            <Dashboard />
          </Router>
        </Provider>
      );
    }
  }
}

export default App;
