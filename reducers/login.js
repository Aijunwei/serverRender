import {LOGIN,LOGOUT} from '../constants/login'
const initialstate='';
export default function login_out(state=initialstate,action){
	switch(action.type){
		case LOGIN:{
			return login(action.username,action.password);
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
		return '';
		alert('用户名或密码错误！');

	}
}