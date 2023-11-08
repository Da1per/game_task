import React, { useState } from 'react';
import "./header.css"
const Header = ()=>{
    return (
    <div className='header'>
        <div className='header_secion_left'>
            <img src='' alt='Avatar'/>
            <div className='header_secion_left_status'>
                LvL 20
            </div>
        </div>
        <div>
            <img src='' alt='exit'/>
        </div>

    </div>
  )
}
export default Header;