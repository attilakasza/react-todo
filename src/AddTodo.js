import React, {useState, useRef} from 'react';
import {TweenMax, CSSRulePlugin, Power3} from 'gsap/all';
import CSSPlugin from 'gsap/CSSPlugin';

const C = CSSPlugin;

const AddTodo = ({addTodo}) => {

    let inputItem = useRef(null);
    let placeholderItem = CSSRulePlugin.getRule(".todo__input::placeholder");
    let submitItem = useRef(null);
    let plusItem = useRef(null);

    const [content, setContent] = useState('');

    const handleChange = (e) => {
        setContent(e.target.value);
    }

    const handleSubmit= (e) => {
        e.preventDefault();
        addTodo({content});
        setContent('');
        inputItem.blur();
    }

    const handleInputExpand = () => {
        TweenMax.to(inputItem, .7, {width: '100%', backgroundColor: '#fff', ease: Power3.easeOut})
        TweenMax.to(plusItem, .3, { x: '6rem', opacity: 0 })
        TweenMax.to(placeholderItem, .3, { opacity: 0 })
        TweenMax.fromTo(submitItem, .5, {opacity: 0, x: -60}, {opacity: 1, x: 0, visibility: 'visible', delay: .3})
    }

    const handleInputShrink = () => {
        TweenMax.to(submitItem, .1, {opacity: 0})
        TweenMax.fromTo(inputItem, .7, {width: '20rem'}, {width: '9rem', backgroundColor: '#353639', ease: Power3.easeOut})
        TweenMax.to(placeholderItem, 1, { opacity: 1 })
        TweenMax.fromTo(plusItem, .3, { x: '1rem', opacity: 0}, { x: '0rem', opacity: 1, delay: .3 })
        TweenMax.to(submitItem, 0, {visibility: 'hidden', delay: .5})
    }

    return (
        <div className="todo__add">
            <form className="todo__form" onSubmit={handleSubmit}>
               
                <label className="todo__label" >Add a task
                    <input 
                        className="todo__input"
                        type="text" 
                        placeholder="Add a task" 
                        onChange={handleChange} 
                        value={content}
                        ref={e => {inputItem = e}}
                        onClick={handleInputExpand}
                        onBlur={handleInputShrink}
                        required />
                    <span className="todo__plus" ref={e => {plusItem = e}}>+</span>
                </label>
                <input className="todo__submit" type="submit" value="+" ref={e => {submitItem = e}}/>
            </form>
        </div>
    )
}

export default AddTodo;