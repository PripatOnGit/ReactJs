import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link}from 'react-router-dom';
import Home from './components/home';
import AboutUs from './components/aboutus';
import ContactUs from './components/contactus';
import DashBoard from './components/dashboard';
import { useEffect, useState } from 'react';

function App() {
  //define state
  const [state, setState] = useState({test:'Testing'})
  useEffect(()=>{
    setTimeout(()=>{
      setState({test:"State of State is updated!!!"})
    },5000)
  })
  return (
    <div>
      {/* <h3 class='text-success'>text-success</h3>
      <h3 class='text-info'>text-info</h3>
      <h3 class='text-warning'>text-warning</h3> */}
      <Router>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/aboutus'>AboutUs</Link></li>
          <li><Link to='/dashboard'>DashBoard</Link></li>
          <li><Link to='/contactus'>ContactUs</Link></li>
        </ul>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/aboutus' element={<AboutUs/>}></Route>
          <Route exact path='/contactus' element={<ContactUs/>}></Route>
          <Route exact path='/dashboard' element={<DashBoard test={state.test}/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
