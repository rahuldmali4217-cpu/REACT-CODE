import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Home from './../../18-react-router--dom/src/pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product' element={<Product />} />
      </Routes>


    </div>
  )
}

export default App
