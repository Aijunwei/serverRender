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
		return fetch(`/doLogin?name=${username}&password=${password}`,{credentials: 'same-origin'})
		.then(response => response.json())
		.then(json => {
			if(json.status==='OK'){
				dispatch(login(username));
				window.location='/main';
			}else{
				alert(json.des);
				window.location='/';
			}
		});
	/*	$.get(`/doLogin?name=${username}&password=${password}`,function(data){
			data=JSON.parse(data);
			if(data.status=='OK'){
				dispatch(login(username));
				window.location='/main';
			}else{
				alert(data.des);
				window.location='/';				
			}
		})*/
  }
}