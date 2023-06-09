import React from 'react'
import "../CSS/Todo.css"
import  Alert from "react-bootstrap/Alert"
import List from "../Components/List"

export default function 
TodoComponent() {
    const [text,Settext] = React.useState("")
    const [Todo,SetTodo] = React.useState([])
 
    const [editedText, setEditedText] = React.useState("");
    const [editIndex, setEditIndex] = React.useState(null);


    function handleClick() {
        if (editIndex !== null) {
          // Update existing task
          SetTodo((prev) =>
            prev.map((item, index) =>
              index === editIndex ? editedText : item
            )
          );
          setEditedText("");
          setEditIndex(null);
        } else {
          // Add new task
          SetTodo((prev) => [...prev, text]);
          Settext("");
        }
      }
      

      function handleEdit(index) {
        setEditedText(Todo[index]);
        setEditIndex(index);
      }
      

    // function handleClick() {
    //     SetTodo(prev => [...prev, text])
    //     Settext("")
    // }

    function handleRemove(Index) {
        SetTodo(prev => prev.filter((item,index) => index !== Index)
        )
    }
  return (

    <div className='todoComp'>
        <h1>Todo App</h1>
        {!text ? <Alert variant='danger' className='alert'>Please Start Typing Something!</Alert> : null}
        <input placeholder='Add Something On your List' 
        className='add'
        value={text}
        onChange={(e) => Settext(e.target.value)}
        />

        <button className='add-btn'
        onClick={handleClick}
        disabled={!text}
        >Add on List</button>

        <List
           Todo = {Todo}
           remove = {handleRemove}
           editedText={editedText}
           setEditedText={setEditedText}
           handleClick={handleClick}
           handleEdit={handleEdit}
           editIndex={editIndex}

        />

    </div>
  )
}