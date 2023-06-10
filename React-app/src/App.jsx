import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './componant/Home'
import Signin from './componant/Auth/Signin'
import Login from './componant/Auth/Login';
import NotFound from './componant/NotFound';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
