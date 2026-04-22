import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Nav2 = () => {

    const [theme] = useContext(ThemeDataContext)



    return (
        <div className='nav2'>
            <h2>Home</h2>
            <h2>About</h2>
            <h2>Contact</h2>
            <h2>Services</h2>
            <h2>{theme}</h2>
        </div>
    )
}

export default Nav2
