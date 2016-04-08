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
let store = configureStore();

let rootElement= document.getElementById('root');
render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={RouterApp}>

				<Route path="/main" component={App}/>
				<Route path="/login" component={Login}/>
			</Route>

		</Router>
	</Provider>,
	rootElement
);