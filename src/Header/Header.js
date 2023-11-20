import React, { useState } from 'react';
import "./header.css"
const Header = ()=>{
    let locStor=localStorage.getItem('test')
    let del=()=>{ localStorage.removeItem('test')}
    return (
    <div className='header'>
        <div className='header_secion_left'>
            <img className='header_section_left_avatar' src='' alt='Avatar'/>
            <span>{(locStor)?locStor:null}</span>
            <div className='header_secion_left_status'>
                LvL 20
            </div>
        </div>
        <button className='header_section_right' onClick={del}>
            Exit
        </button>

    </div>
  )
}
export default Header;