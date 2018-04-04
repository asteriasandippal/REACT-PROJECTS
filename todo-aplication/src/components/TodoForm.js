import React from 'react';

class TodoForm extends React.Component {
    handleSubmit(event) {
        event.preventDefault();
        this.props.addToDoItem(this.refs.input.value);
        this.refs.input.value= '';
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" ref="input" />
                    <button>Add</button>
                </form>    
            </div>
        );
    }
}
export default TodoForm;
