import * as types from '../constants/login'

export function login(username){

	return {
		type:types.LOGIN,
		username
	}
}

export function logout(username){
	return {
		type:types.LOGOUT,
		username
	}
}
export function loginAsync(username,password){
	return dispatch => {
		return fetch(`/doLogin?name=${username}&password=${password}`)
		.then(response => response.json())
		.then(json => {
			if(json.status==='OK'){
				window.location='/main';
			}else{
				alert(json.des);
				window.location='/';
			}
		});
  }
}