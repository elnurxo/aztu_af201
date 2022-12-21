import { useState } from 'react';
import './App.css';
import Box from './components/Box';
import Form from './components/Form';

function App() {
  let[box,setBox]=useState([]);


  return (
   <>
    <Form setBox={setBox} box={box}/>
    <Box box={box}/>
   </>
  );
}

export default App;
