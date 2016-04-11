import React,{Component,PropTypes} from 'react'
import {Link} from 'react-router'


class LoginForm extends Component{
	loginSubmit(username,password){
		if(username=='admin'&&password=='admin'){
			this.props.onLoginSubmit(username,password);
			window.location='/main';

		}else{
			alert('username or password wrong');
			window.location='/';
		}
		
	}
	render(){

		return (
		<div>
			<label>username:</label><input type="text" placeholder="username" ref="userNameValue"/>
			<label>password:</label><input type="password" placeholder="password" ref="password"/>
			<br/>

			<button type="button" onClick={(event)=>{event.preventDefault();this.loginSubmit(this.refs.userNameValue.value,this.refs.password.value)}}>Login</button>{'  '}
			<Link to="/">Return</Link>
		</div>
		);
	}
}

export default LoginForm