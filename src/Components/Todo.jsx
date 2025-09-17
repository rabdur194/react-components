import React, {useState} from 'react'
import {classes} from './Todo.module.css'

function Todo() {
const [inputValue, setInputValue]=useState('')
const [notes, setNotes]= useState([])
const [editNode,setEditNode]=useState(false);

const inputHandler=(e)=>{
    setInputValue(e.target.value)
}
const buttonClicked=()=>{
  if (!inputValue.trim()) return
   const element = {
    id:Date.now(),
    value: inputValue
   }
   setNotes([...notes,element])
  setInputValue('')
}
 
const editNote=  (id)=>{
  const noteToEdit = notes.find((value)=>value.id===id)
  if(noteToEdit){
      setInputValue(noteToEdit.value);
      setNotes(inputValue)
  }

}
const deleteNote= (value)=>{

}
  return (
    <div>
      
        <input type='text' value={inputValue} 
        onChange={inputHandler}
        />
        <button onClick={buttonClicked}>ADD NOTE</button>
        <ul>
        {notes.map((value,index)=>
          <li key={value.id}>{value.value}
          <button onClick={()=> editNote(value.id)}>Edit</button> 
          <button onClick={()=>deleteNote(value.id)}>Delete</button>
        </li> 
        )}
        </ul>
        
    </div>
  )
}

export default Todo