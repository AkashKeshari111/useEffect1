import React, { useEffect, useState } from 'react'

function Todos() {

    const [newTodos,setNewTodos]=useState("")
    const[todos,setTodos]=useState([]);

    useEffect(()=>{
      fetch("http://localhost:3001/todos")
    .then((res)=>res.json())
    .then((data)=>(
      setTodos(data)
      ));
    },[])

  return (
    <div>
        <div>
        <input value={newTodos} onChange={(e)=>(setNewTodos(e.target.value))}/>
        <button onClick={}>+</button>
        </div>
  
        {todos.map((todo)=>{
           return <div key={todo.id}>{todo.value}</div>
        })}
    </div>
  )
}

export default Todos