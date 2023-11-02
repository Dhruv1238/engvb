import { useState } from 'react'
import { NavbarSimple } from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div id='--black-gradient' className='h-screen w-screen bg-primary'>
      <NavbarSimple />
      </div>
    </>
  )
}

export default App
