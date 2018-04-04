import React from 'react';

function TodoItem(props) {
    const styleTodo = { textDecoration: props.done ? 'line-through' : 'none'}
    return (
        <li style={styleTodo}>{props.name}</li>
    );
}

export default TodoItem;
