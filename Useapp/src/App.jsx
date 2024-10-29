import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import StateBasics from './components/StateBasics'
import Counter from './components/Counter'
import DisplayName from './components/DisplayName'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Routes>
     <Route path='/c' element={<Counter/>}/> 
     <Route path='/n' element={<DisplayName/>}/>
      <Route path='/s' element={<StateBasics/>}/>
     </Routes>
   
    </>
  )
}

export default App
