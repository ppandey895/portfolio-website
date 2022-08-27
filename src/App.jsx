import { useState } from 'react';
import './App.css';
import Landing from './Components/Landing';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={ <Landing /> } />
        <Route path="/home" element={ <Home /> } />
      </Routes>
    </div>
    </Router>
  )
}

export default App;
