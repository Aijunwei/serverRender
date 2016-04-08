import React, { Component, PropTypes } from 'react'
import TodoItem from './TodoItem'
import Footer from './Footer'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters'

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_ACTIVE]: todo => !todo.completed,
  [SHOW_COMPLETED]: todo => todo.completed
}

class MainSection extends Component {
	constructor(props, context) {
   		 super(props, context)
  	}
  	renderFooter(completeCount){
  		const {todos,filter}=this.props; 
  		const activeCount=todos.length-completeCount;
  		if(todos.length)
  		return (
  			<Footer
  				completedCount={completeCount}
  				activeCount={activeCount}
  				onClearCompleted={this.handleClearCompleted.bind(this)}
  				onShow={this.handleShow.bind(this)} 
  				filter={filter}/>
  		)
  	}
   renderToggleAll(completedCount) {
    const { todos, actions } = this.props
    if (todos.length > 0) {
      return (
        <input className="toggle-all"
               type="checkbox"
               checked={completedCount === todos.length}
               onChange={actions.completeAll} />
      )
    }
  }
  	handleClearCompleted(){
  		var atleatOneCompleted=this.props.todos.some(todo => todo.completed===true);
  		if(atleatOneCompleted){
  			this.props.actions.clearComplete();
  		}
  	}
  	handleShow(filter){
  		this.props.actions.setVisibilityFilter(filter);
  	}
  	render(){
  		const {todos,actions,filter}=this.props;
  		const filterTodos=todos.filter(TODO_FILTERS[filter]);
  		const completeCount=todos.reduce((count,todo) => todo.completed ? count+1 : count,0);

  		return(
  			<section className="main">
  				{this.renderToggleAll(completeCount)}
  				<ul className="todo-list">
  					{
  						filterTodos.map(todo => <TodoItem key={todo.id} todo={todo} {...actions} />)}
  				</ul>
  				{this.renderFooter(completeCount)}
  			</section>
  		)
  	}
}

MainSection.propTypes={
	todos: PropTypes.array.isRequired,
	filter:PropTypes.string.isRequired,
	actions:PropTypes.object.isRequired
}

export default MainSection;