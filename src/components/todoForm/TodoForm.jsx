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

const ACTION = {
    VALUE: 'value',
}

const predefinedItems = [
    { id: 1, value: 'Take out garbage' },
    { id: 2, value: 'Do dishes' },
    { id: 3, value: 'Sweep house' },
    { id: 4, value: 'Clean room' },
];

export default function TodoForm() {
    const [state, dispatch] = useReducer(reducer, { value: "", })
    const [items, setItems] = useState(predefinedItems);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const addItem = () => {

        const item = {
            id: Math.floor(Math.random() * 1000),
            value: state.value
        };

        setItems(oldList => [item, ...oldList]);
        dispatch({ type: ACTION.VALUE, payload: '' });

        console.log(items);
    }

    const deleteItem = (id) => {
        const newArray = items.filter(item => item.id !== id);
        setItems(newArray);
    }

    return (

        <form className='todo-Form' onSubmit={handleSubmit}>
            <h1>Todo List</h1><br></br>
            <input type='text' className='todo-input'
                placeholder='Add a task!' value={state.value} onChange={(e) => dispatch({ type: ACTION.VALUE, payload: e.target.value })}></input>
            <button onClick={() => addItem()} type='submit' className='todo-btn'>Add Task</button>

            <ul>
                {items.map(item => {
                    return (
                        <li key={item.id}>
                            <input type='checkbox' checked={item.completed} onChange={() => toggleCompletion(item.id)} />
                            {item.value} <button onClick={() => deleteItem(item.id)}>Delete</button> </li>
                    )
                })}

            </ul>
        </form>


    );



}


