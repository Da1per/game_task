import React, { useState } from 'react';
import './Main.css'
import LeftSection from './LeftSection/LeftSection';
import MainSection from './MainSection/MainSection';
const Main = ()=>{
    return (
        <div className='main'>
            <LeftSection/>
            <MainSection/>
        </div>
    )
}
export default Main