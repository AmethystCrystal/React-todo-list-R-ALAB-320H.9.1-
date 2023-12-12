import React from 'react'
import { useReducer } from 'react';



const reducer = (state, action) => {
    switch (action.type) {
        case 'title':
            return { ...state, title: action.payload };
        case 'toggle_completion':
            return {...state,items: state.items.map(item =>
                    item.userId === action.payload ? { ...item, completed: !item.completed } : item)};
        case 'delete':
            return {...state, items: action.payload};
        case 'add_item':
            return {...state, items: [action.payload,...state.items ] }
        default:
            throw new Error();

    }
}

const ACTION = {
    TITLE: 'title',
    TOGGLE_COMPLETION: 'toggle_completion',
    ADD_ITEM: 'add_item',
}

const predefinedItems = [
    { "userId": 1, title: 'Take out garbage', completed: false },
    { "userId": 2, title: 'Do dishes', completed: false },
    { "userId": 3, title: 'Sweep house', completed: false },
    { "userId": 4, title: 'Clean room', completed: false },
];

export default function TodoForm() {
    const [state, dispatch] = useReducer(reducer, { title: "", items: predefinedItems })

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const addItem = () => {

        const newItem = {
            userId: Math.floor(Math.random() * 1000),
            title: state.title,
            completed: false,
        };

        dispatch({ type: ACTION.TITLE, payload: '' });
        dispatch({ type: ACTION.ADD_ITEM, payload: newItem });
    }

    const deleteItem = (userId) => {
        const newArray = state.items.filter(item => item.userId !== userId);
        dispatch({ type: ACTION.TITLE, payload: '' });
        dispatch({ type: 'delete', payload: newArray });
    }

    const toggleCompletion = (userId) => {
        dispatch({ type: ACTION.TOGGLE_COMPLETION, payload: userId });
    };

    return (

        <form className='todo-Form' onSubmit={handleSubmit}>
            <h1>Todo List</h1><br></br>
            <input type='text' className='todo-input'
                placeholder='Add a task!' title={state.title} onChange={(e) => dispatch({ type: ACTION.title, payload: e.target.title })}></input>
            <button onClick={() => addItem()} type='submit' className='todo-btn'>Add Task</button>

            <ul>
                {state.items.map((item) => {
                    return (

                        <li key={item.userId}>
                            <input type='checkbox' checked={item.completed} onChange={() => toggleCompletion(item.userId)} />
                            {item.title} {''}  {!item.completed && (
                                <button onClick={() => deleteItem(item.userId)} type="button">Delete</button>
                            )}
                        </li>
                    )
                })}
            </ul>
        </form>


    );



}


