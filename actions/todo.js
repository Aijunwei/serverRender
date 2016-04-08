import * as types from '../constants/ActionTypes'

export function addTodo(text){
	return {
		type:types.ADD_TODO,
		text :text
	};
}

export function deleteTodo(id){
	return {
		type: types.DELETE_TODO,
		id:id
	};
}

export function editTodo(id,text){
	return {
		type:types.EDIT_TODO,
		text:text,
		id:id
	};
}

export function completeTodo(id){
	return {
		type:types.COMPLETE_TODO,
		id :id
	};
}

export function completeAll(){
	return {
		type: types.COMPLETE_ALL
	};
}

export function clearComplete(){
	return {
		type: types.CLEAR_COMPLETED
	};
}
export function changeToEdit(id){
	return {
		type: types.EDITING,
		id:id
	}
}