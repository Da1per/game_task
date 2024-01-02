import React, { useState } from 'react';
import './mainsection.css'
import {useDispatch } from 'react-redux'
import   {toCreateTask} from "../reducer/reduceSlice" 
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
export default function MainSection(){
    const dispatch = useDispatch()
    let createTask =()=>{ 
        dispatch(toCreateTask(task))
        setTask('')}
    const [task, setTask] = useState('');
    const changeText =(event)=>{
      setTask(event.target.value)}
    return (
        <div className='mainsection'>
           <div>
            <h1>hello</h1>
            <TextField label="your tasks..." variant="standard" value={task} onChange={changeText}/>
            <Button variant='contained' color="success" onClick={createTask} startIcon={<AddIcon/>} >create</Button>
           </div>
        </div>)}
