import * as types from '../constants/login'

export function login(username,password){

	return {
		type:types.LOGIN,
		username,
		password
	}
}

export function logout(username){
	return {
		type:types.LOGOUT,
		username
	}
}