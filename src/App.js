// import React, { lazy } from 'react';
import Header from './components/header.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';  
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Registration from './components/Registration.js';
import Home from './components/Home.js';
import About from './components/About.js';

function App() {
  
 
  
 return (

    <div className="App">
      
      <Router>
      <Header/>
        <Routes>
       <Route path="/" element={ <Registration/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        
         
      </Routes>

     </Router>
      
     
    </div>
    
   );
 

  
}

export default App;

