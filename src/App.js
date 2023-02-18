import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import About from './components/About';
import React , { useState } from 'react';
import Alert from './components/Alert';


// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
  
  
// } from "react-router-dom";

function App() {
const [mode , setMode] = useState("light");
const [alert, setAlert] = useState(null);

const showAlert = (message , type)=>{
   setAlert({
    msg : message,
    type : type  }
   )

   setTimeout(()=>{
    setAlert(null)
   } , 1500
   );
}

const toggleMode = ()=>{
  if(mode==='light')
  {
    setMode("dark");
    document.body.style.backgroundColor = '#1f2753';
    showAlert("Dark mode is enabled successfully" , "success");
    document.title = "TextUtils-Dark mode";
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode is enabled successfully" , "success");
    document.title = "TextUtils-Light mode";
  }
}


const toggleModeRed = ()=>{
  if(mode==='light')
  {
    setMode("red");
    document.body.style.backgroundColor = '#d50b0b';
    showAlert("Dark mode is enabled successfully" , "success");
    document.title = "TextUtils-Red mode";
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode is enabled successfully" , "success");
    document.title = "TextUtils-Light mode";
  }
}


const toggleModeBlue = ()=>{
  if(mode==='light')
  {
    setMode("blue");
    document.body.style.backgroundColor = '#1223ce';
    showAlert("Dark mode is enabled successfully" , "success");
    document.title = "TextUtils-Blue mode";
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode is enabled successfully" , "success");
    document.title = "TextUtils-Light mode";
  }
}

    return (
      <>

{/* 
     <Router> */}
      <Navbar title = "textutils" mode={mode} toggleMode = {toggleMode}  toggleModeRed = {toggleModeRed} toggleModeBlue = {toggleModeBlue} />
      <Alert alert={alert}/>

      <div className="container my-3">

      <Textform heading="Enter text to analyse" mode = {mode} showAlert = {showAlert}/>
    
      {/* <Route exact path='/' element={<Textform heading="Enter text to analyse" mode = {mode} showAlert = {showAlert}/>} />
        

      <Route exact path='/about' element={<About className="about"/>} />
     <Routes> */}
     

     {/* </Routes> */}
      </div>
     {/* </Router> */}
      </>
    );
  }


export default App;
