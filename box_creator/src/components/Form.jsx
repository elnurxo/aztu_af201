import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const Form = ({setBox,box}) => {
  let[width,setWidth]=useState(0);
  let[height,setHeight]=useState(0);
  let[color,setColor]=useState("");

  function widthChange(e) {
    setWidth(e.target.value);
  } 
  function heightChange(e) {
    setHeight(e.target.value);
  }
  function colorChange(e) {
    setColor(e.target.value);
  }
  function handleClick(e) {
    e.preventDefault();
    let newBox = {
        id: uuidv4(),
        width: width,
        height: height,
        color: color
    }
    console.log(newBox.id);
    setBox([...box,newBox]);
    setWidth(0);
    setHeight(0);
    setColor("");
  }


  return (
   <form>
     <input value={width} style={{width:"170px"}} onChange={(e)=>widthChange(e)} type='number' min='0' max='700' placeholder='enter width'/>
     <input value={height} style={{width:"170px"}} onChange={(e)=>heightChange(e)} type='number' min='0' max='700' placeholder='enter height'/>
     <input value={color} onChange={(e)=>colorChange(e)} type='color'/>
     <button onClick={(e)=>handleClick(e)} type='submit'>Create a Box</button>
   </form>
  )
}

export default Form