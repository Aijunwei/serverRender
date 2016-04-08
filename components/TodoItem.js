import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import TodoTextInput from './TodoTextInput'


class TodoItem extends Component {
  constructor(props, context) {
    super(props, context)
  }
  handleSave(id,text){
   if (text.length === 0) {
    this.props.deleteTodo(id)
  } else {
    this.props.editTodo(id, text)
  }
    this.props.changeToEdit(id);
  }
  handleDoubleClick(id) {
    this.props.changeToEdit(id);
  }
  render(){
  	const { todo, completeTodo, deleteTodo } = this.props
  	let element;
  	if(todo.editing){
  		element=<TodoTextInput text={todo.text} editing={todo.editing} onSave={(text)=>this.handleSave(todo.id,text)}/>
  	}else{
  		element=(
  			<div className="view">
  				<input className="toggle"
  				type="checkbox"
  				checked={todo.completed}
  				onChange={()=>completeTodo(todo.id)}/>
  				<label onDoubleClick={this.handleDoubleClick.bind(this,todo.id)}>{todo.text}</label>
  				<button className="destroy"/>
  			</div>
  		);
  	}

  	return <li className={
  			classnames({
  				completed:todo.completed,
  				editing:todo.editing
  			})
  			}>
  			{element}
  		</li>
  }
}

TodoItem.propTypes={
	todo:PropTypes.object.isRequired,
	completeTodo:PropTypes.func.isRequired,
	deleteTodo:PropTypes.func.isRequired
}

export default TodoItem;