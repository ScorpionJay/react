/** index.js */
// require('./app.css')
// import 'antd/dist/antd.css'
import './sass/main.scss'
// import $ from 'jquery'

import React, {Component} from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route,browserHistory } from 'react-router'
import Routers from './routers'
import configureStore from './stores';
const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={Routers} />
  </Provider>,
  document.getElementById('root')
)


