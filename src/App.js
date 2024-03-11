import React from 'react';
import './App.css';
import { useState } from 'react';
function App() {
   const [ toDos , setTodos ] = useState([])
   const [toDo ,setTodo ] = useState('')

   const handleDeleteTodo = (id) => {
    setTodos(toDos.filter((todo) => todo.id !== id));
  }
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e) => setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i  onClick={ () => setTodos([...toDos,{id : Date.now() , text:toDo ,status : false }])} className="fas fa-plus"></i>
      </div>
      { toDos.map ( (obj,index) => {
      
       return  ( <div className="todos" key={index}>
        <div className="todo">
          <div className="left">
            <input onChange={ () =>  {
        
                setTodos(toDos.map((todo) => {
                if (todo.id === obj.id) {
                  return { ...todo, status: !todo.status };
                }
                return todo;
              }))
              }} value={obj.status} type="checkbox" name="" id={obj.id} />
            <p>{obj.text}</p>
          </div>
          <div className="right">
            <i onClick={() => handleDeleteTodo(obj.id)} className="fas fa-times"></i>
          </div>
        </div>
      </div> )
       }) }
       <br /><br />
       <h1>Active Tasks</h1>
       {toDos.map ( (obj) => {
         if (obj.status){
          return (<h2 key={obj.id}>{obj.text}</h2>);
         }
         return null
       })}
    </div>
  );
}

export default App;