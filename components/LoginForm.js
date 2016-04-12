import React,{Component,PropTypes} from 'react'
import {Link} from 'react-router'
import fetch from 'isomorphic-fetch'

class LoginForm extends Component{
/*	loginSubmit(username,password){
		var self=this;
		fetch(`/getUser?name=${username}`)
		.then(function(reponse){
			if(reponse.status>=400){
				throw new Error('bad reponse from Server');
			}
			return reponse.json();
		}).then(function(res){
			if(res.user&&res.user.password==password){
				self.props.onLoginSubmit(username);
				window.location='/main';
			}else{
				alert('username or password wrong');
				window.location='/';
			}
		});
		
	}*/
	loginSubmit(username,password){
		this.props.onLoginSubmit(username,password);
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