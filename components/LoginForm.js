import React,{Component,PropTypes} from 'react'
import {Link} from 'react-router'

const LoginForm =({onLoginSubmit})=>{
	let userNameValue,password;
	return (
		<div>
			<label>username:</label><input type="text" placeholder="username" ref={ node => userNameValue = node }/>
			<label>password:</label><input type="password" placeholder="password" ref={ node => password = node }/>
			<br/>
			<Link to="/main" onClick={()=>{onLoginSubmit(userNameValue.value,password.value)}}>Login</Link>{'  '}
			<Link to="/">Return</Link>
		</div>
	);
};

export default LoginForm