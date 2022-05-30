import React, { useState } from 'react';
import Home from './pages/home/Home';
import { Route, Routes } from 'react-router';
import Manuall from './pages/Manuall';
import Breakie from './pages/breakie/Breakie';
import InputBrakie from './pages/input/InputBrakie';
import './App.css';
import Menu from './components/menu/menu';
import Overlay from './components/overlay/Overlay'

function App() {
   
  return (
    <div className='App'>
      <Menu/>
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
