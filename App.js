import React, { useState } from 'react';
import UserInput from './UserInput';
import UserOutput from './UserOutput';
import './App.css';

const App = (props) => {
const [name,changeName] = useState('Ishan');

const handleChange = (event) => {
  changeName(event.target.value);
}

    return (
      <div className="App">
       <UserInput handleChange = {handleChange}/>
       <UserOutput name = {name}/>
       <UserOutput name = {name}/>
      </div>
    );
  }

export default App;
