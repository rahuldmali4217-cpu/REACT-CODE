import React from 'react'
import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import Men from './pages/Men';
import Women from './pages/Women';
import Product from './pages/Product';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import NavigateButton from './components/NavigateButton';

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar />
      <NavigateButton />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product' element={<Product />} >
          <Route path='/product/men' element={<Men />} />
          <Route path='/product/women' element={<Women />} />
        </Route>

        <Route path='/courses/:courseName' element={<CourseDetails />} />

        {/* 
        <Route path='/product/men' element={<Men />} />
        <Route path='/product/women' element={<Women />} />
         */}

        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
