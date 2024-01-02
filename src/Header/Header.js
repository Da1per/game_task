import "./header.css"
import Button from '@mui/material/Button';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
export default function Header (){
    let locStor=localStorage.getItem('test')
    let del=()=>{ 
        localStorage.removeItem('test')
        localStorage.removeItem('tasks')}
    return (
    <div className='header'>
        <div className='header_secion_left'>
            <img className='header_section_left_avatar' src='' alt='Avatar'/>
            <span>{(locStor)?locStor:null}</span>
            <div className='header_secion_left_status'>
                LvL 20
            </div>
        </div>
        <Button variant="contained" className='header_section_right' startIcon={<ExitToAppIcon/>} onClick={del}>
            Exit
        </Button>
    </div>)}
