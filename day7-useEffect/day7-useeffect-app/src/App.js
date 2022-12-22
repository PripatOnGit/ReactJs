import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect, useRef} from 'react';


//concept: useEffect
function App() {
  const [counter, setCounter] = useState(2);
  const [inputData, setInputData] = useState(10);
  useEffect(()=> {
    // console.log('componant changing!!');
    // setTimeout(() =>setCounter((counter) => counter*2),5000)
    //window.alert("useeffect");
    //console.log("logging console");
    setInputData(() =>counter*10)
    
  },[counter]);
  
  return (
    <div className="App">
      <h1>counter is: {counter}</h1>
      <button onClick={()=>setCounter((counter)=>counter*2)} >Increment</button>
      <h3>Inputdata: {inputData}</h3>
      <AppNew/>
    </div>
  );
}


//concept: useRef
function AppNew() {
  const [newData, setNewData] = useState(1);
  const prevData = useRef(1);
  useEffect(()=>{
    prevData.current = newData;
    },[newData]);

 return(
  <div>
    <h1>New data: {newData}</h1>
    <button onClick={() => setNewData((c) => c*5)}> *5 </button>
    <h1>prev data: {prevData.current}</h1>
  </div>

 );

}


export default App;
