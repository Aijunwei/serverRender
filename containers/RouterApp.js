import React,{Component} from 'react'
import {Link} from 'react-router'


/*const RouterApp=({children})=>(
	<div>
		<h1>welcome</h1>
		{children}
	</div>
);*/
class RouterApp extends Component{
	render(){
		console.log(this.props.children);
		return (
		<div>
		<h1>welcome</h1>
		<Link to="/login">Login</Link>
		{this.props.children}
		</div>	
		);
	}
}
export default RouterApp;