import './App.css';
// import React, { useState } from 'react';
import Form from './Form';
import Main from './Main';
import Header from './Header/Header';
import PopUp from "./PopUp"
import { useSelector,useDispatch } from 'react-redux'
import   {
  toInicel
} from "./reducer/reduceSlice" 
function App() {
  let names = useSelector((state) => state.reduceSlice.names)
  let locStor=localStorage.getItem('test')
  const dispatch = useDispatch()
  dispatch(toInicel(localStorage.getItem('test')))

  return (
    <div className="App">
      {(!names)?<PopUp/>:null}
      <Header/>
      <Main/>

    </div>
  );
}

export default App;
