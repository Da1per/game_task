import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux'
import   {
  toInicel
  
} from "./reducer/reduceSlice" 

const Form = ()=>{
    const dispatch = useDispatch()
    const curName = useSelector((state) => state.reduceSlice.persName)

    const [name, setName] = useState('');
    const handleEmailChange =(event)=>{
      setName(event.target.value);
    }
    const sum =()=>{
      localStorage.setItem('test',name)
      alert(localStorage.getItem('test'))
      dispatch(toInicel(localStorage.getItem('test')))
    }
    return (
      <div >
        <label>Enter name</label>
        <input 
          value={name}
          onChange={handleEmailChange} />
        
         {(name)?<button onClick={sum}>Submit</button>:<button disabled>Submit</button>}
      </div>
    )
  }
  export default Form;