import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';

function App() {
  const [userInfo, setUserInfo] = useState({});
  const onHandleChange = (event)=>{
    const name = event.target.name;
    const value =event.target.value;
    setUserInfo(values=>({
      ...values,[name]:value})
    )
  };

  function onSubmitHandler(event) {
    event.preventDefault();
    alert(`Name you entered was ${JSON.stringify(userInfo)}.`)
  };
  return (
    <div className="App">
      <form onSubmit={onSubmitHandler}>
        <lable>First Name: </lable><input type='text' name='fname' value={userInfo.fname} onChange={onHandleChange}/>
        <lable>Last Name: </lable><input type='text' name='lname' value={userInfo.lname} onChange={onHandleChange}/>
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
