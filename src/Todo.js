import React, {useRef, useState} from 'react';
import {TweenMax} from 'gsap';
import CSSPlugin from 'gsap/CSSPlugin';

const C = CSSPlugin;

const Todo = ({todo, deleteTodo}) => {

    let todoName = useRef(null);
    let todoStrikethrough = useRef(null);
    let todoDelete = useRef(null);

    const [complete, setComplete] = useState(false);
    
    const handleIncomplete = () => {
        TweenMax.to(todoStrikethrough, .5, {opacity: 0, width: 0})
        setComplete(false)
    }

    const handleComplete = () => {
        TweenMax.to(todoStrikethrough, .5, {opacity: 1, width: '100%'})
        setComplete(true)
    }
    
    const handleDelete = () => {
        TweenMax.to(todoDelete, .3, {opacity: 1})
        TweenMax.to(todoName, .3, {opacity: .4})
    }
    const handleNotDelete = () => {
        TweenMax.to(todoDelete, .3, {opacity: 0})
        TweenMax.to(todoName, .3, {opacity: 1})
    }

    return (
        <div className="todo__item" onMouseOver={handleDelete} onMouseOut={handleNotDelete}>
            <div className="todo__content" onClick={complete !== true ? handleComplete: handleIncomplete} >
                <div className="todo__name" ref={e => {todoName = e}}>{todo.content}</div>
                <svg className="todo__strikethrough" ref={e => {todoStrikethrough = e}}>
                    <line x1="0" y1="0" x2="200" y2="0" />
                </svg>   
            </div>
            <div className="todo__delete" ref={e => {todoDelete = e}} onClick={() => {deleteTodo(todo.id)}}>Delete</div>
        </div>
    )
}

export default Todo;