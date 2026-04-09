
import React from 'react'
import { useState } from 'react';

const App = () => {

  const [note, setNote] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

  const submitHandling = (elem) => {
    console.log('Form submitted');

    elem.preventDefault()

    const copyTask = [...task]

    copyTask.push({ note, details })

    setTask(copyTask)

    setNote('')
    setDetails('')

  }

  function deleteNote(idx) {
    const copyTask = [...task]

    copyTask.splice(idx, 1)

    setTask(copyTask)


  }

  return (
    <div className=' bg-black min-h-screen text-white text-[18px] lg:flex '>
      <form
        onSubmit={(e) => {
          submitHandling(e)
        }}
        className='flex flex-col  lg:w-1/2 gap-5  p-10 font-medium items-start'>
        <input
          className=' px-5 w-full font-medium py-2 border-2 outline-none rounded'
          type="text"
          placeholder='Enter Note Heading'
          value={note}
          onChange={(e) => {
            setNote(e.target.value)
          }}
          required

        />
        <textarea
          className='px-5 w-full font-medium py-2 border-2 outline-none rounded h-32'
          placeholder='Write Details Here'
          name=""
          id=""
          value={details}
          onChange={(e) => {
            setDetails(e.target.value)
          }}
          required
        ></textarea>
        <button

          className=' bg-white text-black active:scale-95 rounded py-2 text-2xl cursor-pointer outline-none w-full' >Add</button>
      </form>
      <div className='lg:w-1/2 lg:border-l-2  p-10 h-screen'>
        <h1>Recent Notes</h1>

        <div id='notes-div' className='flex flex-wrap items-start justify-start gap-5 mt-6 h-[95%] overflow-auto'>

          {task.map((elem, idx) => {
            return <div key={idx} className=" flex justify-between flex-col items-start relative h-52 w-40  bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/large_2x/sticky-note-paper-background-free-png.png')]">
              <div>
                <h1 className=' leading-tight text-lg font-bold'>{elem.note}</h1>
                <p id='notes-details' className='mt-2 mb-2 leading-tight font-semibold text-xs text-gray-500 h-15 overflow-auto'>{elem.details}</p>
              </div>
              <button
                onClick={() => {
                  deleteNote(idx)
                }}
                className=' w-full cursor-pointer outline-none rounded active:scale-95 text-white text-xs py-1 font-bold bg-red-500'>Delete</button>
            </div>
          })}

        </div>
      </div>
    </div>
  )
}

export default App
