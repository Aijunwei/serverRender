import React,{Component,PropTypes} from 'react'
import {Link} from 'react-router'
require('es6-promise').polyfill()
require('isomorphic-fetch')
//import fetch from 'isomorphic-fetch'

class LoginForm extends Component{
	loginSubmit(username,password){
		this.props.onLoginSubmit(username,password);
/*		fetch(`/doLogin?name=${username}&password=${password}`)
		.then(response => response.json())
		.then(json => {
			if(json.status==='OK'){
				console.log('OK');
			}else{
				alert(json.des);
				window.location='/';
			}
		});*/
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