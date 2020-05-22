import React from 'react';
import Todo from './Todo';
import { ReactComponent as Icons } from './icon.svg';

const Todos = ({todos, deleteTodo}) => {
    
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <Todo todo={todo} deleteTodo={deleteTodo} key={todo.id}/>
            )
        })
    ) : (
        <div className="todo__no">
            <Icons className="todo__icons" />  
            <h1>No tasks found
            <p className="todo__empty">Looks like your list is empty.</p>
            <p>Enjoy your day.</p>
            </h1>
        </div>
    )
    return (
        <div className="todo__list">
            {todoList}
        </div>
    )
}

export default Todos;