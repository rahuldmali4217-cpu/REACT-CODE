import React from 'react'
import './index.css'

const App = () => {

  const btnClicked = () => {
    document.querySelector('h1').textContent = 'Hello Kundan'
  }

  function inputChanging() {
    console.log('User is typing');

  }

  return (
    <div onWheel={(elem) => {
      console.log(elem.deltaY);

    }}>
      {/* <h1>Hello Rahul</h1>

      <button className=' m-2 p-2 border rounded-full bg-red-200 ' onDoubleClick={btnClicked}>Change user</button>

      <input onChange={inputChanging} className=' py-1 px-2 m-2 border-2 ' type="text" placeholder='Enter Name' /> */}

      {/* <div onMouseMove={(elem) => {
        console.log(elem.clientX, elem.clientY);

      }} className=' h-50 w-50 bg-red-300'> */}


      <div className=' h-screen w-full bg-[#111]'>

      </div>
      <div className='h-screen w-full bg-[#222]'>

      </div>
      <div className='h-screen w-full bg-[#333]'>

      </div>
    </div>

  )
}

export default App