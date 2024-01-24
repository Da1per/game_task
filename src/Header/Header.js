import "./header.css"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import React, { useState,useEffect } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import { useSelector,useDispatch } from 'react-redux'
export default function Header (){
    let locStor=localStorage.getItem('test')
    const [anchorEl, setAnchorEl] = useState(null);
    const arrTask= useSelector((state) => state.reduceSlice.tasks)
    const [lvlStatus, setLvlStatus]= useState({
        lvl:0,
        exp:0
    });
    let lvlInfo= {lvl:JSON.parse(localStorage.getItem('lvl'))}
    
    
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    let del=()=>{ 
        localStorage.removeItem('test')
        localStorage.removeItem('tasks')
        localStorage.removeItem('lvl')
        window.location.reload()
    }
    useEffect(() => {
        
        if (lvlStatus.lvl===0 && lvlStatus.exp===0 && lvlInfo.lvl!==null){
            setLvlStatus({
                lvl:lvlInfo.lvl.lvl,
                exp:lvlInfo.lvl.exp
            })
            
        }
        else{
            if (lvlStatus.exp>=10){
                setLvlStatus({
                    lvl:lvlStatus.lvl+1,
                    exp:0
                })
            }
            else{
                setLvlStatus({
                    lvl:lvlStatus.lvl,
                    exp:lvlStatus.exp+1
                })
            }
            if(lvlStatus.exp>0){localStorage.setItem('lvl',JSON.stringify({lvl:lvlStatus.lvl,exp:lvlStatus.exp}))}
        }
        
        
    },[arrTask])
    
    return (
    <Box className='header'>
        <AppBar position="static">
            <Toolbar  sx={{justifyContent:"space-between"}}>
                <Box sx={{ width: '50%' }}>
                    <LinearProgress color="secondary" sx={{height:"20px",borderRadius:'10px'}} variant="determinate" value={lvlStatus.exp*10}/>
                 {lvlStatus.lvl} LvL
                </Box>
                <Box>
                    <span>{(locStor)?locStor:null}</span>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit">
                        <AccountCircle />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',}}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',}}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}>
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={del}>Exit</MenuItem>
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    </Box>)}
