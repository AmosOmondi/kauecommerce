import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './components/dashboard'
import Login from './components/Login';
import Register from './components/Register';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import React, { useState } from 'react';






function App(){

  
  return(
<>
    <Router>
    
      <div className='container'>
      
        <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      
      </Routes>

      </div>
    </Router>
<ToastContainer />
</>
  );
}
export default App;