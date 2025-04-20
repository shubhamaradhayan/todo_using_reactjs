import React from 'react'

function CompletedTodos(props) {

const handleOnchange = () => {
props.onToggle()
}

  return (
    <>
    <div className="mx-5 px-3">

    <input className='px-3'  type="checkbox" name="" id="456" onChange={handleOnchange} checked={props.onShowFinished}/>
    <label className='px-3' htmlFor="456">Show completed Todos</label>
    
    </div>
    </>
  )
}

export default CompletedTodos