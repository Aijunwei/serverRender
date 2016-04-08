import configureStore from './store/configureStore'
import {RouterContext} from 'react-router'

const ServerRender=({props})=>{
	let store = configureStore();
	return (
	<Provider store={store}>
		<RouterContext {...props}/>
	</Provider>
	)
}
export default ServerRender