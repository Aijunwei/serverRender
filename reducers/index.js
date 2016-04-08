import {combineReducers} from 'redux'
import todos from './todos'
import filter from './visibilityFilter'
import login from './login'

const Reducers =combineReducers({todos,filter,login});

export default Reducers;