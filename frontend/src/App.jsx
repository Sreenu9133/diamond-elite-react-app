import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'

import Login from './components/login/login-page'
import Register from './components/register/register-page'
import AppRoutes from './routes/AppRoutes'

function App() {

  return (
    <>
      <AppRoutes />
    </>
  )
}

export default App
