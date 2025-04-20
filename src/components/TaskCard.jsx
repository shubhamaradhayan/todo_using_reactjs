import React from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

//copilot:ignore
function TaskCard(props) {

  const handleEdit = (key) => {
    console.log('Edit button clicked');
    props.onEdit(key)
  }
  
  const handleDelete = (key) => {
    // console.log('Delete button clicked');
    // let key = e.target.id;
    props.onDelete(key)
    console.log("hello"+key);
    
  }

  const handleCheck = (e) => {  
  //  console.log(JSON.stringify(props));
   
      let key = e.target.id;
      props.onCheck(key)
   }
// console.log(props.onCheck);


  return (

    // <h1>{JSON.stringify(props.Todo)}</h1>
    <div className="tasksCard flex m-5 px-5 py-2 justify-between rounded-lg bg-gray-100">
      <div className="datav my-1 flex">
        <input id={props.Todo.key} type="checkbox" className="checkbox p-5 size-4" onChange={handleCheck} checked={props.Todo.is_completed} />
        <label htmlFor={props.Todo.key} className={props.Todo.is_completed ? 'line-through mx-3' : 'mx-3'}>{props.Todo.todo}</label>
      </div>
      <div className="operations gap-3 flex">
        <button onClick={() => handleEdit(props.Todo.key)} className='cursor-pointer'><FaEdit color='blue' fontSize={'25px'} /></button>
        <button onClick={() => handleDelete(props.Todo.key)} className='cursor-pointer'><MdDelete color='red' fontSize={'25px'} /></button>
      </div>

    </div>
  )
}

export default TaskCard