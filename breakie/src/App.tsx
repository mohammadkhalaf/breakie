import React from 'react';
import Home from './pages/Home';
import { Route, Routes } from 'react-router';
import Manuall from './pages/Manuall';
import Breakie from './pages/breakie/Breakie';
import InputBrakie from './pages/InputBrakie';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/manuall' element={<Manuall />} />
        <Route path='/input' element={<InputBrakie />} />
        <Route path='/breakie'  element={<Breakie />} />
      </Routes>
    </div>
  );
}

export default App;
