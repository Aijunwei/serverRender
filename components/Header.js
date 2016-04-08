import React, { PropTypes, Component } from 'react'
import TodoTextInput from './TodoTextInput'

class Header extends Component{
	handlesave(text){
		if(text.length!==0){
			this.props.addTodo(text);
		}
	}
	render(){
		return (
			<header className="header">
				<h1>Todos</h1>
				<TodoTextInput newTodo placeholder="what needs to be done!" onSave={this.handlesave.bind(this)}/>
			</header>
		)
	}
}
Header.propTypes={
	addTodo:PropTypes.func.isRequired
}
export default Header;