import React, { useState } from 'react';
import './mainsection.css'
import {useDispatch } from 'react-redux'
import   {toCreateTask} from "../reducer/reduceSlice" 
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
export default function MainSection(){
    const dispatch = useDispatch()
    let createTask =()=>{ 
        dispatch(toCreateTask(task))
        setOpen('true')
        setTask('')}
    const [open, setOpen] = useState(false);
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
    const Alert = React.forwardRef(function Alert(props, ref) {
      return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });
    const [task, setTask] = useState('');
    const changeText =(event)=>{
      setTask(event.target.value)}
    return (
        <div className='mainsection'>
           <div>
            <h1>hello</h1>
            <TextField label="your tasks..." variant="standard" value={task} onChange={changeText}/>
            <Button variant='contained' color="success" onClick={createTask} startIcon={<AddIcon/>} >create</Button>
            <Snackbar open={open} autoHideDuration={2600} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Task Add!
              </Alert>
            </Snackbar>
           </div>
        </div>)}
