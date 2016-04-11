import React from 'react'
import {render} from 'react-dom'

import {Provider} from 'react-redux'
import App from './containers/App' 
import RouterApp from './containers/RouterApp'
import Login from './containers/Login'
import 	todoApp from './reducers'
import configureStore from './store/configureStore'
//import 'todomvc-app-css/index.css'
import {Router,Route,IndexRoute, Link,browserHistory} from 'react-router'
import routes from './routes'
let initialState=window.__INITIAL_STATE__;
let store = configureStore(initialState);

let rootElement= document.getElementById('root');
render(<Provider store={store}><Router routes={routes} history={browserHistory}></Router></Provider>,
	rootElement
);