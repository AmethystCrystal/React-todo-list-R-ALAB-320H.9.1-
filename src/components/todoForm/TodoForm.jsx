import React from 'react'
import { useState, useReducer } from 'react';
import Todo from '../todo/Todo';



const reducer = (state, action) => {
    switch (action.type) {
        case 'value':
            return { ...state, value: action.payload };
        default:
            throw new Error();

    }
}

const ACTION = {
    VALUE: 'value',
}


export default function TodoForm() {
    const [state, dispatch] = useReducer(reducer, { value: "", })
    const [items, setItems] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const addItem = () => {
        
        const item = {
            id: Math.floor(Math.random() * 1000),
            value: state.value
        };

        setItems(oldList => [...oldList, item]);
        dispatch({ type: ACTION.VALUE, payload: '' });

        console.log(items);
    }

    return (

        <form className='todo-Form' onSubmit={handleSubmit}>
            <h1>Todo List</h1><br></br>
            <input type='text' className='todo-input'
                placeholder='Add a task!' value={state.value} onChange={(e) => dispatch({ type: ACTION.VALUE, payload: e.target.value })}></input>
            <button onClick={() => addItem()} type='submit' className='todo-btn'>Add Task</button>

            <ul>
                <li>task items</li>
                <li>task items</li>
                <li>task items</li>
            </ul>
        </form>


    );



}


