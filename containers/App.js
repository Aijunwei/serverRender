import React ,{Component, PropTypes} from 'react'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import * as TodoActions from '../actions/todo'
import * as VisibilityActions from '../actions/visibilityFilter'
import Header from '../components/Header' 
import MainSection from '../components/MainSection'
const Actions=Object.assign(TodoActions,VisibilityActions);
class App extends Component{
	render(){
		const {todos,actions,filter} =this.props;
		//console.log(actions);
		return <div>
			<Header addTodo={actions.addTodo}/>
			<MainSection filter={filter} todos={todos} actions={actions}/>
		</div>;
	}
}

App.propTypes={
	todos:PropTypes.array.isRequired,
	filter:PropTypes.string.isRequired,
	actions:PropTypes.object.isRequired
}

function mapStateToProps(state){
//	console.log(state);
	return {
		todos:state.todos,
		filter:state.filter
	};
}

function mapDispatchToProps(dispatch){
	return {
		actions:bindActionCreators(Actions,dispatch)
	};
}

export default
		connect(mapStateToProps,mapDispatchToProps)(App)