
import { useState } from 'react'
import './App.css'

let todos = {
  title: "Go to gym",
  description: "Go to gym at 11",
  id: 1
}
// {
//   title: "Go eat food",
//   description: "Eat food at 7"
// }



function App() {

  const [todo, setTodo] = useState({
    title: "Go to gym",
    description: "Go to gym at 11",
    id: 1
  });

  setInterval(() => {
    setTodo({
      title: "Go eat something",
      description:"eat food",
      id: 2
    })
  }, 2000);


  return (
    <>
      <h1>Hi There</h1>
      {todo.title}
      {todo.description}
      {todo.id}
      <PersonName firstName={todo.title} lastName={"Jain"}></PersonName>
    </>
  )
}


function PersonName(props){
  return <div>
    {props.firstName} {props.lastName} 
  </div>
}

export default App
