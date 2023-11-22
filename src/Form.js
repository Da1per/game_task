import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux'
import   {
  toInicel
  
} from "./reducer/reduceSlice" 

const Form = ()=>{
    const dispatch = useDispatch()
    const curName = useSelector((state) => state.reduceSlice.names)

    const [name1, setName] = useState('');
    const handleEmailChange =(event)=>{
      setName(event.target.value);
    }
    const sum =()=>{
      localStorage.setItem('test',name1)
      alert(localStorage.getItem('test'))
      dispatch(toInicel(localStorage.getItem('test')))
      console.log(curName)
    }
    return (
      <div >
        <label>Enter name</label>
        <input 
          value={name1}
          onChange={handleEmailChange} />
        
         {(name1)?<button onClick={sum}>Submit</button>:<button disabled>Submit</button>}
      </div>
    )
  }
  export default Form;