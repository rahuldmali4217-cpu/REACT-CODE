import React, { useContext, useState } from 'react'
import Navbar from './components/Navbar'
import { ThemeDataContext } from './context/ThemeContext'
import Button from './components/Button'

const App = () => {

  const data = useContext(ThemeDataContext)

  console.log(data);


  const [theme, setTheme] = useState('light')

  return (
    <div>
      <Navbar theme={theme} />
      <Button />

    </div>
  )
}

export default App
