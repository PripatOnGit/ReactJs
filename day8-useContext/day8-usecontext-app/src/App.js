import logo from './logo.svg';
import './App.css';
import React, {useState, useContext, createContext} from 'react';

const UserInfoContext = createContext();

function App() {
  const [name,setName] = useState("Radha");
  const [age,setAge] = useState(30);
  return (
    <div className="App">
      <UserInfoContext.Provider value={{value1:name, value2:age}}>
      <h1>{`Hi I am ${name}. I am ${age} years old. `}</h1>
      <AboutUs/>
      </UserInfoContext.Provider>
    </div>
  );
}

function AboutUs() {
  const {value1, value2} = useContext(UserInfoContext);
  // const name =value1;
  // const age = value2;
  return(
    <>
    <h1>this is About us componant</h1>
    <h2>{`My name is ${value1}.I am ${value2} years old.`}</h2>
    {/* <h2>{`My name is ${name}.I am ${age} years old.`}</h2> */}
    </>
  );
}

export default App;
