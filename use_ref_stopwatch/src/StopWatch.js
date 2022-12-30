import { Button } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'

const StopWatch = () => {
    //ref
    const timerIdRef = useRef(0);
    //states
    const[start,setStart] = useState(false);
    const[stop,setStop] = useState(false);
    const[restart,setRestart] = useState(false);
    
    const [count, setCount] = useState(0);
  
    //functions
    const startHandler = () => {
      if (timerIdRef.current) { return; }
      timerIdRef.current = setInterval(() => setCount(c => c+1), 1000);
      setStart(true);
      setStop(false);
      setRestart(false);
    };
    const stopHandler = () => {
      clearInterval(timerIdRef.current);
      timerIdRef.current = 0;
      setStop(true);
      setStart(false);
      setRestart(false);
    };
    const resetHandler = () => {
        clearInterval(timerIdRef.current);
        setCount(0);
        setRestart(true);
        setStart(false);
        setStop(false);
    };
    
    useEffect(() => {
      return () => clearInterval(timerIdRef.current);
    }, []);
    return (
      <>
    <div style={{display:"flex",justifyContent:"center",height:"100vh",alignItems:"center"}}>
        <div style={{fontWeight:"bold",marginRight:"20px"}}>Timer: {count}s</div>
        <div>
        <h1 style={{textAlign:"center"}}>Stop Watch...</h1>
        <Button style={{marginRight:"10px"}} variant={start ? "outlined" : "contained"} color='success' onClick={startHandler}>Start</Button>
        <Button style={{marginRight:"10px"}} variant={stop ? "outlined" : "contained"} color='error' onClick={stopHandler}>Stop</Button>
        <Button style={{marginRight:"10px"}} variant={restart ? "outlined" : "contained"} color='warning' onClick={resetHandler}>Reset</Button>
        </div>
    </div>
      </>
   
    );
}

export default StopWatch