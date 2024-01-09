import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux'
import   { toInicel} from "./reducer/reduceSlice" 
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
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
    return (
      <div>
        <h3>Enter name</h3>
        <TextField 
          value={name1}
          onChange={handleEmailChange} />
         {(name1)?<Button variant="contained" onClick={sum}>Submit</Button>:<Button onClick={()=>{setOpen(true)}} color='error' >Submit</Button>}
         <Snackbar open={open} autoHideDuration={2600} onClose={handleClose}>
              <Alert onClose={handleClose} severity={(name1)?"success":"error"} sx={{ width: '100%' }}>
              Enter name
              </Alert>
        </Snackbar> 
      </div>)}
  