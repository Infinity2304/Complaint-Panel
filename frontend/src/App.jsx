import { useState, useEffect, use } from 'react'
import Home from './pages/home'
import Main from './pages/main'
import Complaints from './pages/complaints'
import Auth from './pages/auth'
import Admin from './pages/admin'
import { Toaster } from 'react-hot-toast'
import { Navigate, Route, Routes } from 'react-router-dom'

import './App.css'

function App() {

  return <div className='p-4 h-screen flex items-center justify-center'>
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/home' element={<Home />} />
      <Route path='/complaint' element={<Complaints />} />
      <Route path='/auth' element={<Auth />} />
      <Route path='/admin' element={<Admin />} />
    </Routes>
    <Toaster />
  </div>
}

export default App
