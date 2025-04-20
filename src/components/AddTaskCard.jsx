import React from 'react'
import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import TaskCard from './TaskCard';
import CompletedTodos from './CompletedTodos';


function AddTaskCard() {

  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])
  const [showFinished, setShowFinished] = useState(true)

  useEffect(() => {
    let data = localStorage.getItem('todos')
    if (data) {
      let todos = JSON.parse(data)
      setTodos(todos)
    }
  }, [])


  const saveToLS = (todoList) => {
    localStorage.setItem('todos', JSON.stringify(todoList));
  };
  

  const handleAdd = () => {
    const newTodoList = [...todos, { todo, is_completed: false, key: uuidv4() }];
    setTodos(newTodoList);       // ✅ Set new state
    setTodo('');                 // ✅ Clear input
    saveToLS(newTodoList);       // ✅ Pass updated list directly
    console.log("New todos: ", newTodoList); // ✅ Log what you're saving
  }
  
  const handleCheck = (id) => {
    let index = todos.findIndex(item => {
      return item.key == id;
    })
    let newTodos = [...todos];
    newTodos[index].is_completed = !newTodos[index].is_completed
    setTodos(newTodos)
    saveToLS(newTodos)
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }
  // console.log(todos);
  const handleEdit = (id) => {
    console.log('Edit button clicked');

    let index = todos.findIndex(item => {
      return item.key == id;
    })
    let t = todos[index]
    handleDelete(id)
    setTodo(t.todo)
    
  }

  const handleDelete = (id) => {
    console.log('Delete button clicked');
    let index = todos.findIndex(item => {
      return item.key == id;
    })
    // console.log(index);

    let newTodos = [...todos];
    newTodos.splice(index, 1)
    setTodos(newTodos)
    saveToLS(newTodos)
  }

  return (
    <>
      <div className='addTaskCard  flex m-10'>
        <input className='bg-gray-50 border-2 rounded-4xl px-5  w-[100%]' type="text" value={todo} onChange={handleChange} />
        <button onClick={handleAdd} className='bg-purple-900 text-amber-100 border-2 rounded-4xl px-5 py-1' >Add</button>
      </div>
      <CompletedTodos onShowFinished={showFinished} onToggle={() => {setShowFinished(!showFinished) }}/>
      {todos.map((todo) => {
        return (showFinished || !todo.is_completed ) && <TaskCard key={todo.key} Todo={todo} onCheck={handleCheck} onEdit={handleEdit} onDelete={handleDelete} /> 
      })}


    </>
  )
}

export default AddTaskCard


