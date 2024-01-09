import "./header.css"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import React, { useState } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import { useSelector,useDispatch } from 'react-redux'
export default function Header (){
    let locStor=localStorage.getItem('test')
    const [anchorEl, setAnchorEl] = useState(null);
    const arrTask= useSelector((state) => state.reduceSlice.tasks)
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    let del=()=>{ 
        localStorage.removeItem('test')
        localStorage.removeItem('tasks')
        window.location.reload()
    }

    return (
    <Box className='header'>
        <AppBar position="static">
            <Toolbar  sx={{justifyContent:"space-between"}}>
                <Box sx={{ width: '50%' }}>
                    <LinearProgress color="secondary" sx={{height:"20px",borderRadius:'10px'}} variant="determinate" value={arrTask.length*10}/>
                LvL 20
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
