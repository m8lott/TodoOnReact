import React from 'react';
import Check from './Check';
import {BsTrash} from 'react-icons/bs'
const TodoItem = ({todo,changeTodo,removeTodo}) => {
  return <div style={{display:'flex',alignItems:'center',gap:10,paddingBottom:10,
  backgroundColor:'blue',borderRadius:10,paddingTop:10,paddingBottom:10,paddingLeft:10,marginBottom:20,
  maxWidth:600}} >
    <span onClick={() => changeTodo(todo.id)}>
   <Check isCompleted={todo.isCompleted} /> 
    </span>    
    {todo.title}
    <span onClick={() => removeTodo(todo.id)} style={{cursor:'pointer'}}>
    <BsTrash size={23} style={{paddingTop:7}}/>
    </span>
    </div>
}

export default TodoItem