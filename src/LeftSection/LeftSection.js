import React, { useState,useEffect } from 'react';
import "./leftsection.css"
import { useSelector,useDispatch } from 'react-redux'
import   {
  toDel
  
} from "../reducer/reduceSlice" 
const LeftSection = ()=>{
  let arrTask= useSelector((state) => state.reduceSlice.tasks)
  const dispatch = useDispatch()
  const [taskTabs, setTaskTabs] = useState([]); 
  console.log(taskTabs)
  let wrap =[]
  let buttonDel=(id)=>{
    dispatch(toDel(id))
  }
  useEffect(() => {
    for (let i = 0; i < arrTask.length; i++) {
        console.log(arrTask)
        wrap.push((
        <div className='left_section_wrap' key={i}>
          {arrTask[i]}
          <button onClick={()=>{buttonDel(i)}}>Del</button>
        </div>))
        setTaskTabs(wrap)
       
    }
    
  },[arrTask])
 
    return (
    <div className='left_section'>
        {taskTabs}
        
    </div>
  )
}
export default LeftSection;