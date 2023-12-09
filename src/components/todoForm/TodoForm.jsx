import React from 'react'
import { useState, useReducer } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case 'value':
            return { ...state, value: action.payload };
            default:
                throw new Error();
    }
}

const ACTION ={
    VALUE: 'value',
}

export default function TodoForm() {
    const [state, dispatch] = useReducer(reducer, { value: "",  })
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(state.value)
    }

    return (
        
        <form className='todo-Form' onSubmit={handleSubmit}>
           <h1>Todo List</h1><br></br>
            <input type='text' className='todo-input' 
            placeholder='Tasks for the day!' value={state.value} onChange={(e) => dispatch({ type: ACTION.VALUE, payload: e.target.value})}></input>
            <button type='submit' className='todo-btn'>Add Task</button>
        </form>
    );
}
