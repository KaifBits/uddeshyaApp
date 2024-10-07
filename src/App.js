import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './Home';
import Contactus from './Contactus';
function App() {
  
  return(

    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contactus" element={<Contactus/>} />
      </Routes>
    </Router>
  )
}

export default App;
