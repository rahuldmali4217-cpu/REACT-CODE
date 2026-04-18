import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavigateButton = () => {

    const navigate = useNavigate()



    return (
        <div className=' absolute top-20 left-2 flex gap-3'>
            <button
                className=' px-5 py-2 bg-indigo-500 rounded'
                onClick={() => {
                    navigate('/')
                }}
            >
                Go To Home Page
            </button>

            <button
                className=' px-5 bg-indigo-500 rounded'
                onClick={() => {
                    navigate(-1)
                }}
            >
                Back
            </button>


        </div>
    )
}

export default NavigateButton
