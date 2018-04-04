import React from 'react';
import Header from '../../components/Header';
import TodoList from '../../components/TodoList';
import TodoForm from '../../components/TodoForm';
import TodoItem from '../../components/TodoItem';

export default class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(value) {
        console.log(value);
        const newItem = this.state.items.concat({name: value, done: false});
        this.setState({
            items: newItem
        });
    }
    handleToggleDone(item) {
        const newItems = this.state.items.slice();
        console.log(newItems);
        newItems[newItems.indexOf(item)].done = !item.done;
        console.log(newItems[newItems.indexOf(item)]);
        this.setState({
            items: newItems
        });

    }

    render() {
        return (
            <div> 
                <Header/>
                <TodoList>
                    { this.state.items.map(
                        item => <TodoItem  
                            key={item.name} 
                            name={item.name} 
                            done={item.done} 
                            onToggleDone={this.handleToggleDone.bind(this, item)}
                        />) 
                    }   
                </TodoList>
                <TodoForm addToDoItem={this.handleSubmit}/>
            </div>
        );
    }
}
