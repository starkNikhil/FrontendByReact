
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

// creatin a custom hook

function useTodos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todos").then((response) => {
      response.json().then((data) => {
        console.log(data);
        setTodos(data)
      })
    })
  }, [])
  //  Till here only one till fetch request will go outside
  // using set interval will re render the fetch request in every one 1 sec which will update it
  
  setInterval(() => {
    fetch("http://localhost:3000/todos").then((response) => {
      response.json().then((data) => {
        console.log(data);
        setTodos(data)
      })
    })
  }, 1000);

  return todos
}



function App() {

 const todos = useTodos()


  return (
    <>
      <div>

        {todos.map((todo) => {
          return <Todo title={todo.title} description={todo.description}></Todo>
        })}
      </div>
    </>
  )
}


function Todo(props) {
  return <div>
    <div>

      {props.title}
    </div>
    <div>

      {props.description}
    </div>
  </div>
}


export default App
