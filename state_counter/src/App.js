import { Box, Button } from "@mui/material";
import { useState } from "react";
import "./App.css";

function App() {
  //#region Counter State
  let [counter, setCounter] = useState(0);

  function Increase() {
    setCounter(++counter);
  }
  function Decrease() {
    if (counter > 0) {
      setCounter(--counter);
    }
  }
  //#endregion

  return (
    <>
      <Box
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
      </Box>
    </>
  );
}

export default App;
