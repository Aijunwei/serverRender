import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

class TodoTextInput extends Component{
 constructor(props, context) {
    super(props, context)
     this.state = {
      text: this.props.text || ''
    }
  }
  onChangeFunc(e){
  	this.setState({
  		text:e.target.value
  	});
  }
  handleBlur(e){
  	if(!this.props.newTodo){
  		 this.props.onSave(e.target.value)
  	}
  }
  handleSubmit(e){
  	const text = e.target.value.trim()
    if (e.which === 13) {
      this.props.onSave(text)
      if (this.props.newTodo) {
        this.setState({ text: '' })
      }
    }
  }
	render(){
		return (
			<input className={
				classnames({
					edit:this.props.editing,
					'new-todo':this.props.newTodo
				})
			}
			type="text"
			placeholder={this.props.placeholder}
			autoFocus="true"
			value={this.state.text}
			onChange={this.onChangeFunc.bind(this)}
			onBlur={this.handleBlur.bind(this)}
			onKeyDown={this.handleSubmit.bind(this)}/>
		)

	}
}

export default TodoTextInput