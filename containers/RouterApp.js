import React,{Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'


/*const RouterApp=({children})=>(
	<div>
		<h1>welcome</h1>
		{children}
	</div>
);*/
class RouterApp extends Component{
	render(){
		//console.log(this.props.children);
		return (
		<div>
		<h1>welcome</h1>
		{this.props.login?<Link to="/login">Login</Link>:<Link to="/login">Logout</Link>}
		{this.props.children}
		</div>	
		);
	}
}
function mapStateToProps(state){
	//console.log(!!state.login_out);
	return {
		login: !state.login_out
	}
}
export default connect(mapStateToProps)(RouterApp);