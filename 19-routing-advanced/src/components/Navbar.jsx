import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='bg-blue-800 text-2xl flex justify-between items-center py-5 px-10'>
            <h3>Rahul</h3>
            <div className='flex gap-10 items-center'>
                <Link to='/' >Home</Link>
                <Link to='/about' >About</Link>
                <Link to='/courses' >Courses</Link>
                <Link to='/contact' >Contact</Link>
                <Link to='/product' >Product</Link>
            </div>
        </div>
    )
}

export default Navbar
