import {LOGIN,LOGOUT} from '../constants/login'
const initialstate='';
export default function login_out(state=initialstate,action){
	console.log('state='+state);
	switch(action.type){
		case LOGIN:{
			return action.username
		}
		case LOGOUT:{
			return '';
		}
		default:{
			return state;
		}
	}
}

function login(username,password){
	if(username=='admin'&&password=='admin'){
		return username;
	}else{
		alert('用户名或密码错误！');
		return '';
	}
}