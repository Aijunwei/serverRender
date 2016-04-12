import {createStore,applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers'
const createStoreWidthMiddleware=applyMiddleware(thunkMiddleware)(createStore);

export default function configureStore(initialState){

	const store= createStoreWidthMiddleware(rootReducer,initialState);
	if(module.hot){
	  module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
   	  });
	}
	return store;
}