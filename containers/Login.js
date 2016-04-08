import React ,{Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import LoginForm from '../components/LoginForm'
import {connect} from 'react-redux'
import * as actions from '../actions/login'

class Login extends Component{
	render(){
		return (
			<LoginForm onLoginSubmit={this.props.actions.login}/>
		)
	}
}
Login.propTypes={
	actions:PropTypes.object.isRequired
}
function mapStateToProps(state){
	return {
		username:state.login
	}
}
function mapActionsToProps(dispatch){
	return {
		actions:bindActionCreators(actions,dispatch)
	}
}
export default connect(mapStateToProps,mapActionsToProps)(Login);