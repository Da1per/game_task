import React, { useState } from 'react';
import "./header.css"
const Header = ()=>{
    let locStor=localStorage.getItem('test')
    console.log(locStor)
    return (
    <div className='header'>
        <div className='header_secion_left'>
            <img className='header_section_left_avatar' src='' alt='Avatar'/>
            <span>{(locStor)?locStor:null}</span>
            <div className='header_secion_left_status'>
                LvL 20
            </div>
        </div>
        <div className='header_section_right'>
            Exit
        </div>

    </div>
  )
}
export default Header;