import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <>
      <div className='parent'>
        <Card name='Rahul' age={20} img="https://images.unsplash.com/flagged/photo-1553642618-de0381320ff3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fHww" />
        <Card name='Kundan' age={21} img="https://plus.unsplash.com/premium_photo-1664540415069-bc45ce3e711e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fHww" />
        <Card name="Parth" age={20} img="https://images.unsplash.com/flagged/photo-1573603867003-89f5fd7a7576?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2Zlc3Npb25hbCUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D" />
      </div>
    </>
  )
}

export default App
