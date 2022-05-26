import React, { useEffect, useState } from 'react'

function Todos() {

    const [newTodos,setNewTodos]=useState("")
    const[todos,setTodos]=useState([]);

    const saveInfo=()=>{
       

        fetch("http://localhost:3001/todos",{
            method:"POST",
            headers:{
               "content-type":"application/json"
            },
            body:JSON.stringify({
                text:newTodos,
                isCompleted:false
            })
        })
        .then((res)=>res.json())
        .then((data)=>(
            setTodos([...todos,data]),
            setNewTodos("")
          ));
    }

    useEffect(()=>{
      fetch("http://localhost:3001/todos?_page=1&_limit=4")
    .then((res)=>res.json())
    .then((data)=>(
      setTodos(data)
      ));
    },[])

  return (
    <div>
        <div>
        <input value={newTodos} onChange={({target})=>(setNewTodos(target.value))}/>
        <button onClick={saveInfo}>+</button>
        </div>
  
        {todos.map((todo)=>{
           return <div key={todo.id}>{todo.text}</div>
        })}
    </div>
  )
}

export default Todos