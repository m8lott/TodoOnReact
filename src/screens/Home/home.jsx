import React from 'react';
import { useState } from 'react';
import TodoItem from './item/todoitem';
import CreateTodoField from './CreateTodoField/CreateTodoField';

const data = [
  {title:'Read a new book',
   isCompleted:false,
  id:'one'},
  {title:'Buy a new desk',
   isCompleted:false,
  id:'two'}
]
  
const Home = () => {
  const [todoItems,setTodo] = useState(data);
  const changeTodo = (id) => {
    const copy = [...todoItems];
  const current = copy.find(t => t.id === id);
  current.isCompleted = !current.isCompleted;
  setTodo(copy)
  }

  const removeTodo = (id) => {
    setTodo([...todoItems].filter(t => t.id != id))
  }

  const addTodo = (title) => {
setTodo([{
  id: new Date(),
  title,
  isCompleted:false
},
...todoItems])
  } 
 
  return (<div>
    <h1 style={{color:'white',textAlign:'center'}}>Todo</h1>
   {todoItems.map(item => (
    <div style={{color:'white',fontSize:20}}>
    <TodoItem key={item.id} todo={item}
    changeTodo={changeTodo} 
    removeTodo={removeTodo}/>
    </div>
   ))}
   <CreateTodoField addTodo={addTodo} />
  </div>)
}

export default Home