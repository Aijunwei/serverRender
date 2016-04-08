import App from './containers/App'
import Login from './containers/Login'
import RouterApp from './containers/RouterApp'

const routes={
	path:'/',
	component:RouterApp,
	childRoutes:[
	{
		path:'/login',
		component:Login
	},{
		path:'/main',
		component:App
	}
	]
}

export default routes