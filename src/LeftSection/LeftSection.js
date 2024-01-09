import React, { useState,useEffect } from 'react';
import "./leftsection.css"
import { useSelector,useDispatch } from 'react-redux'
import {toDel} from "../reducer/reduceSlice" 
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
export default function LeftSection (){
  const dispatch = useDispatch()
  const [taskTabs, setTaskTabs] = useState([]); 
  const [text, setText] = useState('');
  const [textId, setTextId] = useState(null);
  const chanText =(event)=>{
      setText(event.target.value);
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
  let arrTask= useSelector((state) => state.reduceSlice.tasks)
  let wrap =[]
  let buttonDel=(id)=>{
    setOpen('true')
    dispatch(toDel(id))
  }
  let buttonEdit=(id)=>{
    setTextId(1)
    console.log(textId)
  }
  useEffect(() => {
    if (arrTask){
      for (let i = 0; i < arrTask.length; i++) {
          wrap.push((
          <div className='left_section_wrap' key={i}>
            {arrTask[i]}
            {(textId===i)?(<input  value={text} onChange={chanText}/>):null}
            {<Button variant="contained" startIcon={<EditIcon />} key={i+'a'} onClick={()=>{buttonEdit(i)}}>Edit</Button>}
            <Button variant="outlined" color="error" startIcon={<DeleteIcon />}  onClick={()=>{buttonDel(i)}}>Del</Button>
          </div>))}}
      console.log('1')
      setTaskTabs(wrap)
  },[arrTask])
    return (
    <div className='left_section'>
        {taskTabs} 
        <Snackbar open={open} autoHideDuration={2600} onClose={handleClose}>
              <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                Task Del
              </Alert>
        </Snackbar> 
    </div>)}
