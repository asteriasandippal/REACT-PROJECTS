import React from 'react';
import TodoItem from './TodoItem';

function TodoList() {
    const items = [
        {
            name: 'First Item',
            done: false
        }, 
        {
            name:'Second Item',
            done: true
        }, 
        {
            name: 'Third Item',
            done: false
        }
    ]
    return (
        <ul>
            { items.map(
                item => <TodoItem  
                    key={item.name} 
                    name={item.name} 
                    done={item.done} 
                />) 
            }
        </ul>
    );
}

export default TodoList;

