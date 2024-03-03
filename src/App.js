import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TestForm from './components/TestForm';
import Alert from './components/Alert';
import { useState } from 'react';

import {
  BrowserRouter as Router,
  Routes ,
  Route,
  Link
} from "react-router-dom";

function App() {
  const[mode,setMode]=useState('light');
  const toggleMode=()=>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode enabled !","success");
    }else{
      setMode('dark');
      document.body.style.backgroundColor='#324a63';
      showAlert("Dark mode enabled !","success");
    }
  }
  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
  }

  setTimeout(() => {
    setAlert(null)
    },1500);
    
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} navBorderStyle="nav-border"/>
      <Alert alert={alert}/>
      <div className="container my-2">
      <Routes>
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/"
            element={<TestForm heading="Enter your text below" mode={mode} showAlert={showAlert} 
            toggleMode={toggleMode}/>}>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
