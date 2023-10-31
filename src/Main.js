import React, { useState } from 'react';
import './Main.css'
const Main = ()=>{
    return (
        <div className='main'>
            <div className='block_lvl'>
                <h2>LvL</h2>
                <div className='lvl_bar'>
                    <div className='lvl_progress'> 15 </div> 
                </div>
            </div>
            <h1>Hello User</h1>
        </div>
    )
}
export default Main