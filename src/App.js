import React, {Component} from 'react';
import AppContainer from './Routes/AppNav.js';
import store from './Publics/Redux/store';
import {Provider} from 'react-redux';
// import dotenv from 'dotenv';
// dotenv.config();
// require('dotenv').config();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
export default App;
