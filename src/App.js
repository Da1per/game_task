import './App.css';
// import React, { useState } from 'react';
import Form from './Form';
import Main from './Main';
import Header from './Header/Header';
import PopUp from "./PopUp"
import { useSelector,useDispatch } from 'react-redux'
function App() {
  let names = useSelector((state) => state.reduceSlice.persName)
  let locStor=localStorage.getItem('test')
  console.log(names)
  return (
    <div className="App">
      {(!locStor||names)?<PopUp/>:null}
      <Header/>
      <Main/>

    </div>
  );
}

export default App;
