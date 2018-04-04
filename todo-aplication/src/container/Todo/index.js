import React from 'react';
import Header from '../../components/Header';
import TodoList from '../../components/TodoList';

export default class Todo extends React.Component {
    render() {
        return (
            <div> 
                <Header/>    
                <TodoList/>
            </div>
        );
    }
}
