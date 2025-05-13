import { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SignUp from './pages/SignUp';
import Markdown from 'react-markdown';
import Home from './pages/Home';
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom';
import SignIn from './pages/SignIn';

function App() {

  return (
    <div className='h-full w-full  bg-black'>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Navigate to="/home"/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>}/>
      </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App
