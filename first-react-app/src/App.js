import logo from './logo.svg';
import './App.css';
import React from 'react';
import { render } from '@testing-library/react';
import {React} from 'react';

//Day2-exercise
function App() {
  return (
      <div className='App'>
        <h1>Hello World!!</h1>
        <br></br>
        <MyComponent />
      </div>
    
  );
}

class MyComponent extends React.Component{
  render(){
    return([
    <div>
      <form>
        Enter Search: <input type="text" id="search"></input>
        <h3 id="result">Result: </h3>
        <button id='btn' onClick={colorChange} >Click Here!!</button>
      </form>
    </div>
    ])
  }
}




//Day4- functionalcomponent using Props, state
const App = () => {
  return <h1>Hello World!!</h1>
}



export default App;
//export {MyComponent};