import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux'
import   {
  toInicel
  
} from "./reducer/reduceSlice" 

const Form = ()=>{
    const dispatch = useDispatch()
    const curName = useSelector((state) => state.reduceSlice.persName)

    const [name1, setName] = useState('');
    const handleEmailChange =(event)=>{
      setName(event.target.value);
    }
    const sum =()=>{
      localStorage.setItem('test',name1)
      alert(localStorage.getItem('test'))
      dispatch(toInicel(localStorage.getItem('test')))
    }
    return (
      <form >
        <label>Enter name</label>
        <input 
          value={name1}
          onChange={handleEmailChange} />
        
         {(name1)?<button onClick={sum}>Submit</button>:<button disabled>Submit</button>}
      </form>
    )
  }
  export default Form;