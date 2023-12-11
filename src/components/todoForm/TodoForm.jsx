import React from 'react'
import { useReducer } from 'react';



const reducer = (state, action) => {
    switch (action.type) {
        case 'value':
            return { ...state, value: action.payload };
        case 'toggle_completion':
            return {...state,items: state.items.map(item =>
                    item.id === action.payload ? { ...item, completed: !item.completed } : item)};
        case 'delete':
            return {...state, items: action.payload};
        case 'add_item':
            return {...state, items: [action.payload,...state.items ] }
        default:
            throw new Error();

    }
}

const ACTION = {
    VALUE: 'value',
    TOGGLE_COMPLETION: 'toggle_completion',
    ADD_ITEM: 'add_item',
}

const predefinedItems = [
    { id: 1, value: 'Take out garbage', completed: false },
    { id: 2, value: 'Do dishes', completed: false },
    { id: 3, value: 'Sweep house', completed: false },
    { id: 4, value: 'Clean room', completed: false },
];

export default function TodoForm() {
    const [state, dispatch] = useReducer(reducer, { value: "", items: predefinedItems })

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const addItem = () => {

        const newItem = {
            id: Math.floor(Math.random() * 1000),
            value: state.value,
            completed: false,
        };

        dispatch({ type: ACTION.VALUE, payload: '' });
        dispatch({ type: ACTION.ADD_ITEM, payload: newItem });
    }

    const deleteItem = (id) => {
        const newArray = state.items.filter(item => item.id !== id);
        dispatch({ type: ACTION.VALUE, payload: '' });
        dispatch({ type: 'delete', payload: newArray });
    }

    const toggleCompletion = (id) => {
        dispatch({ type: ACTION.TOGGLE_COMPLETION, payload: id });
    };

    return (

        <form className='todo-Form' onSubmit={handleSubmit}>
            <h1>Todo List</h1><br></br>
            <input type='text' className='todo-input'
                placeholder='Add a task!' value={state.value} onChange={(e) => dispatch({ type: ACTION.VALUE, payload: e.target.value })}></input>
            <button onClick={() => addItem()} type='submit' className='todo-btn'>Add Task</button>

            <ul>
                {state.items.map((item) => {
                    return (

                        <li key={item.id}>
                            <input type='checkbox' checked={item.completed} onChange={() => toggleCompletion(item.id)} />
                            {item.value} {''}  {!item.completed && (
                                <button onClick={() => deleteItem(item.id)} type="button">Delete</button>
                            )}
                        </li>
                    )
                })}
            </ul>
        </form>


    );



}


