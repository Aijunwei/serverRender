import { ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED,EDITING } from '../constants/ActionTypes'
const initialState=[{
	id:0,
	completed:false,
	text:'Use Redux',
	editing:false
}];

export default function todos(state=initialState,action){
	switch (action.type){
		case ADD_TODO:{
			return [
				{
					id:state.reduce((maxId,todo)=>Math.max(maxId,todo.id),-1)+1,
					completed:false,
					text:action.text
				},
				...state
			];
		}
		case DELETE_TODO:{
			return state.filter(todo => todo.id!==action.id);
		}
		case EDIT_TODO:{
			return state.map(todo =>
				todo.id===action.id ? Object.assign({},todo,{text:action.text}) :todo
			);
		}
		case COMPLETE_TODO:{
			return state.map(todo=>
				todo.id===action.id ? Object.assign({},todo,{completed:!todo.completed}):todo
			);
		}
		case COMPLETE_ALL:{
			let allMarked=state.every(todo=>todo.completed);
			return state.map(todo=>Object.assign({},todo,{
				completed:!allMarked
			}));
		}
		case CLEAR_COMPLETED:{
			return state.filter(todo=>todo.completed===false);
		}
		case EDITING:
		//console.log(action);
			return state.map(todo => todo.id===action.id ? Object.assign({},todo,{editing:!todo.editing}):todo);
		default :{
			return state;
		}
	}
}