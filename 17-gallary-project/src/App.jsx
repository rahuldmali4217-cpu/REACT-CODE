import React, { useEffect, useState } from 'react'
import axios from 'axios';

const App = () => {

  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  async function getdata() {
    const res = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)

    setUserData(res.data)

  }

  useEffect(function () {
    getdata()
  }, [index])

  console.log(userData);



  let printUserData = <h3 className='text-gray-400 text-lg absolute left-[50%] top-[50%] translate-[-50%]'>Loading...</h3>

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {

      return <a href={elem.url} key={idx} target='_blank' className=' transition-all duration-350 ease hover:scale-110' >

        <div className=' h-60 w-60 rounded-xl overflow-hidden mb-1 '>
          <img className=' h-full w-full  object-cover' src={elem.download_url} alt="" />
        </div>
        <h2 className='h-fit text-center font-bold rounded-lg'>{elem.author}</h2>

      </ a>

    })
  }


  return (
    <div className='bg-black min-h-dvh text-white flex flex-col items-center'>
      {/* <button onClick={getdata}
        className='bg-green-500 m-5 p-3 rounded text-white active:scale-95'
      >Get data</button> */}

      <div className='flex  flex-wrap mx-5 p-10 gap-10 justify-center h-[90vh]'>
        {printUserData}
      </div>

      <div className='flex w-100 justify-between items-center gap-3'>
        <button className=' bg-amber-300 rounded active:scale-95 cursor-pointer px-5 py-2 text-black font-bold '
          onClick={() => {

            if (index > 1) {
              setIndex(index - 1)
            }
            setUserData([])
          }}
        >Prev</button>
        <h1>Page-{index}</h1>
        <button className=' bg-amber-300 rounded active:scale-95 cursor-pointer px-5 py-2 text-black font-bold'
          onClick={() => {
            setIndex(index + 1)
            setUserData([])
          }}
        >Next</button>
      </div>

    </div>
  )
}

export default App