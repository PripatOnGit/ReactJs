import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const userApi = "http://localhost:3000/userProfile";
  const [userProfile, setUserProfile] = useState([]);

  useEffect(() => {
    axios.get(userApi).then((response)=>{
      console.log(response);
      console.log(response.data);
      setUserProfile(response.data);
    })
  },[]);

  return (
    <div className="App">
      {
        userProfile.map((user) =>{
          return(
          <div key={user}>
            <p>{user.id}</p>
            <p>test {user.firstName}</p>
            <p>{user.lastName}</p>
            <p>{user.emailId}</p>
            <p>{user.location}</p>
          </div>
          )
        })
      }
    </div>
  );
}

export default App;
