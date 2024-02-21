// import About from './Components/About';
import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



export default function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }
  const toggleMode= ()=>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled","success");
    }
  }
  return (
    <>
      <Router>
      <Navbar title = "TextUtils" aboutText = "About TextUtils" mode = {mode} toggleMode= {toggleMode}/>
      <Alert alert = {alert}/>
      <div className="container my-5">
      <Routes>
          <Route exact path="/about" element = {<About mode = {mode}/>}>
          </Route>
          <Route exact path="/" element = {<TextForm heading= "Enter the text to analyze" mode = {mode} showAlert = {showAlert} />}>
          </Route>
        </Routes>
        {/* <About /> */}
      </div>
      </Router>
    </>
  );
}


