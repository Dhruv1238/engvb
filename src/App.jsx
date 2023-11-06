import { useState } from 'react'
import { NavbarSimple } from './components/NavBar'
import Hero from './components/Hero'
import { Numerics } from './components/Numerics'
import { Courses } from './components/Courses'
import { Facilities } from './components/Facilities'
import AboutUs from './components/AboutUs'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  )
}

export default App
