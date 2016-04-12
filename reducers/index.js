import {combineReducers} from 'redux'
import todos from './todos'
import filter from './visibilityFilter'
import login_out from './login'
//console.log({todos,filter,login_out});
const Reducers =combineReducers({todos,filter,login_out});

export default Reducers;