import React, { useEffect } from 'react';
import Home from './pages/Home';
import './App.css'
import { Route, Routes } from 'react-router';
import Manuall from './pages/Manuall';

function App() {
  return (
    <div className='App'>
    
      <Routes>
          <Route  path="/"  element={<Home/>}/>
          <Route  path="/manuall"   element={<Manuall/>}/>
          </Routes>
    </div>
  );
}

export default App;
