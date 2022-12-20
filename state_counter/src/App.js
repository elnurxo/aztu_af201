// import { Box, Button } from "@mui/material";
// import { useState } from "react";
import { Box, Button } from "@mui/material";
import { useState } from "react";
import "./App.css";

function App() {
  //#region Counter State
  // let [counter, setCounter] = useState(0);

  // function Increase() {
  //   setCounter(++counter);
  // }
  // function Decrease() {
  //   if (counter > 0) {
  //     setCounter(--counter);
  //   }
  // }
  //#endregion
  // let[color,setColor] =  useState("green");

  // function changeSuccess() {
  //   setColor("green");
  // }
  
  // function changeError() {
  //   setColor("red");
  // }

  let[active,setActive]=useState(false);

  function handleClick() {
    setActive(!active);
  }

  return (
    <>
      {/* <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          color={counter === 0 ? "error" : "success"}
          variant="outlined"
          onClick={Decrease}
        >
          Decrease -
        </Button>
        <span style={{ margin: "0px 20px" }}>
          <strong>
            {counter} {counter === 0 ? ":(" : ":)"}
          </strong>
        </span>
        <Button variant="outlined" onClick={() => Increase()}>
          Increase +
        </Button>
      </Box> */}
   <Box
      sx={{
        width: 300,
        height: 300,
        backgroundColor: active ? "green" : "red",
      }}

    />
  {/* <Button onClick={()=>changeSuccess()} style={{marginTop:"30px",marginRight:"20px"}} color='success' variant="contained">Success</Button> */}
  {/* <Button onClick={()=>changeError()} style={{marginTop:"30px"}} color='error' variant="contained">Error</Button> */}
  <Button onClick={()=>handleClick()} style={{marginTop:"30px"}} color='warning' variant="contained">Toggle Color</Button>
    </>
  );
}

export default App;
