import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import AddTaskCard from './components/AddTaskCard'
import TaskCard from './components/TaskCard'
import CompletedTodos from './components/CompletedTodos'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container bg-white-600 m-auto p-5 my-10 rounded-lg shadow-lg">
      <Header/>
      <AddTaskCard/>
     
      </div>
    </>
  )
}

export default App
