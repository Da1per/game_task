import React, { useState,useEffect } from 'react';
import "./leftsection.css"
import { useSelector,useDispatch } from 'react-redux'
const LeftSection = ()=>{
  let arrTask= useSelector((state) => state.reduceSlice.tasks)
  /* let taskTabs =[<div key={1}>dfdfdre45df</div>] */
  const [taskTabs, setTaskTabs] = useState([]);
  console.log(taskTabs)
  
  useEffect(() => {
    for (let i = 0; i < arrTask.length; i++) {
      
      taskTabs.push(<div key={i}>{arrTask[i]}</div>)
    }
    
  },[arrTask])
 
    return (
    <div className='leftsection'>
        {taskTabs}
        
    </div>
  )
}
export default LeftSection;