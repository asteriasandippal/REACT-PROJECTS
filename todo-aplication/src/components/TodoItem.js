import React from 'react';

function TodoItem(props) {
    const styleTodo = { textDecoration: props.done ? 'line-through' : 'none'}
    return (
        <li style={styleTodo}>
            <a href="#" onClick={props.onToggleDone}>{props.name}</a>
        </li>
    );
}

export default TodoItem;
