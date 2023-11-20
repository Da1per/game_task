import React, { useState } from 'react';
import './mainsection.css'
import { useSelector,useDispatch } from 'react-redux'
import   {
    toCreateTask
    
  } from "../reducer/reduceSlice" 
const MainSection = ()=>{
    const dispatch = useDispatch()
    let createTask =()=>{ 
        dispatch(toCreateTask(task))
        setTask('')
    }
    const [task, setTask] = useState('');
    const changeText =(event)=>{
      setTask(event.target.value);
    }

    return (
        <div className='mainsection'>
           <div>
            <h1>hello</h1>
            <input value={task} onChange={changeText}/>
            <button onClick={createTask}>create</button>

           </div>
        </div>
    )
}
export default MainSection