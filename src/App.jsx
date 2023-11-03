import { useState } from 'react'
import { NavbarSimple } from './components/NavBar'
import  Hero  from './components/Hero'
import { Numerics } from './components/Numerics'
import { Courses } from './components/Courses'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div id='--black-gradient' className='h-screen w-screen bg-primary overflow-x-hidden'>
      <NavbarSimple />
      <Hero />
      <Numerics />
      <Courses />
      </div>
    </>
  )
}

export default App
