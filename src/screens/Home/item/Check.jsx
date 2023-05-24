import React from 'react';
import {BsCheck} from 'react-icons/bs'
const Check = ({isCompleted,todo}) => {
  return (
    isCompleted ?
    <div style = {{width:20,height:20,border:'2px solid pink',borderRadius:5,cursor:'pointer',
    backgroundColor:'pink', display:'flex',justifyContent:'center',alignItems:'center'}} >
{isCompleted&&
  <BsCheck size={24}/>}
    </div> : 
     <div style = {{width:20,height:20,border:'2px solid pink',borderRadius:5,cursor:'pointer'}}>
 {isCompleted&&
   <BsCheck size={24} />}
     </div>
  )
}

export default Check