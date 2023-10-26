import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Signin from './pages/Signin';
import SignUp from './pages/SignUp';
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = '/' element = {<Home />} />
      <Route path = '/profile' element = {<Profile />} />
      <Route path = '/signin' element = {<Signin />} />
      <Route path = '/signup' element = {<SignUp />} />
      <Route path = '/about' element = {<About />} />
    </Routes>
    </BrowserRouter>
  )
}
