import './App.css';
// import React, { useState } from 'react';
import Form from './Form';
import Main from './Main';
let cookies = document.cookie

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
(!cookies)?alert("Hello new user"):alert(`Hello ${getCookie('name')}`)


function App() {
  return (
    <div className="App">
        {(!cookies)?<Form/>:<Main/>}
    </div>
  );
}

export default App;
