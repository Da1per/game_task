import './App.css';
// import React, { useState } from 'react';
import Form from './Form';
import Main from './Main';
import Header from './Header/Header';
import PopUp from "./PopUp"
function App() {
  let locStor=localStorage.getItem('test')
  console.log(locStor)
  return (
    <div className="App">
      {(!locStor)?<PopUp/>:null}
      <Header/>
      <Main/>

    </div>
  );
}

export default App;
