import React, { useState } from "react";

const CreateTodoField = ({addTodo}) => {
  const [title,setTitle] = useState('');
return (
  <div style={{backgroundColor:'blue',borderRadius:10,paddingTop:10,paddingBottom:10,paddingLeft:10,marginBottom:20,
  maxWidth:300,display:'flex',gap:10}}>
<input style={{borderRadius:10,outline:'none',
paddingTop:5,paddingBottom:5,paddingLeft:5,color:'white',backgroundColor:'grey',
fontSize:16,border:'1px solid black'}} type="text" onChange={e => setTitle(e.target.value)} value={title}
 onKeyDown={(e) => e.key === 'Enter' && title.length != 0 && addTodo(title)}/>
 <button style={{width:50,height:30,backgroundColor:'green',color:'white',fontSize:17,
border:'1px solid black',borderRadius:10}} onClick={() => title.length != 0 && addTodo(title)}>Add</button>
  </div>
)
}


export default CreateTodoField