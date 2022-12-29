import { useReducer } from 'react';
import './App.css';

//actions
const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  RESET: 'reset'
}


//reduce func
function reduce(state,action) {
  switch(action.type){
    case ACTIONS.INCREMENT:
       return {
          count:state.count+1
       }
    case ACTIONS.DECREMENT:
       return {
        count: state.count !==0 ? state.count-1 : state.count=0
       };
    case ACTIONS.RESET:
      return{
        count: state.count=0
      }
    default:
      return state.count;
  }
}


function App() {
  const[state,dispatch]= useReducer(reduce,{count:0});

  function increment() {
    dispatch({type:ACTIONS.INCREMENT});
  }
  function decrement() {
    dispatch({type:ACTIONS.DECREMENT})
  }
  function reset() {
    dispatch({type:ACTIONS.RESET})
  }

  return (
   <>
    <button onClick={()=>decrement()}>-</button>
    <span>{state.count}</span>x
    <button onClick={()=>increment()}>+</button>
    <button onClick={()=>reset()}>reset</button>
   </>
  );
}

export default App;
