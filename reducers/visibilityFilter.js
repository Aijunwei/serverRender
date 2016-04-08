import {SHOW_ALL,SHOW_COMPLETED,SHOW_ACTIVE} from '../constants/TodoFilters'
import {SET_VISIBILITY_FILTER} from '../constants/ActionTypes'
const initialState=
	SHOW_ALL;

export default function visibilityFilter(state=initialState,action){
	switch(action.type){
		case SET_VISIBILITY_FILTER:
			return action.filter;
		default:
		return state;
	}
}