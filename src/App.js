import logo from './logo.svg';
// import './App.css';
import Demo from './Demo';
import { useState, useEffect } from 'react';

function App() {
  const [name, setName] = useState([]);

  const updateName = () =>{
    setName(["shubham","sutar"]);
  }

  useEffect(()=>{
    setName(["vaibhav","chavan"]);
  },[]);
  return (
    <div className="App">
      <Demo name={name} fun={updateName}/>
    </div>
  );
}

export default App;
