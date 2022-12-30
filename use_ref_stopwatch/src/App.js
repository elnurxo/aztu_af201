import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [age, setAge] = useState(20);
  const render = useRef(0);

  useEffect(() => {
    render.current = render.current + 1
  })
  function updateAge() {
    setAge(prevAge => prevAge + 1)
  }
  return (
   <>
    <div className='center'>
        <p>This site is strictly for adults ranging from 20-...</p>
        <p>you are {age} years old</p>
        <button onClick={updateAge}>set age</button>
        <p>This state rendered {render.current} times</p>
      </div>
   </>
  );
}

export default App;
