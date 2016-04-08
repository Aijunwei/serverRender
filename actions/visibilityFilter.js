import {SET_VISIBILITY_FILTER} from '../constants/ActionTypes'

export function setVisibilityFilter(filter){
	return {
		type:SET_VISIBILITY_FILTER,
		filter
	}
}