import {LOGIN,LOGOUT} from '../constants/login'
const initialstate='';
export default function login_out(state=initialstate,action){
	console.log('state='+state);
	switch(action.type){
		case LOGIN:{
			return action.username;
		}
		case LOGOUT:{
			return '';
		}
		default:{
			return state;
		}
	}
}

