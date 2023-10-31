import React, { useState } from 'react';

const Form = ()=>{
    const [name, setName] = useState('');
    const handleEmailChange =(event)=>{
      setName(event.target.value);
    }
    const sum =()=>{
      let date = new Date(Date.now() + 604800e3);
      date = date.toUTCString();
      document.cookie = `name=${name}; expires= + ${date}`;
    }
    return (
      <form >
        <label>Enter name</label>
        <input 
          value={name}
          onChange={handleEmailChange} />
        <button onClick={sum}>Submit</button>
      </form>
    )
  }
  export default Form;