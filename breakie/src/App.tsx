<<<<<<< HEAD
=======
import React from 'react';
>>>>>>> 3fc445c5df2491e7865f53dae6eb951e9320b296
import Home from './pages/Home';
import { Route, Routes } from 'react-router';
import Manuall from './pages/Manuall';
import Breakie from './pages/Breakie';
import InputBrakie from './pages/InputBrakie';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/manuall' element={<Manuall />} />
        <Route path='/input' element={<InputBrakie />} />
        <Route path='/breakie' element={<Breakie />} />
      </Routes>
    </div>
  );
}

export default App;
