
import { useState } from 'react'
import './App.css'

// let todos = {
//   title: "Go to gym",
//   description: "Go to gym at 11",
//   id: 1
// }
// {
//   title: "Go eat food",
//   description: "Eat food at 7"
// }



function App() {

  const [todos, setTodos] = useState([{
    title: "Go to gym",
    description: "Hit gym from 5-7",
    id: 1
  },
  {
    title: "Go to Class",
    description: "Go to class from 7-9",
    id: 1
  }]);




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
