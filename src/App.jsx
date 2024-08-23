import { useState } from 'react'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import Dashboard from './pages/Dashboard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Header/>
  <Routes>
    <Route path='/' element={<Content />} ></Route>
    <Route path='/register' element={<Content Register />} ></Route>
    <Route path='/dashboard' element={<Dashboard />}></Route>
    
  </Routes>
 
  <Footer/>
    </>
  )
}

export default App
