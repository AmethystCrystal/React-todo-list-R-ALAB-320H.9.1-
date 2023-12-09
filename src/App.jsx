import { useState } from 'react'
import './App.css'
import TodoForm from './components/todoForm/TodoForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TodoForm/>
    </>
  )
}

export default App
