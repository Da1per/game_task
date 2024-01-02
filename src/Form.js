import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux'
import   { toInicel} from "./reducer/reduceSlice" 
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
export default function Form (){
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
      <div>
        <h3>Enter name</h3>
        <TextField 
          value={name1}
          onChange={handleEmailChange} />
         {(name1)?<Button variant="contained" onClick={sum}>Submit</Button>:<Button color='error' disabled>Submit</Button>}
      </div>)}
  