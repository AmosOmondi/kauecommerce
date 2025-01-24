import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './components/dashboard'
import Login from './components/Login';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import Register from './components/Register';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ProductCard from './components/product';
import ProductList from './components/productList';
import React, { useState } from 'react';






function App(){

  
  return(
<>
    <Router>
    
      <div className='container'>
      
        <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/login' element={<Login />} />
      <Route path='/adminLogin' element={<AdminLogin />} />
      <Route path='/register' element={<Register />} />
      <Route path='/products' element={<ProductList />} />
      </Routes>

      </div>
    </Router>
<ToastContainer />
</>
  );
}
export default App;