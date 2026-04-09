import React, { useState } from 'react'

const App = () => {




  const [num, setNum] = useState(0)

  function increseNum() {
    setNum(num + 1)
  }



  function decreseNum() {
    setNum(num - 1)
  }


  function resetNum() {
    setNum(0)
  }
  return (
    <div>

      <h1>{num}</h1>


      <button onClick={increseNum}>Increase</button>
      <button onClick={decreseNum}>Decrease</button>
      <button onClick={resetNum}>Reset</button>


    </div>
  )
}

export default App