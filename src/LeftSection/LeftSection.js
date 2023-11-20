import React, { useState } from 'react';
import "./leftsection.css"
import { useSelector,useDispatch } from 'react-redux'
const LeftSection = ()=>{
  let arrTask= useSelector((state) => state.reduceSlice.tasks)
  let taskTabs=[]
  let listTasks=()=>{ 
    
    for (let i=0;i>arrTask.length;i++){
      console.log('ffff')
      taskTabs.push(
        <div id={i}>
          Task is {i}
          {arrTask[i]}
        </div>
      )
    } 
    return taskTabs
    
  }
  listTasks()
  console.log(listTasks)
    return (
    <div className='leftsection'>
        {taskTabs}
        rgrg
    </div>
  )
}
export default LeftSection;